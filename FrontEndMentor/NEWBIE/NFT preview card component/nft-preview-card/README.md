# NFT preview card component

*This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.*

[Link to the challenge](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U)

---

## Table of contents

---

- Overview
    - The Challenge
    - Screenshot
    - Links
- My process
    - Built with
    - What I learned
    - Useful Resources
- Author
- Acknowledgements

# Overview

---

## The Challenge

---

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

## Screenshots

---

![localhost_3000_.png](NFT%20preview%20card%20component%2094fbaba96d094fd68733bc3669d69da2/localhost_3000_.png)

![localhost_3000_ (1).png](NFT%20preview%20card%20component%2094fbaba96d094fd68733bc3669d69da2/localhost_3000__(1).png)

## Links

---

- [Solution URL](https://github.com/Erislash/Code-Challenges/tree/master/FrontEndMentor/NEWBIE/NFT%20preview%20card%20component/nft-preview-card)
- [Live Site URL](https://nft-preview-component.vercel.app/)

# My Process

---

## Built with

---

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [ReactJS](https://reactjs.org/) library
- Vercel (deployment)

## What I learned

---

### Nullish coalescing operator (??)

*The **nullish coalescing operator (??)** is a logical operator that r**eturns its right-hand side operand when its left-hand side operand is `null` or `undefined`** and **otherwise returns its left-hand side operand**.*

---

It’s a more specific case of the logical OR ( || ) operator, which returns its right-hand operand when the left-hand is **any falsy value,** not only `null` or `undefined`.

**Syntax**

```jsx
leftExpr ?? rightExpr
```

**Example**

```jsx
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0 (Zero is falsy, but it's not null nor undefined)
```

**Short-circuiting**

*Like the OR and AND logical operators, **the right-hand side expression is not evaluated if the left-hand side proves to be neither `null` nor `undefined`**.*

```jsx
function A() { console.log('A was called'); return undefined;}
function B() { console.log('B was called'); return false;}
function C() { console.log('C was called'); return "foo";}

console.log( A() ?? C() );
// logs "A was called" then "C was called" and then "foo"
// as A() returned undefined so both expressions are evaluated

console.log( B() ?? C() );
// logs "B was called" then "false"
// as B() returned false (and not null or undefined), the right
// hand side expression was not evaluated
```

**No chaining with AND or OR operators**

*It is not possible to combine both the AND ( && ) and OR operators ( || ) directly with ??. A `SyntaxError` will be thrown in such cases.*

```jsx
null || undefined ?? "foo"; // raises a SyntaxError
true || undefined ?? "foo"; // raises a SyntaxError
```

*However, providing parenthesis to explicitly indicate precedence is correct.*

```jsx
(null || undefined) ?? "foo"; // returns "foo"
```

### O**bject-fit**

*The object-fit CSS property sets **how** the content of a r**eplaced element** (`<img>` or `<video>`) should be resized to fit its container. You can complement this with the **object-position** CSS property.*

---

**Values**

![Untitled](NFT%20preview%20card%20component%2094fbaba96d094fd68733bc3669d69da2/Untitled.png)

- `**contain**`
    
    The replaced content is scaled to maintain its aspect ratio while fitting within the element’s content box. The entire object is made to fill the box, while preserving its aspect ratio, so the object will be "letterboxed" if its aspect ratio does not match the aspect ratio of the box.
    
- `**cover**`
    
    The replaced content is sized to maintain its aspect ratio while filling the element’s entire content box. If the object's aspect ratio does not match the aspect ratio of its box, then the object will be clipped to fit.
    
- `**fill**`
    
    The replaced content is sized to fill the element’s content box. The entire object will completely fill the box. If the object's aspect ratio does not match the aspect ratio of its box, then the object will be stretched to fit.
    
- `**none**`
    
    The replaced content is not resized.
    
- **`scale-down`**
    
    The content is sized as if `none` or `contain` were specified, whichever would result in a smaller concrete object size.
    

### ****Destructuring Nested Objects****

---

Here is a simple example that extracts a single prop.

```jsx
const user = {
  id: 339,
  name: 'Fred',
  age: 42
};
const {name} = user;
console.log(name); //prints: Fred
```

Here is another example that extracts the props, but assigns it to a different name.

```jsx
const user = {
  id: 339,
  name: 'Fred',
  age: 42
};
const {name: callSign} = user;
console.log(callSign); //prints: Fred
```

Nested objects

```jsx
const user = {
  id: 339,
  name: 'Fred',
  age: 42,
  education: {
    degree: 'Masters'
  }
};
const {education: {degree}} = user;
console.log(degree); //prints: Masters
```

Default value. In order to prevent an error when the nested object is missing

```jsx
const user = {
  id: 339,
  name: 'Fred',
  age: 42
};
const {education: {degree} = {}} = user;  // We dont have a property called "education" here, so we assiggn a default value '{}'
console.log(degree); //prints: undefined
```

### Viewport height on mobile and ****Viewport units****

---

<aside>
💡 **vh (Relative Lengths)**: Relative to 1% of the height of the viewport*

</aside>

The **viewport-percentage lengths** or **viewport units** are ****CSS units relative to the graphic window of the browser or display.

![Untitled](NFT%20preview%20card%20component%2094fbaba96d094fd68733bc3669d69da2/Untitled%201.png)

```css
.my-element {
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}
```

```jsx
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
```