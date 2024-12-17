# Mile Stone Project 2 - Cricket Scorebook

For my Milestone Project 2 I am creating an interactive front end website.  This will use JavaScript to allow a user to score a cricket match.

For this instance the scoring will be to simulate a 6-aside 10 over match.

The purpose of the site is to allow a quick and easy method to score a match, requiring as few commands from the user as possible.

[Visit deployed website](https://johnnycockerill.github.io/milestone-project-2/)

<img src="assets/images/combined_screenshot.JPG">

## Table of Contents
1. [User Experience (UX)](#user-experience-ux)
    1. [Project Goals](#project-goals)
    2. [Target Audience](#target-audience)
    3. [User Goals](#user-goals)
    4. [Color Scheme](#color-scheme)
    5. [Typography](#typography)
    6. [Wireframes](#wireframes)
2. [Features](#features)
    1. [General](#general)
    2. [Landing Page](#landing-page)
    3. [Class Page](#class-page)
    4. [Contact Page](#contact-page)
    5. [Not Implemented](#features-left-to-be-implemted-in-future-releases)
3. [Technologies Used](#technologies-used)
    1. [Languages Used](#languages-used)
    2. [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used)
4. [Testing](#testing)
    1. [Testing User Stories](#testing-user-stories)
    2. [Code Validation](#code-validation)
    3. [Accessibility](#accessibility)
    4. [Tools Testing](#tools-testing)
    5. [Manual Testing](#manual-testing)
5. [Finished Product](#finished-product)
6. [Deployment](#deployment)
    - [Github Pages](#github-pages)
7. [Credits](#credits)
    1. [Content](#content)
    2. [Media](#media)
    3. [Code](#code)
8. [Acknowledgements](#acknowledgements)

***

## User Experience (UX)

### Project Goals

- The website should have a calm, mellow look.  The user could potentially be using the site for prolonged periods so should be easy on the eyes.

- The range of options/controls should be clear and unambiguous, there could be a range of IT profiencies from users.

- Ultimately the site should detail the scores and winners of a cricket match.

### Target Audience

- The website is functional for a purpose, so would be used by any user looking to perform the function of scoring a cricket match.  With that in mind there are several aspects to consider:
    - The user could be of any gender, so appearances should remain neutral.
    - The user could be from any age range, so should not be cater for lighter colours for more lederly users.  Will also be considerate that minors may well use the site.
    - Whilst the website is intended to be as easy to use as possible, it is highly likely that the user will have a fair to strong understanding of cricket.

### User Goals

- As a user, I want to be able to navigate the controls intuitively and know which option to choose.

- As a user, I want to be able to clearly know how to start and end a match scoring event.

- As a user, I want to be able to see the live score as well as individuals peformances.

### Color Scheme

The primary colour used is a pastel grey (#E6ECF0), used purposely as an colour which is easy on the eyes in the event of prolonged use, but still allows for clear definition of the active area of the site.

<details>
  <summary>Expand Colour #E6ECF0</summary>
  <img src="assets/images/colour_choice.JPG">
</details>

### Typography

The main font used in the site is Raleway, with Sans-Serif as the fallback font in case Raleway is not being imported correctly.

The primary colour of for typography is a dark grey (#445361), following the same principles of the rest of the page would be easier on the eyes than black.

### Wireframes

<details>
  <summary>Expand Wireframe</summary>
  <img src="assets/images/wireframe_image.png">
</details>

## Features

### General

- Responsive design across multiple device sizes.
- Consistent colour scheme and design across all pages to enhance the user's navigation through the content.

#### Header

- The header contains the business name, in this instance it is also the purpose of site.

- The header contains an interactive element, upon beginning the scoring process the page title will update to display the team names entered by the user.

- The business name and page title will adjust in size and scale across screen sizes.

#### Footer

- The footer includes link to teams league page.

### Landing Page

#### Welcome Image and Text

- The Welcome main image is designed to state the nature and purpose of the website.  It has been designed to a colour and size to contrast against the background and stand out.
- After first interaction with the website the welcome image will update to display the names of the two teams inputed by the user, these will update to have first letter capitalised regardless of how the user inputs.

<details>
  <summary>Expand Team Name's Displayed</summary>
  <img src="assets/images/team_name_screenshot.JPG">
</details>

#### Main Content

- The main content is centred on the page.
  - Firstly a series of prompts will request information from the user, the inputs will be required for the javascript functions to run.
    <details>
      <summary>Expand Team Name Input</summary>
      <img src="assets/images/team1_choice_screenshot.JPG">
    </details>
    <details>
      <summary>Expand Team Name Input</summary>
      <img src="assets/images/team2_choice_screenshot.JPG">
    </details>
  - These required prompts run without user interaction once the window has loaded.
  - Once load function (and prompts) have completed the page will display a series of buttons, all labelled with specific commands for user interaction.
- The live stats area will display 'bat 1', 'bat 2' and 'bowl' as the players names by default prior to beginning main purpose.  This area will display live individual stats and total team score as the game progresses.
      <img src="assets/images/live_stat_screenshot.JPG">

- The controls area holds a series of buttons and drop-downs linked to buttons.  These are coloured when active and greyed out when disabled to improve user experience and help navigation through the process.
      <img src="assets/images/buttons.JPG">
    <details>
      <summary>Expand Disabled Control Area</summary>
      <img src="assets/images/disabled_buttons.JPG">
    </details>

- At the bottom of page are the players stats area.  There are two panes, one for dismissed bats and one for individual bowlers stats which increase as the match progresses.
  - There is a sub heading for clarity displaying team name above respective players using the data inputted by the user earlier in the process.
  <img src="assets/images/player_stats.JPG">
    <details>
      <summary>Expand Bats Stats</summary>
      <img src="assets/images/bat_stat_screenshot.JPG">
    </details>
    <details>
      <summary>Expand Bowlers Stats</summary>
      <img src="assets/images/bowler_stat_screenshot.JPG">
    </details>

  - These two panes will appear inline vertically on small screen sizes

#### Begin Process

- Positioned below page title and above all other content will be a button labelled 'start innings', at this stage the button will be highlighted red to indicate this as a start point.

    <details>
      <summary>Expand View Prior to Beginning Match Process</summary>
      <img src="assets/images/disabled_buttons_screenshot.JPG">
    </details>

- All other buttons will be grayed out and disabled to prevent the user calling functions in an order that would flaw the process.
  - Shading out all inactive buttons will aid the users navigation to next steps.

- Once 'Start Innings' button is clicked,  bowlers names and bat 1 and 2 will update with the data inputted by the user.  A prompt will also appear requesting the user to choose the opening bowler.

    <details>
      <summary>Expand Bowler Choice</summary>
      <img src="assets/images/bowler_choice_screenshot.JPG">
    </details>

  Once selected the bowlers name will appear within the live scores area replacing the default 'bowl' name.

#### Main Purpose

- The user is free to choose any of the buttons to match the play of the match.  
  Each button updates all necessary stats requiring the user to click once reagrdless of match play.

- After every 6 legal balls (ie, not including wides or no-balls), a prompt will appear, requesting the user choose another bowler.
    - Note - The current bowler will not be an option for this process.
      
      <img src="assets/images/bowler_change_screenshot.JPG">

    Once chosen the new bowler will replace the existing bowler within the active scores area and the previous bowlers stats will be updated with the bowlers stats pane.
      - Should the bowler have been used already their existing stats will be added to.
      - The two active bats will be swapped, alternating the 'strike' characteristic.

- Should a bat be dismissed by using the 'wicket' button, the strike bat will be replaced with next bat in the order.
  - The departing bat's score will be dispalyed in the bats team pane.
    <details>
      <summary>Expand Dismissed Bats</summary>
      <img src="assets/images/bat_stat_screenshot.JPG">
    </details>

- Whichever occurs first between loosing 5 wickets or reaching 10-overs initiates 'end of innings'.  The total score is logged and the two teams swap, beggining the process from fresh.

- Once a second innings is completed the score is logged.  A function runs to display which team won and their total scores.
      

### Technologies Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://simple.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries and Programs Used

* [Google Fonts](https://fonts.googleapis.com/)
    - Google Fonts was used to import the font Roboto and Exo into the style.css file. This font was used throughout the site.

* [GitPod](https://gitpod.io/)
     - GitPod was used for writing code, committing, and then pushing to GitHub.

* [GitHub](https://github.com/)
     - GitHub was used to store the project after pushing.

* [W3C Markup Validator](https://validator.w3.org/)
    - W3C Markup Validator was used to validate the HTML code.

* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
    - W3C CSS Validator was used to validate the CSS code.

* [JavaScript Validator](https://jshint.com/)
    - JSHint JavaScript Validator was used to validate the JS code.

* [Bootstrap Library](https://getbootstrap.com/docs/4.0/components/carousel/)
    - Bootstrap was used for the image carousel.

## Testing

### Testing User Stories

- As a customer, I want to be able to navigate the website and controls intuitively.
    - The website has an intuitive, consistent structure and design allowing for easy navigation.
    - All similar command buttons are located in the same area of the page, buttons carrying a different style of function are styled to appear different

- As a customer, I want to be able to determine the outcome of a cricket match using this app.
    - The page will dtermine a winner based on the users input throughout the process.

- As a customer, I want to be able to clearly see how individual players performed.
    - There is a section of the page which shows the bowlers stats throughout the entire innings.
    - There is a section of the page which details bats scores who have already been dismissed as well as displaying the two active bats within the active scores area of the page.

- As a customer, I want to be able to have control of the input to allow for every action on the field.
    - The range of controls allows for user inputs in a clear and concise manner, mostly from one click.

### Code Validation

- W3 Validator has highlighted zero errors.
<details>
  <summary>Expand W3 Index HTML Validation</summary>
  <img src="assets/images/HTML_Validation.JPG">
</details>
<br>

- W3C Validator shows zero errors with CSS:
<details>
  <summary>Expand W3C CSS Validation</summary>
  <img src="assets/images/CSS_Validation.JPG">
</details>
<br>

- JSHint Validator shows zero errors, however 134 warnings all relating to mozilla browser compatability.
<details>
  <summary>Expand JSHint JavaScript Validation</summary>
  <img src="assets/images/JS_Hint_Validation.JPG">
</details>
<br>

### Accessibility

* Used Lighthouse in Chrome DevTools to confirm that the colors and fonts being used in throughout the website are easy to read and accessible.
<details>
  <summary>Expand Lighthouse Report Desktop</summary>
  <img src="assets/images/lighthouse_desktop.jpg">
</details>
<details>
  <summary>Expand Lighthouse Report Mobile</summary>
  <img src="assets/images/lighthouse_mobile.jpg">
</details>

### Tools Testing

* Responsiveness

    - [Responsive Design Checker](https://www.responsivedesignchecker.com/) was used to check responsiveness of the site pages on different screen sizes.
    
    - Chrome DevTools was used to test responsiveness in different screen sizes during the development process.

### Manual Testing

* Common Elements Testing

    - All Pages
        - **Navigation Bar**
            - Hovering the cursor over nav bar link prompts active effect.
            - Clicking on the navigation bar's links will bring the customer to the specified page.
        
        - **Footer**
            - Hovering the cursor over nav bar link prompts active effect.
            - Clicking on the social media links will open the specific website on a new tab.

    - Index Page

        - Image carousel works without input.
        - clicking on map, opens live Google maps onto correct location.

    - Class Schedule Page

        - Clicking classes ticks the box corresponding to that choice.
        - Form input requires all fields to have content.

    - Contact Page

        - Both form inputs require all fields to be populated.
        - The e-mail input field requires the correct e-mail format.

## Finished Product

## Deployment

* This website was developed using [GitPod](https://www.gitpod.io/), which was then committed and pushed to GitHub using the GitPod terminal.

### GitHub Pages

* Here are the steps to deploy this website to GitHub Pages from its GitHub repository:

    1. Log in to GitHub and locate the [GitHub Repository](https://github.com/).
    2. At the top of the Repository, locate the Settings tab on the menu.
    3. Scroll down the Settings page until you locate the Pages section.
    4. Under Build and deployment, select "Deploy from a Branch" from the Source dropdown list.
    5. Under Branch, select Main and /Root from the relevant dropdown lists, then click Save.

## Credits

### Content

- Content my own fictional work.

### Media

* [Hero Image - Aberdeen Sports Village](https://www.aberdeensportsvillage.com/imager/images/3463/20190831_AberdeenSportsVillage_NewGym_002_eaf97de94269862e8bb6a5cf5fce55e2.webp)

### Code

* [W3Schools](https://www.w3schools.com/) was consulted on a regular basis for inspiration and sometimes to be able to better understand the code being implement.

* [Bootstrap Library](https://getbootstrap.com/docs/4.0/components/carousel/)
    - Bootstrap was used for the image carousel.

## Acknowledgements

* My tutor, Rokon, for his tuition.
* My mentor, Marcel, for his feedback and guidance.
