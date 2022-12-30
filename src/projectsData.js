import LyricsSearch from "./assets/images/lyrics-search.webp";
import GroupMessenger from "./assets/images/group-messenger.webp";
import DisneyPlusClone from "./assets/images/disney-plus-clone.webp";
import FinanceTracker from "./assets/images/finance-tracker.webp";
import RecipeDirectory from "./assets/images/recipe-directory.webp";
import MemoryGame from "./assets/images/memory-game.webp";
import PasswordGenerator from "./assets/images/random-password-generator.webp";
import Clock from "./assets/images/clock.webp";

import html from "./assets/images/html.svg";
import css from "./assets/images/css.svg";
import javascript from "./assets/images/javascript.svg";
import react from "./assets/images/react.svg";
import redux from "./assets/images/redux.svg";
import firebase from "./assets/images/firebase.svg";
import framermotion from "./assets/images/framer-motion.png";
import styledcomponents from "./assets/images/styled-components.svg";
import reactrouterdom from "./assets/images/react-router-dom.svg";
import sass from "./assets/images/sass.svg";

export const projects = [
    {
        title: "Lyrics Search",
        image: LyricsSearch,
        what: "This project allows you to search for any song you want. Then you can visit the song's page to see the lyrics.",
        how: "Just search for the song you want. Then you’ll see the songs. You can click on any of them. Then, you are redirected to the song's page. If lyrics are available for that song you can see it in the page of that song.",
        technologies: [ html, css, javascript, react, redux, sass, framermotion ],
        why: "The main reason is that I didn’t have a project with APIs so I built this. Also I wanted to work with RTK-Query. Also I wanted to have a project with SCSS so I used it. And also I used BEM for class naming.",
        github: "https://github.com/v-amirrr/lyrics-search",
        demo: "https://song-search.netlify.app/",
        url: 1,
    },

    {
        title: "Group Messenger",
        image: GroupMessenger,
        what: "This project is a group chat. You can enter your name and send your messages. Also you’re able to delete any of your messages. For deleting a message all you have to do is to click on the message and then click on the delete icon.",
        how: "First you should read the warning popup. Then enter your name. Also the name you choose should be unique and different from others. After you choose your name, you’ll see all the messages. And you can send a message yourself. Also by clicking on any of your messages, a delete icon will appear and by clicking on that icon you can delete your message for everyone and without time limitation.",
        technologies: [ html, css, javascript, react, redux, firebase, framermotion, styledcomponents ],
        why: "After I built my last project (Disney+ Clone), I was looking for a simple and interesting project. Then I saw this project on the YouTube homepage and I decided to build it. And also after that I used Redux for my last project, this seemed a good opportunity to practice using Redux-Thunk in a project.",
        github: "https://github.com/v-amirrr/group-messenger",
        demo: "https://group-messenger-reactjs.netlify.app/",
        url: 2,
    },

    {
        title: "Disney+ Clone",
        image: DisneyPlusClone,
        what: "This project is a clone of Disney+ website. You can sign up, and log in with email or Google and also you can log out. After logging in, you can find movies at the homepage, also you can go to the detail page of each movie.",
        how: "First you need to log in or create an account. Also you can use Google for both login and sign in. After that you’ll be redirected to the homepage and all the movies are in there. By clicking on each of them you’ll be redirected to their own detail page.",
        technologies: [ html, css, javascript, react, redux, reactrouterdom, firebase, framermotion, styledcomponents ],
        why: "After I built my last project (Finance Tracker) which was my first project that had authentication on it, I needed at least one other project with authentication to become more familiar with the whole authentication process. And also because I’d just learned Redux at that point I wanted to use it in a project and because this project gets its data from Firebase I thought it could be a good opportunity to use Redux for storing that data.",
        github: "https://github.com/v-amirrr/disney-plus-clone",
        demo: "https://disney-react.netlify.app/",
        url: 3,
    },

    {
        title: "Finance Tracker",
        image: FinanceTracker,
        what: "This project gives you the ability to create an account, login with it and add transactions into it. You can also delete your transactions. Or you can log out and create a new account and add new transactions to it.",
        how: "First you need to login or create an account. After that you can add new transactions or delete your old transactions. Each transaction includes a name for what you’ve spent on and a number for how much you’ve spent on. Also you can log out from your current account. If you log out or close the app, in either way all of your transactions are stored on Firebase realtime database.",
        technologies: [ html, css, javascript, react, reactrouterdom, firebase, framermotion ],
        why: "After I built my last project (Recipe Directory), it was time to build a project where you can log in, create an account or log out and put something into the app.",
        github: "https://github.com/v-amirrr/finance-tracker",
        demo: "https://finance-tracker-react.netlify.app/",
        url: 4,
    },

    {
        title: "Recipe Directory",
        image: RecipeDirectory,
        what: "In this project you can add your recipes into the  project. Each recipe has its own detail page where you can see the recipe in more detail. This project also has a dark theme and a light theme therefore you can switch between them.",
        how: "In this project there are 3 recipes as examples. By clicking on the add icon you’ll be redirected to the build recipe page where you can put title, ingredients, method and time. After creating the recipe it’ll be added into the homepage and you also will be redirected to there. Also by clicking on each recipe you go to their detail page.",
        technologies: [ html, css, javascript, react, reactrouterdom, framermotion ],
        why: "After I built my last project (Memory Game), I wanted to build a project that had multiple routes. This project was the first time that I worked with React-Router-Dom.",
        github: "https://github.com/v-amirrr/recipe-directory",
        demo: "https://recipe-directory.netlify.app/",
        url: 5,
    },

    {
        title: "Memory Game",
        image: MemoryGame,
        what: "In this project there are 12 images and 6 of them are the same. You have to find the similar images and match them.",
        how: "There are 12 images, covered with  a picture. The true images are under that picture. Now half of these images are the same. You have to  match similar images to each other. By clicking on an image the true image will reveal and then you should click on another one (DJ KHALED). If these two images you've clicked are the same, you’ll get a point and they’ll remain revealed.",
        technologies: [ html, css, javascript, react, framermotion ],
        why: "This project was kind of my first project with React.js and it really booted up my React.js skills. It was in that project that I really understood the use of reusable components and the whole reason for using React.",
        github: "https://github.com/v-amirrr/memory-game",
        demo: "https://memory-match-react.netlify.app/",
        url: 6,
    },

    {
        title: "Password Generator",
        image: PasswordGenerator,
        what: "In this project you can generate a random password. You can decide whether it includes uppercase letters, lowercase letters, numbers or symbols. Also, you can copy the generated password.",
        how: "There is form in this project. There is a number input where you can set password length. AAfter that there are 4 checkboxes for you to decide whether the password includes uppercase letters, lowercase letters, numbers or symbols. Next to the generated password there is a copy icon and by clicking on that you can copy the password.",
        technologies: [ html, css, javascript, react ],
        why: "So after trying a lot of courses I gained some knowledge about React.js. I decided to build a little project with it, just for fun. So I built this project. This was supposed to be a project where I practice my React skills but it really was more JavaScript than React in it. I built it anyway.",
        github: "https://github.com/v-amirrr/random-password-generator",
        demo: "https://generate-random-password.netlify.app/",
        url: 7,
    },

    {
        title: "Clock",
        image: Clock,
        what: "There are three pages in this project; a clock page, a stopwatch page, and a timer page. The clock page allows you to switch between analog and digital clocks. There are also dark and light modes available in this project.",
        how: "There are 3 pages in this project. On the first page, we can choose whether to see the clock digitally or analogically. On the second page, there is a stopwatch that you can start, stop or reset. On the third and last page, there is a timer. Basically, you set a time and start, then when the time is up, it will notify you. You can also stop or reset the stopwatch. And also you can change the theme to dark or light.",
        technologies: [ html, css, javascript ],
        why: "Before I started learning React.js, I wanted to build a complicated project with vanilla JavaScript. I had seen clocks, stopwatches and timers in individual projects but I’ve never seen them in one project. So I decided to build it to be a good experience working with vanilla JavaScript.",
        github: "https://github.com/v-amirrr/Clock",
        demo: "https://v-amirrr.github.io/Clock/",
        url: 8,
    },

    // {
    //     title: "",
    //     image: "",
    //     what: "",
    //     how: "",
    //     technologies: [],
    //     why: "",
    //     github: "",
    //     demo: "",
    //     url: 1,
    // },
];