+++
author = 'Jeff Mayeur'
title = 'Centering an Image'
tags = ['Accessibility', 'color-contrast', 'WCAG 2.1 (AA)']
date = 2024-05-24T17:00:00-07:00
summary="Learning how to center an image with Hugo."
draft = false
+++

# Playing by the Rules


## Observe
The Clarity Theme appears to have pretty straight forward way of marshalling a MD Image Tag ***\![Alt Text](ImageUrl Title)*** into an HTML `img` Tag. It takes that markdown and hands it to the [image.html](https://github.com/chipzoller/hugo-clarity/blob/master/layouts/partials/image.html) partial There's some logic there to parse the variables. Once that logic has done it's work. I invokes the [figure.html](https://github.com/chipzoller/hugo-clarity/blob/master/layouts/partials/figure.html) partial to be rendered into the final HTML `<img alt="Alt Text" src="ImageSrc"/><figcaption>Title || Alt Text</figcaption>` tags.

Within this flow there were a few options I could consider to support centering, but I wanted to learn about a new part of the Hugo ecosystem, so I took a full left turn away from [partial templates](https://gohugo.io/templates/) into [shortcodes](https://gohugo.io/content-management/shortcodes/). My goal here is not expertise, but to solve a problem and gain a little more knowledge about the tool-set I'm using.

## Orient
To build out a more complete map, I needed to get a better understanding of how the [partial templates](https://gohugo.io/templates/) and [shortcodes](https://gohugo.io/content-management/shortcodes/) interplay worked. I started with this [demo](https://gohugo.io/templates/shortcode-templates/) on creating a shortcode.

I also found it helpful to read through feature requests like this [one](https://discourse.gohugo.io/t/could-shortcodes-and-partials-be-unified/1348) that discussed the difference. The key factor here was the explicit nature of shortcodes. It gives me the ability to say for "this thing only" do a special rendering path, don't mess with every other image tag. This was a key distinction.

## Decide
With the basics map laid, and enough information to make an initial attempt, I opted for the shortcode route. I only wanted to center my photo on the [About](/about) page. I wasn't ready to make changes to every image so far. I have future plans around sizing and positioning as general capabilities, but this path would solve my initial problem and let me try a new part of the Hugo rendering engine.

## Act
I made a few changes, adding a new [caption_center](https://github.com/jmayeur/i-guess-that-works/blob/main/assets/sass/_components.sass#L544) and [image_center](https://github.com/jmayeur/i-guess-that-works/blob/main/assets/sass/_components.sass#L643_) style into the SASS tree. And then created the [shortcode template](https://github.com/jmayeur/i-guess-that-works/blob/main/layouts/shortcodes/centerimage.html). I kept the same basic logic as the image partial, although I don't have special handling for internal (file) based images as I don't have a need for that capability with the deployment and asset approach I've currently utilizing.

With the shortcode created, I added the markup below to the [about post](/about), and magic occurs. I suddenly have a centered image and caption*. 

**\{\{% centerimage src="/images/about/jeff.png" alt="Photo of Me, Jeff Mayeur" title="Me" %}}**

Creates:

```
{{% centerimage src="/images/about/jeff.png" alt="Photo of Me, Jeff Mayeur" title="Me" %}}
```

*I'm skipping a lot here, but I'll cover that in the next section.
## But
Once I looked closely at the [shortcode template](https://github.com/jmayeur/i-guess-that-works/blob/main/layouts/shortcodes/centerimage.html), I saw that I didn't have anything to handle the figcaption, yet it was still showing up under the img tag.  

After a few rounds of debugging it appeared that my map of the Hugo Clarity's templates was wrong. I needed to do a few exploratory tests to validate what I was seeing and build a better map.

### Re-act (Just Hack It)
1. I added some text into the [figure.html](https://github.com/chipzoller/hugo-clarity/blob/master/layouts/partials/figure.html) template and see if it shows up on a normal image? **RESULT - FAIL**
2. I tried adding something in the [image.html](https://github.com/chipzoller/hugo-clarity/blob/master/layouts/partials/image.html) template? **RESULT - FAIL**
3. I executed a find in files for `figcaption` and found something interesting... [this](https://github.com/chipzoller/hugo-clarity/blob/master/assets/js/index.js#L284)
4. One more override of [this line](https://github.com/chipzoller/hugo-clarity/blob/master/assets/js/index.js#L293) to set the caption text to APPLES  **RESULT - SUCCESS**

{{% centerimage src="/images/center-image/apples.png" alt="Image caption being overridden to APPLES" title="APPLES everywhere" %}}

It seems like now I had a workable map of how an Image gets rendered from MD --> HTML. Bonus, I now understood why the Title variable I was setting was not being rendered and instead always falling back to the Alt Text.

## It's Okay
I would strongly argue that even in a professional context. It's okay to approach problems like this. It's impossible to fully understand everything before starting. Certainly context matters, I wouldn't just blunder around a production set of high-throughput Kafka streams. For something with lower stakes like this however, it's a great way to find the bounds of what works and what will cause grief later on.

In this case I made some mistakes, probably didn't solve things in the "proper way". It took a little head scratching to get the outcome I was looking for, and definitely a few tries to get it the way I wanted. Hot reloading is such a core expectation of any web development I do these days.

Other tweaks include adding this little bit to my [shortcode template](https://github.com/jmayeur/i-guess-that-works/blob/main/layouts/shortcodes/centerimage.html) `title="{{ with .Get "title" }}{{ . }}{{ else }}{{ .Get "alt" }}{{ end }}"`, solving my issues with the missing title text. More importantly than fixing the title, I have a much deeper understanding of the system I'm working with. 

I'm a firm believer in just poking at a system to see what it does. Sometimes that means I'll build and ship something to prod that I will have to clean up later. The key is to understand that I need to own those choices, and that likely when I know more I'm going to have to unwind some of the things I create.

In this case I see lots of things I will probably want to revisit if this is going to be a long term project. I get a bit queasy with magic post-processing functions like `populateAlt`. I'm especially curious to tinker with these [lines](https://github.com/chipzoller/hugo-clarity/blob/master/assets/js/index.js#L243) (also below). And during my poke the stack testing I discovered [this template](https://github.com/chipzoller/hugo-clarity/blob/master/layouts/_default/_markup/render-image.html) that actually handles images. I think there may be another hack or 3 buried in this system. 

```javascript
// Image classes, including ::round
const altArr = alt.split('::').map(x => x.trim())
if (altArr.length > 1) {
  altArr[1].split(' ').filter(Boolean).forEach(cls =>{
    pushClass(image, cls);
    alt = altArr[0]
  })
}

// Image alignment (floating)
const modifiers = [':left', ':right'];
modifiers.forEach(function(modifier){
  const canModify = alt.includes(modifier);
  if(canModify) {
    pushClass(figure, `float_${modifier.replace(":", "")}`);
    alt = alt.replace(modifier, "");
  }
});

// Inline images
const isInline = alt.includes(":inline");
alt = alt.replace(":inline", "");
if(isInline) {
  modifyClass(figure, 'inline');
}
```

### QOTD
“I am in a charming state of confusion.”
― Ada Lovelace