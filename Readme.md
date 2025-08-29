#1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

##Answer: 
getElementById: By the help of this function we can find the html element with a specific id. Returns element or null.

getElementsByClassName: By the help of this function we can find all html elements with a specific class name. Returns a HTMLCollection.

querySelector: By the help of this function we can find the first html element that matches a specific CSS selector. Returns element or null.

querySelectorAll: By the help of this function we can find all html elements that match a specific CSS selector. Returns a NodeList.

#2.How do you create and insert a new element into the DOM?

##Answer:
To do this we have to go through some steps:
i. Create the new element using "document.createElement()".
ii. Find the parent element where you want to insert the new element.
iii. Insert the new element into the DOM using methods like "appendChild()".


#3.What is Event Bubbling and how does it work?

Answer:
Event Bubbling is a type of event propagation in the DOM where an event starts from the deepest target element and then bubbles up to its parent elements.

#4.What is Event Delegation in JavaScript? Why is it useful?

##Answer:
Event Delegation is a technique which help us to create events more efficiently. Suppose in this assignment there are lots of "call" buttons. If we want to add event all of this it will take lots of time and code. Instead of adding all the events in the buttton we add in the full box. This optimizes the performance and saves time.


#5.What is the difference between preventDefault() and stopPropagation() methods?

##Answer:
preventDefault(): So this is a method we use frequently to reload the website everytime after click in any button under a From tag.

stopPropagation(): This is a method we use to stop propagate the bubbling of an events.