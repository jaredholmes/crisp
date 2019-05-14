# Crisp.css

Crisp is a lightweight CSS framework that provides convenience and configurability.


## Quick Start

Use the `dist/css` folder for Crisp’s unminified CSS files. Here individual files in their relevant folders can be found if you only want to use specific parts of Crisp’s set up; all of the CSS contents are combined in a working order in `crisp.css`.

Minified files can be found in the `dist/css/min` folder, which has the same structure as its parent, barring the `min` folder.

## Utilities

### Spacing

Crisp has no spacer classes, but rather spacing variables, which can be used with Stylus to provide proportional spacing, e.g. `margin-top s3`.

Spacing variables follow a format of `s[multiplier]`, where the multiplier is the amount of times 1.5rem is multiplied to achieve the variable’s value, e.g. s1 = 1.5rem , s2 = 3rem , s5 = 7.5rem , etc. 

Variables with a minus (-) preceding the multiplier represent 1.5rem divided by the multiplier, e.g. s-2 = .75rem .

Spacing variables span from `s-4` (.5rem) as the lowest, through `s7` (10.5rem) as the highest.

See [Using Stylus and Gulp](#using-stylus-and-gulp) for more information regarding working with Stylus.

### Flexbox

Adding a `flex` class to an element will apply it with the following properties:

`display: flex;
flex-flow: wrap;
flex-direction: row;`

Additional classes may be added to a `.flex` element for further configuration. `.align-center`, `.align-start` and `.align-end` will apply `center` , `flex-start` and `flex-end` values to the `align-items` property respectively.

`.justify-between` and `.justify-around` will apply `space-between` and `space-around` values to the `justify-content` property respectively.

`.nowrap` will set `flex-flow` to `nowrap` and `.dir-col` will set the `flex-direction` to `column`.

### Text and Fonts

Elements can be given classes of `fw-light`, `fw-regular`, `fw-medium`, `fw-semibold` or `fw-bold` to apply a font weight of 300, 400, 500, 600 or 700 respectively.

Text alignment can be set by applying `text-align-left`, `text-align-right` and `text-align-center` classes.

### Colours

Colour variables can be set in the colours hash in `src/stylus/colours/colours.styl` by adding names and their corresponding colour value (Hex, RGB, RGBA, etc.).

Colour, background colour and border colour classes are automatically created for each item in colours, with the format `c-[colour]`, `bc-[colour]` and `border-[colour]` respectively, as well as hover classes, which set an element’s colour, background colour or border colour when hovered over, with the format `c-hover-[colour]`, `bc-hover-[colour]` and `border-hover-[colour]` respectively.

See [Using Stylus and Gulp](#using-stylus-and-gulp) for more information regarding working with Stylus.

### Media Queries

The preset media query mixins can be used when working with Stylus. The media query mixing are as follows:

- `sm-up` –  576px and up
- `md-up` –  768px and up
- `lg-up` –  992px and up
- `xl-up` –  1200px and up
- `sm-down` –  575.98px and down
- `md-down` –  767.98px and down
- `lg-down` –  991.98px and down
- `xl-down` –  1200.98px and down

The mixin may be used in place of media query values in the format `@media [mixin]`, for example

```stylus
.hidden-on-small
	visibility visible
	@media sm-down
		visibility hidden
```


## Components

### Alert

Class: `alert`

Alerts have a display property of none by default. For an alert to be shown, it requires a `shown` class. Content placed inside the alert will have no styling by default, unless it has a class of `alert-body`, which has the following properties:

```stylus
	width: 100%
	display: flex
	justify-content: space-between
	align-items: center
```

An element with the `alert-body` class is useful for simple alerts which contain only text and a ‘close’ button/icon.

### Button

Class: `btn`

Elements with the `btn` class of inputs with `type=“submit”` will receive button styling.

### Card

Class: `card`

Crisp cards have minimal preset styling and no borders by default, allowing for easy configurability. Within a card elements with a `card-img` class will have a width of 100% and elements with a `card-text` class will have padding of 1.5rem.

### Collapsible

Class: `collapsible`

Collapsibles are hidden by default and are shown by adding a `shown` class. Elements with a` collapsible-header` class will have a pointer cursor when hovered over, and the main content of a collapsible must have a class of `collapsible-content` in order to show and hide properly.

### Container

Class: `container`

Containers can be used to keep the contents of a page neat and aligned. Crisp containers are responsive, with padding set to 1.5rem and `auto` margins.

### Footer

Class: `footer`

Elements within a `.footer` element with a class of `footer-nav` will have a `flex-direction` of `column`. The footer nav is designed for navigation links within a footer.

### Hero

Class: `hero`

Since hero’s are often highly customised, Crisp’s hero simply has the following styling:

```stylus
	width 100%
	margin-bottom s4
	height 90vh
```

### Image Container

Class: `img-container`

An image container resizes its contained image to a 100% width and has a hidden overflow value.

### Modal

Class: `modal`

Modals are hidden by default and can be shown by adding a `shown` class. Within a modal, `.modal-background` acts as a translucent background and `.modal-main` acts as the foreground. Add a `modal-close` class to the close button/icon within `.modal-main` in order to place it neatly at the top right.

### Navbar

Class: `navbar`

A navbar is statically positioned by default. For a sticky navbar, apply the class `navbar-sticky`. Crisp has several types of elements within a navbar, namely:

- `.navbar-heading`, which acts as the heading and/or logo of the navbar. Add a class of `navbar-heading-center` to `.navbar-heading` to centre it.

- `.navbar-nav`is the navigation section of the navbar. This section disappears on smaller screens, and can be shown by adding a class of `shown`. Links within the navbar nav can have a class of `nav-link` in order for appropriate padding to be added.

- `.navbar-nav-open` and `.navbar-nav-close` represent the menu and close icons for opening and closing the navbar nav, which disappear on larger displays.

### Page Header

Class `page-header`

Page headers can be added to each page to give a clear indication of the pages’ contents/purpose. Elements with a `page-header-subtitle` class will have a `font-weight: 300` property in order to contrast with headings.

### Section

Class: `section`

A section is useful for separating groups of content with spacing. Sections apply 4.5rem margins between one another.

### Spinner

Class: `spinner`

The spinner can be applied anywhere in a page and is useful for showing that content is loading. The default spinner is medium in size with `animation-timing-function: ease`. To change the size of a spinner, add` spinner-sm` or `spinner-lg` classes to it to make it small or large respectively. To change its animation timing function to `linear`, add a `spinner-linear` class.


## Forms

A form element, or an element with a `form` class, demarcates a form. Within a form, elements can be separated by adding a `form-section` class, which adds 1.5rem padding at the bottom. Elements with the class `form-input-comment` have a .75rem font size and are useful for hints and such above or below inputs.

Inputs within forms have styling applied to them which provides added uniformity and usability. The following `input` types are applied this styling:

- `text`
- `number`
- `email`
- `password`
- `tel`
- `url`
- `date`
- `datetime-local`
- `datetime`
- `time`
- `week`
- `month`
- `file`
- `range`


## Using Stylus and Gulp

Using Stylus with Crisp allows for additional functionality, such as the use of Crisp’s built-in spacing variables and media query mixins.

[Gulp](https://gulpjs.com/) is used to compile the Stylus source files into CSS and minified CSS. Assuming that you have [Node.js](https://nodejs.org/en/download/) and [NPM](https://www.npmjs.com/get-npm) installed, run `npm install` in the terminal in order to install the necessary packages for running the Gulp tasks. Once the packages are installed, run the `gulp watch` command in order to automatically compile Stylus changes to CSS. Note that Gulp is only required if you are using compiled CSS. If you only need the Stylus files, Gulp is unnecessary here.

All of Crisp’s Stylus files can be found under `src/stylus`. The `crisp.styl` file imports the rest of the Stylus files in a working order. Custom Stylus files can be imported at the end of `crisp.styl` or in a separate file where `crisp.styl` and custom files are imported together.
