+++
author = 'Jeff Mayeur'
title = 'Sidebar x004 - Did I Now?'
keywords = ['BASH']
description = 'Thoughts on playing, trusting and being a team member or leader that amplifies both.'
tags = ['BASH']
categories = ['BASH']
series = 'Ramblings'
date = 2024-07-17T20:00:00-07:00
draft = false
+++
# Pi Baking Temp 65°C

## Hot!
{{% centerimage src="/images/sidebar-x004/coretemp.png" alt="Web page showing the 52°6 Celsius CPU temperature" title="CPU Temp" %}}

This really isn't about [AQI Everywhere](/posts/05-2024/aqi-everywhere/), it's not really even about JavaScript or Services. We did have a bit of a heatwave last week, and I did spend some time thinking it would be nice to have a quick way to check the *coretemp* on my outside AQI monitor.

I did make a new basic [web page](https://github.com/jmayeur/outdoor-aqi/blob/main/web/coretemp.html) that shows the coretemp without ssh-ing into the Raspberry Pi. I spent a little time learning about [vcgencmd](https://linuxcommandlibrary.com/man/vcgencmd). I'd used it in the past, but like many things I'd misplaced my familiarity with it.

I also spent some time updating a really simple [photo frame](https://github.com/jmayeur/photo-frame) based on the [fbi](https://manpages.ubuntu.com/manpages/xenial/man1/fbi.1.html) where I changed the implementation from a bash file creating a text file of a months worth of photos, to a [SQLite](https://www.sqlite.org) backed index of photos that I can create groups from.

There's been a bit of random tinkering, but this is about something unrelated.

## A Note to Me Next Summer
The reason I was interested in the *coretemp* readings from my AQI monitor was that we we're seeing temps in the 107°F (41.6°C) range. That's a bit warmer than we usually see in June and early July here in the Pacific Northwest. At least historically that's hot, but things are [changing](https://www.climatehubs.usda.gov/hubs/northwest/topic/climate-change-impacts-northwest#:~:text=Climate%20change%20projections%20for%20the,uncertain%20than%20those%20for%20temperature.), and fast.

I was interested in the *coretemp* because I didn't want to fry my poor [Raspberry Pi 3 Model B Rev 1.2](https://www.raspberrypi.com/products/raspberry-pi-3-model-b/) (cat /proc/cpuinfo). Sitting in my air conditioned home office, staring out at the wilting plants, and back to my monitor to read the outside temp & AQI. Seeing it was 107°F and worrying about how my micro-computer was faring.  

I sat there and thought that the most important thing I could do would be to jump on my laptop, write another bit of JS and keep a side-eye on a CPU to make sure it didn't go above 65°C or there-abouts. 

I do that a lot. I solve the problem I see, I love shortcuts, it's a core attribute of being lazy. I will work my self to exhaustion if it will let me avoid doing some tiny bit of work I want to avoid. However this is more than just short-cutting. Some part of me gets caught in a loop. I don't like doing nothing. So I'll do anything, even if it's not what I need or should be doing.

I don't mean to imply that I should be twisting my goatee and innovating my way to a cooler planet, but sometimes I probably need to think a little more about what's really going on. I could have shut of a few of my IoT devices around the house and maybe that would use a little less electricity. I've got a [Kill-A-Watt](https://en.wikipedia.org/wiki/Kill_A_Watt), so I can even quantify that impact if I want to.

Yes little things aren't enough, but sometimes I need to do a better job of being okay with the big picture and maybe that means doing nothing as part of doing something more.

## Tapity Tap Tap
Part of why I ended up in the Software industry is that it matched my attention span. I could fiddle, view, fiddle view and never really hit that wall of delayed gratification. 

I'm old enough now though, that I've started looking more than a few hours into the future. That youthful concern of where am I going to find something fun to do tonight has been supplanted with questions about where to live in the future, what will we do when we get there, will there still be there in the future?

Lots of questions and fewer answers. It's a bit hard to deal with. In most other aspects of my life my mastery has increased, but in this case the more I think about what's next, the less I know about it. 

Some things are out of my direct control, other things are fully dependent on the choices that are made. So what do I do; I type, I fiddle with photos, I play with Google Fonts. I do so many things, often they're fun, and sometimes they take a few days, but they're just filler. They're crossword puzzles, which I love, and I think are an amazing way to keep you're mind-muscle flexing, but they'e not what this is about.

## Step Alpha
I need a shortcut. I know I need to spend more time on the where are we going train, but I need a way to get from here to there. I need a [Nudge](https://en.wikipedia.org/wiki/Nudge_(book)) only no ones going to drop me into a study and help point the direction. 

I'm going to start with trying to catalog the questions. This goes back to something I've realized again and again. I need a [map](/posts/05-2024/centering-an-image/). To get that map I need to start with some really rough sketches of what I see. The questions. 

I'll be churning out a few posts over the next couple of weeks that try to capture my questions, and then from there maybe I'll have a enough to build a basic lay of the land.  I know this is a multi-year/ever-changing journey, but I understand it will help me if I find where I am, and where I'd like to start going.

### QOTD
“The friend who saved up to invest in a fund and saw her money dissolve like sugar on the tongues of bankers who barely got a scolding from the SEC. The life we’d been promised was a scam,”
― C Pam Zhang, Land of Milk and Honey
