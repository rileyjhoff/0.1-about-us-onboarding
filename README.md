## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

## Plan

![App Outline!](/assets/app-outline.png "Our App Outline")

- Create data.js and put array of people with name, pronouns, favorit place and hobbies
- HTML Elements Needed: Head, Body, Header, Main, Footer, Section, Select, Options, Div, Unordered List, Span, P, H2 and H4, H6
- Add Selector to Index
- Add a Div to Index
- In App.js Import Array From Data.js
- Validate that we pulled data over correctly
- Grab all Dom Elements
- Validate that we grabbed dom elements
- Add Event Listener to Selector
- Validate Event Listener
- Write a function to render people that will change text content depending on option selected
- Try Calling Render Function
- In our event listener set selected person to a variable that equals the target value
- Remove Class From Div Element
- Create IF Function to Render People base on which index selection
- Check to make sure each user is rendering
