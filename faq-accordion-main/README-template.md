# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![1730351418472](image/README-template/1730351418472.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

* Semantic HTML5 markup
* Custom font loading with `@font-face`
* Flexbox for layout
* Mobile-first workflow
* Vanilla JavaScript for interactivity
* Responsive design principles for different screen sizes
* CSS for styling and visual design

### What I learned

### What I Learned

During this project, I gained valuable insights into several key areas:

- **Media Queries**: I learned how to implement media queries to create responsive designs that adapt to different screen sizes. This project primarily focused on developing for desktop, but I now understand how to tailor styles for mobile devices as well.

  ```css
  @media (max-width: 767px) {
      body {
          background-image: url('./assets/images/background-pattern-mobile.svg');
          background-size: cover;
          background-position: top center;
      }
  }
  ```
- **Using @font-face**: I explored how to load custom fonts using the `@font-face` rule, allowing me to enhance the typography of my project beyond standard system fonts.

  ```css
  @font-face {
      font-family: 'Work Sans Bold';
      src: url('assets/fonts/static/WorkSans-Bold.ttf') format('truetype');
  }
  ```

This experience has deepened my understanding of responsive design and custom typography, equipping me with skills I can apply to future projects.
