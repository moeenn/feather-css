# Skeleton Extended
Skeleton CSS is great but it is missing quite a few things. This is where this project comes into the picture. Elements have been added that I felt were missing from the Skeleton CSS. This project is very much a **Work in Progress**.

# Credit
All credit goes to the original creators of Skeleton CSS. Without their excellent work this project would not be possible.

Show them some love 
* [Website](http://getskeleton.com/)
* [Github](https://github.com/dhg/Skeleton/)

# Features and Changes
## Event Colors
Event colors can be applied to various elements. They style the border, background and font colors.
![Event Colors](screenshots/event_colors.png)

## Buttons
![Button Event Colors](screenshots/buttons.png)
```css
<button>Normal</button>
<button class="button-primary">Primary</button>
<button class="positive">Positive</button>
<button class="negative">Negative</button>
<button class="alert">Alert</button>
<button class="info">Info</button>
```

## Tables
![Tables](screenshots/table.png)
```css
<table class="u-full-width">
  <thead>
    <tr>
      <th>ID.</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td>User</td>
      <td>email@emai.com</td>
    </tr>
    <tr>
      <td>02</td>
      <td>User</td>
      <td>email@emai.com</td>
    </tr>
    <tr>
      <td>03</td>
      <td>User</td>
      <td>email@emai.com</td>
    </tr>
    <tr>
      <td>04</td>
      <td>User</td>
      <td>email@emai.com</td>
    </tr>
  </tbody>
</table>
```

### Tables with Event Colors
![Tables with Event Colors](screenshots/table_event_colors.png)
```css
<table class="u-full-width">
  <thead>
    <tr>
      <th>ID.</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
    <tbody>
     <tr class="positive">
       <td>01</td>
       <td>User</td>
       <td>email@emai.com</td>
     </tr>
     <tr class="alert">
       <td>02</td>
       <td>User</td>
       <td>email@emai.com</td>
     </tr>
     <tr class="negative">
       <td>03</td>
       <td>User</td>
       <td>email@emai.com</td>
     </tr>
     <tr class="info">
       <td>04</td>
       <td>User</td>
       <td>email@emai.com</td>
     </tr>
   </tbody>
</table>
```

## Messages with Event Colors
![Messages](screenshots/messages.png)
```css
<div class="message">
  <header>Default Message</header>
  <p>... </p>
</div>
<div class="positive message">
  <header>Positive Message</header>
  <p>... </p>
</div>
<div class="negative message">
  <header>Negative Message</header>
  <p>... </p>
</div>
<div class="alert message">
  <header>Alert Message</header>
  <p>... </p>
</div>
<div class="info message">
  <header>Info Message</header>
  <p>... </p>
</div>
```

## Page Buttons
![Page Buttons](screenshots/pages.png)
```css
<div class="pages">
  <a>1</a>
  <a class="active">2</a>
  <a>3</a>
  <a>4</a>
  <a>5</a>
</div>
```

## Navigation Bar
![Navigation Bar](screenshots/navbar.png)
```css
<nav>
  <a class="active">Home</a>
  <a>Products</a>
  <a>Services</a>
  <a>Programs</a>
</nav>
```

### Navigation Bar Responsive
![Navigation Bar](screenshots/navbar_responsive.png)

## Gallery
![Gallery](screenshots/gallery.png)
```css
<div class="gallery">
  <div class="box item">
    <img class="thumb" src="thumb_001.jpg">
  </div>
  <div class="box item">
    <img class="thumb" src="thumb_002.jpg">
  </div>
</div
```


# TODO
- [x] Fix the Navigation Bar for smaller screens
- [ ] Port to SASS
- [ ] Dark Theme
- [ ] Code Clean Up
- [ ] Testing
