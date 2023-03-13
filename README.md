# React Portfolio, multiple pages with dark mode

## a portfolio for developers

![screenshot](https://andy8647.com/website.jpg)

[View Live Demo](https://andy8647.com/)

Attention: This is based on paytonjewell's [react-portfolio-template](https://github.com/paytonjewell/ReactPortfolioTemplate)
I just added particlets background, OS dark mode detection and watch, Google Analytics.
Elements redesigned by [Ingrid Fei](https://ingrid0126.com)


### Original README:

## Features

🌑 Dark Mode Toggler and OS dark mode detection

📱Social Media Presence meta tags

📊 Google Analytics

📖 Multiple Pages (React Router)

📱 Fully Responsive

🎨 Modern Design

💡 Perfect Lighthouse Score

![screenshot of perfect lighthouse score](https://user-images.githubusercontent.com/18350557/179609620-847374a6-23e6-4432-b7a8-181d7d9bf026.png)

---

## Getting started

### prerequisites

- have [Git](https://git-scm.com/) installed on your machine
- have [Node.js](https://nodejs.org/en/download/) installed on your machine
- basic familiarity with your machine's command line
- basic understanding of JSON data outline (arrays of objects basically)

## how to use

- fork the repository and clone locally
- cd into the project and run `npm install` to install dependencies
- once installation is complete, run `npm run start` to get your local copy running in the browser.

## template instructions

### 1. replace the images

- replace `/src/assets/img/self.png`
- replace `/public/favicon.ico`
- replace `/public/website.jpg` (this is the image that shows up when you share the link on social media, you can take a screen shot when the infomation has been filled out)

### 2. Your Information

- edit `assets/info/Info.js` There are some instructions written in the comments there.
- replace `/public/resume.pdf` with your own resume, the link to the file is `https://yoursubdomain.yourdomain/resume.pdf

### 3. Color Scheme

#### Main Gradient

For the main gradient, you can change the colors in `/src/assets/colors/mainGradient.js`:

```js
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
```

#### Particles Background Color

For the particles background color, you can change the colors in `/src/assets/colors/particlesBg.js`
These are the colors I picked from iTerm2's color schemes, but you can use whatever you like.

```js
export const particleBgColors = () => {
  // for dark use atom one dark, for light use CLRS
  const background = (darkMode = false) => (darkMode ? '#0d2538' : '#DCD6C8');
  const particle = (darkMode = false) => (darkMode ? '#c678dd' : '#5C7C8A');
  const links = (darkMode = false) => (darkMode ? '#98c379' : '#E7B669');

  return {
    background,
    particle,
    links,
  };
};
```
### 4. Google Analytics Credentials

- edit `/src/utils/log.js`

```js
// fill with your own google analytics credentials
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};
```

### 5. Social Media Presence meta tags
- edit `/public/index.html`
- for meta tags, you can use the generator [here](https://metatags.io/)
- [twitter example](https://twitter.com/Andy8647L/status/1633956293986664448)

```html
<!-- Social Media Previews -->
    <!-- Primary Meta Tags -->
    <title>Andy Luo, Full Stack Developer</title>
    <meta name="title" content="Andy Luo, Full Stack Developer">
    <meta name="description" content="Full Stack Developer and Freelance Photographer based in Toronto, passionate about building web applications, learning new technologies, traveling and exploring new places.">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://andy8647.com/">
    <meta property="og:title" content="Andy Luo, Full Stack Developer">
    <meta property="og:description" content="Full Stack Developer and Freelance Photographer based in Toronto, passionate about building web applications, learning new technologies, traveling and exploring new places.">
    <meta property="og:image" content="https://andy8647.com/website.jpg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://andy8647.com/">
    <meta property="twitter:title" content="Andy Luo, Full Stack Developer">
    <meta property="twitter:description" content="Full Stack Developer and Freelance Photographer based in Toronto, passionate about building web applications, learning new technologies, traveling and exploring new places.">
    <meta property="twitter:image" content="https://andy8647.com/website.jpg">
```


### 6. Deployment

I recommend using [Netlify](https://www.netlify.com/) for deployment. It's free and easy to use. You can follow the instructions [here](https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git) to deploy your site.

P.S. If you are using Netlify, to resolved the bug from `react-router-dom`, you need to add a `_redirects` file in the `public` folder and add the following code:

```
/*    /index.html   200
```

---

And you're done!

If you have any questions or issues with the setup process, feel free to contact me by any of the means below:

[Twitter](https://twitter.com/Andy8647L) | andy8647lgc@gmail.com

Finally, thanks to the original author [paytonjewell](https://github.com/paytonjewell) for the well built template.

