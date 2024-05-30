+++
author = 'Jeff Mayeur'
title = 'Accessibility 100'
keywords = ['Accessibility', 'Lighthouse', 'ARIA']
description = 'Seeing if I can get the home page to an 100% accessible'
tags = ['Accessibility', 'Lighthouse', 'WCAG 2.1 (AA)']
categories = ['Accessibility']
date = 2024-05-29T17:00:00-07:00
draft = false
+++

# So Close
{{% centerimage src="/images/getting-to-100/start-score.png" alt="Image with Lighthouse Accessibility Score of 96" title="96!" %}}


## Let's See if I Can
Okay not bad, but I'm curious if I can get this to 100. First though I'll cover a bit about how I'm getting these scores. I'm relying on a capability built into the Chrome Dev Tools, [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview). In this case I'm choosing to run an Accessibility only scan. I use Dev Tools extensively, but here I'm just focused on Accessibility.
{{% centerimage src="/images/getting-to-100/lighthouse-settings.png" alt="Only Navigation, Desktop and Accessibility selected in the Lighthouse tool" title="Lighthouse Settings" %}}

After Analyzing the Page Load I not a few things.  First the score can shift a bit on each run. Without making changes I've seen a 91, 93 and 96, but I only see on issue `Form elements do not have associated labels`.

In this case there's just one offending element `input#mode.color_choice`. It's a Form Element, so it should have a [label](https://dequeuniversity.com/rules/axe/4.8/label) to help describe what the element is for. Easy right? Well maybe...

## Break it Down
First lets look at the existing HTML. 
```html
<div class="color_mode">
  <input type="checkbox" class="color_choice" id="mode">
</div>
```

It's a checkbox form element, but that's not really the role it's playing on the page. It's purpose is more like a toggle, it sets either a Dark or Light mode for the experience. Just adding a label might make it pass an accessibility scan, but passing isn't the point. Getting to 100 isn't even the point, the point really is to make the content as useful as possible to as many people as possible.

 This is where [Aria Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) might be useful. A little searching leads me to the [aria-switch](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role) role. It looks pretty promising, it's like a checkbox, but indicates that the element has on/off states unlike the true/false of a checkbox. In this case I don't really have a switch, it's really a toggle, or dimmer? Is some additional documentation around the role [switch](https://accessibilityinsights.io/info-examples/web/aria-toggle-field-name/) that indicates in can be used for something like a dart/light theme toggle, so I think I might have something I can use, but.

 I need to think a bit, because there's another role I can consider, [hidden](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden). Hidden is mainly used to help assistive technology focus on the most important information. It's definitely something that should be used sparingly, the goal is not to hide content from some users, it's really about make the site as effect as possible.

 When trying to figure if something needs to be hidden, I try to think about if there's either a capability or information that would be lost to some users. In this case it's an obvious answers. The ability to toggle between a light and dark mode isn't just about aesthetics, it's fundamentally about accessibility for [some](https://www.boia.org/blog/dark-mode-can-improve-text-readability-but-not-for-everyone), but not all users. I'll have another few posts on themes, and system accessibility settings later on, but for now. I know for sure this element shouldn't have an aria hidden role.

 ## Fix it
So I think I want the HTML below. Because the label is only for assistive purposes, I don't really want a label element, instead I want an [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label).  I also added in some JS to set the [aria-checked](I'll revisit this again and work through https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) value based Darkmode => true Lightmode => false. Let's see how it goes
```html
<div class="color_mode">
  <input type="checkbox" class="color_choice" id="mode" role="switch" aria-label="Theme Toggle" aria-checked="boolean">
</div>
```
{{% centerimage src="/images/getting-to-100/end-score.png" alt="Image with Lighthouse Accessibility Score of 100" title="96!" %}}

## Victory
Sort of. You can see there's a list of things I'd need to validate manually. Ideally I'd QA each page with a screen reader to see how it flows. A score of 100 can be surprisingly painful. For now though, I'll take the win. I've got a lot of other pages I want to review, including this page. I like working this way, finding an issue I can make some headway on in a single sitting. It's sort of fun.

### QOTD
“Huck was always willing to take a hand in any enterprise that offered entertainment and required no capital, for he had a troublesome super-abundance of that sort of time which is not money.”
― Mark Twain, The Adventures of Tom Sawyer