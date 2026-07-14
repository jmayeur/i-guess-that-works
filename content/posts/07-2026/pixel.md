+++
author = 'Jeff Mayeur'
title = "If I Knew, What Good Can I Do?"
description = "From the clear.gif to marketing pixels to AI agents — observability tooling has never been the problem. The hard part is discernment: knowing which signals are worth capturing in the first place."
keywords = ['observability', 'logging', 'o11y', 'software engineering', 'discernment', 'marketing pixel', 'agentic', 'ai']
tags = ['observability', 'logging', 'o11y', 'software engineering', 'discernment', 'marketing pixel', 'agentic', 'ai']
categories = ['learning']
date = 2026-07-14T07:00:00-07:00
draft = false
+++

Oh what I would do, if only I knew...

Logging has been a continuously evolving practice for me. When I started writing code, I leaned heavily into debug/log/assert hack based strategies. I view logging as something that would help me solve a production issue, something that only temporarily invaded the code. I was a very junior developer, so it made sense that my view of traceability was limited to the scope of the system I was focused on.

There were 2 key pivotal shifts in my career that began to unlock what I'd call proto-observability. First was the ability of scripting languages like Perl and AWK to scan realtime logs. Using scripts you could spot errors as they were occurring, and even more interestingly you could sample performance and gather insights into how systems were handling load. In the days of a company server under a dev's desk suddenly getting slogged with a wave of 40K concurrent users it was a huge unlock to see where a system was being stressed.

The second bit of insight came in the form of the clear.gif. In the early days of the web, pre-oXMLHttpRequest, there wasn't a standardized approach to capturing data from a browser. These were wild days where every trick you could think of to get some signal from a client was being tried; privacy and security be damned. There were a lot of bad software patterns being foisted on users.

The clear.gif, however, was the most reliable back door. You could use JavaScript to add an Image Object and set the src to something like "./images/c.gif?a=userid&b=pagename&c=…" with the data you wanted to track in the querystring. The image returned would be a 1x1 clear or white image that wouldn't impact the user experience. Suddenly you could log all of the things all of the time.

In the long run this became the underpinnings of the Marketing Pixel, but when I first encountered this approach, it seemed like the perfect companion to the server side logging. We could capture client errors, send that data back to the server and run cron jobs to see if we'd broken something in production. Having a complete picture of a user's journey was incredibly powerful.

These days there are plenty of platforms that enable this type of cross system O11y. There are opensource standards, well defined patterns, and most engineers I've worked with are very keen to ensure they have consistent clean diagnostic and operational signals. At this point the hardest problem is not how, but what to track.

What is an error, an anomaly? What are expected failures? Do they need to be tracked? Something I've been guilty of is the over capture of signals. Like going to a Sports Bar with 50 TVs, everyone playing a different event. There's just so much noise, and you're going to miss what really matters to you.

As with every other phase of software development, Agents are being touted as the answer. Let a fleet of scoped agents scour your logs for signs of impending failure. Automated anomaly detection has been the latest and greatest thing for a decade, and it's finally getting more feasible, but this is another case where discernment is the critical power, not classification. Agents don't address the fundamental problem of knowing what is worth logging. Many teams are already struggling with the costs of querying logs; adding yet another layer isn't the answer.

For me it comes down to a single test for every type of signal. What would I do with this information if I had it? Take the example of capturing performance timings for sub-functions. Of course I would want to know what step in a flow is taking the longest, If I have a server call that's slow I'll need to know if it's the DB that's slow or if it's a resource resolver. If I see the bottleneck I'll know what I need to focus on.

In practice, most of the time I don't need those small segments. I may want them for an initial feature launch, or if something does seem off, but for a large system, I'm not likely to do anything with most of that data - it's just noise flooding the system. When there are hundreds or thousands of micro services dumping data at volume, it's too much signal. Even with Agents sifting through the sea of data, I still need to be able to do something valuable with any insight.

Throughout my career I've gravitated towards using simple repeatable heuristics to govern cases like this where I repeatedly need to make decisions. In this case I have two practices backing that "What would I do" question.

 1. Debate the level, and cohort a signal needs to be at. It can be difficult to fight the urge to add a trace, but determine if it's an unrecoverable failure, or just something you might want to improve. Set the level accordingly and keep log groups small so you can dial the volume granularly.
 2. Tend the garden - every time you update a module, you should re-ask the same questions and target the logging based on your answer.

Knowing a system's functioning state is really only useful if it enables a business objective. Obviously a working system is the cornerstone of serving the consumer, but smaller system details tend to be weaker levers on bankable value. The "What would I do" must be tied to improving what a platform is intended to deliver. Obsessing over DNS resolution times on a security-laden corp network might not be worth the effort. Just like there's still a question of build-vs-buy based on the value proposition - each layer requires a similar cost-benefit analysis, grounded in answering how an insight might serve the user. I guess in the end, the question is really if I knew, what good can I do?
