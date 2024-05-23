+++
author = 'Jeff Mayeur'
title = 'Accessible Font Contrast Part 2'
tags = ['Accessibility', 'color-contrast', 'WCAG 2.1 (AA)', 'SASS', 'DSL']
date = 2024-05-23T17:00:00-07:00
draft = false
+++

# It's all about the Patches

## Themes, SASS and Transpilation
[SASS](https://sass-lang.com) is a [DSL](https://martinfowler.com/dsl.html) that [transpiles](https://shadowsmith.com/thoughts/setting-up-a-sass-scss-transpiler) into CSS, I know they're everywhere. In this case there is a variable [$theme](https://github.com/chipzoller/hugo-clarity/blob/master/assets/sass/_variables.sass#L5) and an [rgba function](https://github.com/chipzoller/hugo-clarity/blob/master/assets/sass/_components.sass#L188C23-L188C41) that come together to transpile into a `button_translucent` css class. This class uses the `$theme` as the foreground color (font color) and an alpha translucent variant of the `$theme` as the background color for the non-accessible tag links.

I'm not going to go too deep into understand what SASS does at this point, but you can infer the final transpiled class name from the _components.sass file. Beneath the `.button` definition we find the the `&_translucent` definition. That will be transpiled into the `button_translucent` css class.

## Back to the problem
In this case it will be difficult to get enough color contrast by using the same color, except translucent. If we push the background color to be transparent enough, the entire button will loose contrast with the page background. There doesn't seem to be a way I can get the result that I want from this approach. 

There are a few examples like [this](https://github.com/jhogue/automated-a11y-sass/blob/master/a11y-color.scss), where people have created functions to calculate an color that has enough contrast, but I want to keep this simple. Instead I'm going to see if I can keep this simple. Something I often do is look for the brut-force approach first. I want to understand what I'm really working with before I get fancy.

## A Fix
Starting with this [contrast pallette tool](http://colorsafe.co) I find a few options using the following params. Font Size 12.5px Background color `$theme` (`#0077b8`). I also decided I wanted to up the font-weight. It was a little thin for my eyes, so I upped it to 900. Given those inputs, not many options were available. I opted to go with `#e0ffff` as it was still a little in the blue range. I am not a designer, and I should never have any meaningful control over a color pallette, but in this case I needed something that would pass an accessibility scan, so we had a winner.

To get this to work I had to update the `&_translucent` definition to the following & we got close
```
&_translucent
    background-color: $theme
    color: #e0ffff
    font-weight: 900
    border: 1px solid transparent
```
![Image with good font contrast, but the "count" region is not good enough](/images/accessibility-contrast/contrast-close.png)

There was one last thing. I wanted to have the "counts" on the tags have a distinct background. I had to update the `&_tally` definition to
```
&_tally
    padding: 0 0.75rem
    border-radius: 0.5rem
    background-color: #064b70
```
![Image with good font contrast](/images/accessibility-contrast/contrast-okay.png)

## New Score & New Problems
So for the homepage, we're looking a little better. However as soon as I run [Lighthouse in dev tools](https://developer.chrome.com/docs/lighthouse/overview) on any other page, a whole new set of problems arise. The good news, I have more work I can do. The other good news, I made progress & I learned a little bit more of around how Hugo & SASS work. I've gone with the override vs Fork flow so everything I've mangled can be seen in [Github](https://github.com/jmayeur/i-guess-that-works/tree/main/assets/sass).

![Image with good font contrast](/images/accessibility-contrast/new-score.png)

### QOTD
“You can observe a lot just by watching.”
― Yogi Berra