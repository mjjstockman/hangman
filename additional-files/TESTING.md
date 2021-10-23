***

# Table of Contents

1. [Testing User Stories](#Testing-User-Stories)
2. [Manual Testing](#Manual-Testing)
   - [Checking Responsiveness](#Checking-the-Responsiveness)
   - [Browser Validation](#Browser-Validation)
3. [Automated Testing](#Automated-Testing)
   - [Code Validation](#Code-Validation)
   - [Lighthouse Auditing](#Lighthouse-Auditing)
4. [User Testing](#User-Testing)
5. [Issues and Bugs](#Issues-and-Bugs)

***

# Testing User Stories

[Back to top ⇧](#Hull-College-Testing)

1. **As a gamer, I want to quickly tell what the game is, so I can see if I want to play it.**

   - The page clearly shows a heading with the text of HANGMAN. 
   - The classic layout with underscores for letters is displayed.
  

    <img src="assets/images/readme/courses-large.jpg" alt="Courses section">

2. **As a gamer, I want to be able to either win or loose, so I am motivated to try my best.**

   - The game is over when the number of wrong guesses equals 10.
   - The game is won when the number of letters found equals the number of characters in the word.

    <img src="assets/images/readme/about-box.jpg" alt="Introduction text area">

3. **As a gamer, I want to be able to enter a guess using either my keyboard or by clicking on a button, so I can play in a way that best suits me.**

   - User input can be given either by the buttons in the #keyboard-area being clicked or the user pressing a key on their keyboard.

   - The guessed area can be cleared by either clicking the #clear-btn or pressing backspace.

    <img src="assets/images/readme/satisfaction-large.jpg" alt="Student satisfaction area">

4. **As a gamer, I want visual representation on how well I am doing, so that I am kept engaged and can easily see my progress.**

   - The gallows image is updated after a wrong guess.

   - The number of wrong guesses is shown in the score area.

    <img src="assets/images/testing/form.jpg" alt="Contact section form">

 5. **As a gamer, I want to be able to restart a game easily, so that I don't have to refresh the browser to start a new game whilst I am already playing.**

    - A restart button is clearly displayed at the bottom of the page.


[Back to top ⇧](#Hull-College-Testing)

# Manual Testing

- The word is randomly selected.

- All updates within the score area are working.

- Button hover and disabling works.

- All buttons are working.


## Checking the Responsiveness

[Responsinator](http://www.responsinator.com) was used to check the following responsive features:

- The keyboard is positioned next to the gallows image @min 500px.

- All font-size increases work.

<img  src="assets/images/testing/header-stacked.jpg"  alt="The header with logo on top and navigation below">

[Back to top ⇧](#Hull-College-Testing)

## Browser Validation

The site was tested on the following browsers:

- Chrome
- Safari 
- Opera
- Firefox

# Bugs/Issues Found

## Functions called twice
When the focus was on the submit button and the user pressed the enter key on their keyboard the submit button was clicked twice (once for the enter keydown and again for the button click).  This was dealt with by removing the documents active focus when the user presses their enter key on their keyboard.

Further research has suggested that this was not the best approach from a UX point of view and an alternative solution should be found in the future.


## keyCode deprecated
keyCode was used to capture the character the user presses on their keyboard.  Research showed that this method has been deprecated and it is suggested to use key instead.  However, keyCode was checked using [caniuse](https://caniuse.com/) and found to still be widely supported so it was not changed.



# Automated Testing

## Code Validation

### HTML

The [W3C Markup Validator](https://validator.w3.org/) was used to validate the HTML. This detected three warnings relating to only using h1 elements as top-level headings. This was ignored because the use of h1's fitted the design of the site, especially as a one-page design.
<img src="assets/images/testing/html-validation.jpg" alt="The three warnings detected by the HTML validator">

### CSS

The [W3C CSS Validator](https://jigsaw.w3.org/css-validator) was used to validate the CSS and no errors or warnings were found.

<img src="assets/images/testing/css-validation.jpg" alt="The two CSS validation warnings">

This was not acted upon as it was deemed to be an acceptable warning.

[Back to top ⇧](#Hull-College-Testing)


## Lighthouse Auditing

- Lighthouse was used to audit the site and the report can be found [here](assets/pdf/lighthouse-report.pdf).
- Although useful, no changes were made to improve its ratings as this was outside the scope of this project and its time restrictions.

[Back to top ⇧](#Hull-College-Testing)

# User Testing

Numerous peers and friends helped to review the site and its development, with the following issues found and fixed:

Many thanks to [Matt Boden](https://github.com/MattBCoding) for the following suggestions:

- A favicon was added.

- On iPhone 5/SE (width of 320px) the Font Awesome icon on the right of the Student Satisfaction heading was wrapping beneath the text. This was fixed by reducing the size of all &lt;h2>'s when the design broke. The decision to change all &lt;h2>'s so the design of the site remains consistent.

- The JavaScript used to highlight the active navigation link on scroll wasn't working correctly on an iPad Pro (width of 1440px). This was fixed by adding a media query when the design broke to adjust the scroll-padding-top value.

- The size of the text within the Submit button was capitalised and increased in size.

Many thanks to [Naoise Gaffney](https://www.linkedin.com/in/naoisegaffney/) for the following advice:

- Mismatched quotation marks were used within the head. These were changed.

[Back to top ⇧](#Hull-College-Testing)

# Issues and Bugs

A number of bugs and issues were encountered during the sites development, as detailed below.

Some images had a small amount of white space below them. This is because images are inline elements and therefore treated as text and assumed to have descenders. Research found [here](https://mor10.com/removing-white-space-image-elements-inline-elements-descenders) explains that the white space can be removed by declaring the image as a block level element.

The page was taking a long time to load. This was fixed by reducing the file size of images used. This was initially done using [TinyPNG](https://tinypng.com/), a smart lossy image compression tool and [Squoosh](https://squoosh.app) was used later in development to change all images into AVIF format to further reduce their file size.

The sticky header (with the logo and navigation) initially displayed behind the iframe map. This issue was solved by adding a z-index of 1 to the header. This suggestion was found [here](https://stackoverflow.com/questions/52091989/embedded-iframe-video-overlap-the-fixed-navbar-while-scrolling).

The [HTML Validator](https://validator.w3.org) showed errors for the description and keywords meta tags in the head. This was due to mismatching quotation marks, as seen below:
<img src="assets/images/testing/quotation.jpg" alt="Inccorect quotation marks for meta tags">

[Back to top ⇧](#Hull-College-Testing)
