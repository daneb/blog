---
layout: single
title: "Learning Angular"
date: 2023-04-16 15:10:00 +0200
categories: software
---

# Main building blocks

![Angular](/images/angular-overview.png)

## Data and Rendering
1. Module - groups related code together, feature modules, shared modules, lazy loads
2. Component - small unit of code serves a specific purpose, renders to DOM, independant UI functionality, can render other components
3. Directives - add functionality to an existing HTML or components, modify or generate components, built-in and custom directives, gateway to DOM
4. Pipes - functions that transform data for rendering, used inside components, re-useable logic (format)

## How to get data
1. Services - communicating over HTTP, web sockets, data-fetching and storage, route checking functionality, singleton dependency (not new instance)
2. Router - full page refresh, history-api gives browser routing ability, defines url and load components/modules, abstracts read/write to a url state

## One way data flow

![State](/images/angular-state.png)

> States flows from child up to smart container (top-level), who uses injected Service to mutate state.
> Service mutates state
> That state is then trickled down from the smart-container down into child components

1. Easier to track app state
1. Data down, changes up
1. Don't mutate or sharing references, without sending the change to top of the component tree (smart container - state updates) 
1. More intelligent rendering
1. Smart container - (also a component) usually container top of tree that can speak to the state directly, contains child components, state travels in and out via services or store, ensure passing state, listen to events from dumb containers, frequently used in routing, least re-useable
1. Dumb component - rendering html and state (@Input state in, @Output state out), emits states to parent components, not used in routers, highly re-useable

