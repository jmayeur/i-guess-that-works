+++
author = 'Jeff Mayeur'
title = "Brick by Brick"
description = "A childhood storyteller, the rise of infrastructure as code, and why repeatable automation should start small and grow at the pace of the team."
keywords = ['automation', 'infrastructure as code', 'iac', 'orchestration', 'storytelling', 'tablature', 'conductor', 'reflection']
tags = ['learning', 'reflection', 'automation', 'iac']
categories = ['learning']
date = 2026-10-06T07:00:00-07:00
draft = false
+++

I once again find myself pondering the world at the confluence of two rivers of thought: a childhood storyteller and infrastructure as code.

When I was a kid in school, we'd occasionally get a visit from one Mr. Les Landin. At the time, I saw him as a fascinating storyteller who, with chalk art, could entertain me better than any TV show I could think of. His tales were of kids doing things - occasionally a little trouble might creep in, but mostly just being kids. I ate those stories and images up.

These days, thanks to the internet, I can dig up a new perspective: he was an educator who had a children's TV show, wrote some books, was in a band - and, it seems, was universally loved. I can layer these personas on top of my memory, but for me it was the way he told stories that created the picture of who he was. In my own search for "what am I good at exactly?" I keep hoping I can find a way to tell stories like Les. 

The more I focus on automation flows in software, and how to keep them simple but repeatable, the more I'm reminded of the days when I would see [Ansible](https://docs.ansible.com/projects/ansible/latest/getting_started/introduction.html) stickers on people's laptops. I was a .NET developer working on desktop applications, and as such Ansible didn't really seem all that interesting; infrastructure wasn't the giant ball of twine it would eventually become, so I just thought - cool sticker, but not for me.

Over the next few years I kept running into devotees who would preach infrastructure as code (IaC). My role still didn't really have much demand for it, but every sys-ops dev I encountered would bend my ear with the benefits of defining your systems in your repos next to the code.

And then came "The Cloud." Data centers were a weakness: they cost too much, they weren't resilient, what about Scale?!! So began the great migration. Everything needed to be built in this new ephemeral space where you had to have the ability to spin up, tear down, and relaunch the exact same stack in minutes. IaC wasn't abstract; it became the only path to reliably navigate this new world. There was a slew of cloud-agnostic schemas that could encapsulate your stack, and give you the ability to throw the whole thing up/down anywhere you wanted. IaC mattered when I could see myself in its story.

These days I don't even think about IaC - it's just part of what must happen, like logging into my machine to start working on something. I came across Microsoft's [Conductor](https://github.com/microsoft/conductor) a few months back, and it's been a pebble in my shoe ever since. Conductor is a tome, when I only need a short story.

What made Les such a great storyteller, for me at least, was his ability to start small and expand at the pace of his audience. Perhaps the pacing was limited to the speed he could draw the characters and places with chalk - either way it gave me the ability to listen and imagine as the story grew. 

When I think about the problem of repeatable automation, I see it in much the same way: if I want a team to follow along with my plot I need to have the core solved first, and then grow the story over time. For now I'm starting with a scratchpad, [Tablature](https://github.com/jmayeur/tablature), a simple orchestration YAML. It's not new, innovative, or complex - really it's just a way for me to sketch a character and share it with the team. In the end it seems like the answer is that I don't need to tell the best story, I need to tell the story so the listener can make it the best.
