---
title: "Principles"
excerpt: "Objective truths that enable effective and efficient delivery"
---

> “A principle is a natural law like gravity. If you drop something, gravity controls. If I don’t tell you the truth, you won’t trust me; that’s a natural law.”

# Being A Developer

## Problem Solving
1. Reason through First Principles
>The normal way we conduct our lives is we reason by analogy. [When reasoning by analogy] we are doing this because it’s like something else that was done or it is like what other people are doing — slight iterations on a theme.
First principles is kind of a physics way of looking at the world. You boil things down to the most fundamental truths and say, “What are we sure is true?” … and then reason up from there.

## Bias
1. Survivorship bias - the tendency to ignore absent information and only ever plan for the best.
2. Endowment bias - the attribution of greater regard for that which already own, independent of actual value.
3. Hyperbolic discounting - immediate rewards don't always offer the greatest benefits, but you are still most likely to select them.
4. Clustering illusion - how we interpret groups of events can affect our ability to predict future probabilities
5. Confirmation bias - our process of gathering information to form our opinions is not as impartial as we may believe
6. Availability heuristic - the bias towards recent, easily remembered information when assessing importance and relevance in new situations
7. Stereotyping - while it may be associated with discrimination against minorities, stereotyping does have an innocent cognitive function.
8. Gambler's fallacy - an opposite effect to clustering illusion, this bias also results in faulty expectations.
9. Risk compensation - does perceived safety yield increased complacency? This question has significant implications for hazard management.
10. Anchoring bias - even business-savy people can fall foul to this bias towards initial information. the common human tendency to rely too heavily, or "anchor," on one trait or piece of information when making decisions.

## Clean code
1. Functions/Class names are inversly proportional to the scope ({}). Tests have very long names.
2. Variable names are directly proportional to their scope. 
3. Names should reveal intent. Avoid disinformation.
4. Classes names should be nouns. Avoid noise words - Data, Info, Manager.
5. Methods should be verbs.
6. It's rude to introduce a reader to high-level concepts and low-level concepts at the start of a function.
7. Functions should be small (4-20 lines). A line in a function should only be one-level of abstraction away from the name.
8. Functions should just do one thing. Aim for more functions then multiple lines with one layer of abstraction from name.

## Tests
1. Don't test functions directly. Tests will break when code breaks. This is why we don't test private functions.

## Dev Quotes
1. "Cheap, Fast, and Good: Pick Two"? *related to CAP theorem*


## Principals to guide development:
1.  [High Cohesion, Loose Coupling](https://stackoverflow.com/questions/14000762/what-does-low-in-coupling-and-high-in-cohesion-mean)
2.  [Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter) - there should be at least one layer of indirection when working with a resource
3.  [Postels Law](https://en.wikipedia.org/wiki/Robustness_principle)
4.  [Filter Inputs, Sanitize Output](https://benramsey.com/articles/escape-output/)
5.  [Single Responsibility](https://en.wikipedia.org/wiki/Single_responsibility_principle)
6.  [The Last Boy Scout Rule](https://martinfowler.com/bliki/OpportunisticRefactoring.html)
7.  [YAGNI](https://martinfowler.com/bliki/Yagni.html)
8.  [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). This is predominantly about DRYing into business domains not drying across.
9.  Inch Wide Mile Deep - integrate early, extend functionality later
10. [Conway's Law](https://www.thoughtworks.com/insights/blog/applying-conways-law-improve-your-software-development)
11. [Fail Fast](https://en.wikipedia.org/wiki/Fail-fast)
12. [Open/Closed Principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)
13. [Ego-less programming](https://blog.codinghorror.com/the-ten-commandments-of-egoless-programming/)
14. [Make it work, make it right, make it fast](http://wiki.c2.com/?MakeItWorkMakeItRightMakeItFast) *CRAWL, WALK, RUN*
15. The best code you can write, is not writing any at all
16. The best developer is the one who has had sufficient sleep (7+ hours).
17. Ensure consistency of implementation across code base
18. Make it work, make it right, make it fast CRAWL, WALK, RUN
19. The aim of agile is not to make the team go faster but to generate data to make improved decisions.
20. Comments usually mean you need to spend time cleaning the code. *regex

## Anti-Patterns 
*cut n paste from [Bipin Paul Bedi](https://www.bipinpaulbedi.com/2019/software-anti-patterns)*
### Organisational anti-patterns
* Analysis paralysis - Devoting disproportionate effort to the analysis phase of the project.
* Cash cow - A profitable legacy product that often leads to complacency about new product.
* Design by committee - The result of having many contributors to a design - but no unifying vision.
* Moral hazard - Insulating a decision-maker from the consequences of his or her decision.
* Stovepipe or Silos - A structure that supports mostly up-down flow of data but inhibits cross organisational communication.
* Vendor lock-in - Making a system extensively dependent on an external supplied component.
### Design anti-patterns
* Abstraction inversion - Not exposing implemented functionality required by user, so that they reimplement it using higher level functions.
* Ambiguous viewpoint - Presenting a model (OOAD) without specifying its viewpoint.
* Big ball of mud - A system with no recognisable structure.
* Database as IPC - Using DB as message queue for inter-process communication where a more lightweight mechanism would be suitable.
* Gold plating - Continuing to work on a project well past the point at which extra effort is not adding value.
* Inner - platform effect - A software so customisable as to become poor replica of software development platform.
* Input kludge - Failing to specify and implement handling of possibly invalid inputs.
* Interface bloat - making an interface so powerful that it is extremely difficult to implement.
* Magic push button - Coding implementation logic directly within interface code, without using abstraction.
* Race hazard - Failing to see consequences of different orders of events.
* Stovepipe system - A barely maintainable assemblage of ill-related components.
### OOD anti-patterns
* Anaemic domain model - Use of domain model without business knowledge.
* Base bean - Inheriting functionality from utility class rather than delegating to it.
* Call super - Requiring subclasses to call a superclass’s overridden method.
* Circle ellipse problem - Sub typing variable-types on the bases of value-subtypes.
* Circular dependency - Introducing unnecessary direct or indirect mutual dependencies between objects.
* Constant interface - using interface to define constants.
* God object - Concentrating too many functionalities in a single part of design.
* Object cesspool - Reusing objects whose state does not confirm to the contract of reuse.
* Object orgy - Failing to properly encapsulate objects permitting unrestricted access to their internals.
* Poltergeists - Objects whose sole purpose is to pass information to another object.
* Sequential coupling - A class that requires its method to be called in a particular order.
* Yo-yo problem - A structure that is hard to understand due to excessive fragmentation.
* Dependency hell - Problem with versions of required product.
* DLL hell - Inadequate management of dynamic linked libraries.
### Programming anti-patterns
* Accidental complexity - Introducing unnecessary complexity into a solution.
* Action at distance - Unexpected interaction between widely separated parts of system.
* Blind faith - Lack of checking of correctness of a bug fix or result of a subroutine.
* Boat anchor - Retaining a part of a system that is no longer has any use.
* Busy spin - Consuming CPU while waiting for something to happen, usually by repeated checking rather than message passing.
* Caching failure - Forgetting to reset an error flag when an error has been corrected.
* Cargo cult programming - Using patterns and methods without understanding why.
* Coding by exception - Adding a new code to handle each special case as it is recognised.
* Error hiding - Catching an error message before it can be shown to the user, either showing nothing or showing a meaningless message.
* Hard code - Embedding assumption about environment of a system in its implementation.
* Lava flow - Retaining undesirable code because removing it is too expensive or has unpredictable consequences.
* Loop switch sequence - Encoding a set of sequential steps using a switch within a loop.
* Magic numbers - Including unexplained numbers in algorithm.
* Magic strings - Including literal strings in code, for comparison, as event types etc.
* Soft code - Storing business logic in configuration files rather than source code.
* Spaghetti code - Programs whose structure is barely comprehensible.
### Methodological anti-patterns
* Copy-paste programming. Copying (modifying) and pasting existing code rather than implementing generic solution.
* Golden hammering - Assuming that a favourite solution is universally applicable.
* Improbability factor - Assuming that it is improbably that a known error will occur.
* NHI syndrome - The tendency towards reinventing the wheel, assuming it does not exist here before.
* Premature optimisation - Coding early on for a perceived efficiency, sacrificing good design, maintainability, and sometimes even real world * efficiency.
* Programming by permutation - Trying to approach a solution by successively modifying the code to see if it works.
* Reinventing the wheel - Failing to adopt an existing, adequate solution.
* Reinventing the square wheel - Failing to adopt an existing solution and instead adopting a custom solution which performs much worse than an * existing one.
* Silver bullet - Assuming that a favourite technical solution can solve a larger process or problem.
* Tester driven development - Projects in which new requirements are specified in bug reports.

## DDD
Domain-driven design 


## Algorithms
### Expression Trees
> Expression trees represent code in a tree-like data structure, where each node is an expression, for example, a method call or a binary operation such as x < y

> An expression tree provides a method of translating executable code into data. This can be very valuable if you want to modify or transform code before executing it. 

>Expression trees were created in order to make the task of converting code such as a query expression into a string that can be passed to some other process and executed there. It is that simple. There is no great mystery here, no magic wand that needs to be waved. One simply takes code, converts it into data, and then analyzes the data to find the constituent parts that will be translated into a string that can be passed to another process.

Their an abstraction to allow other processes to understand and transform the instructions for execution elsewhere.

References:
1. [Simple overview](https://docs.microsoft.com/en-us/archive/blogs/charlie/expression-tree-basics)


