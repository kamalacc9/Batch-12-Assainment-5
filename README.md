### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

<!-- answer -->

1.Answer: getElementById 'id' is Use to Selects one element by its unique id and getElementsByClassName'className' is Use to Selects all elements that have a given class.
querySelector 'cssSelector' is Use to Selects the first element that matches a CSS selector (id, class, tag, attribute, pseudo-class) and querySelectorAll 'cssSelector' is Use to Selects all elements that match a CSS selector.

2.Answer:To create and insert a new element into the DOM, I first use the document.createElement() method to create the element. After that, I can add content, classes, IDs, or other attributes to the element. Finally, I select the parent element where I want to place the new element and insert it into the DOM using methods such as appendChild(), prepend(), insertBefore(), or insertAdjacentElement().

3.Answer:Event Bubbling is a type of DOM event. When an event (such as a click) occurs on an element, it is not limited to that element alone. Instead, the event gradually propagates upward from the inner element to its outer elements. This process is called event bubbling.

4.Answer:Event Delegation means handling events on the parent element instead of attaching them to individual child elements. It is efficient, saves memory, and works well even with dynamic content.

5.Answer:preventDefault() stops the default browser behavior of an event.
On the other hand, stopPropagation() prevents the event from bubbling up to parent elements.
