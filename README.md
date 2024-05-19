# PerScholas - SBA-07: React-Application

The purpose of this project is to display my understanding of React, and my capability to implement state in a practical manner.

## Table of Contents

- [Objectives](#objectives)
- [Dependencies](#Dependencies)
- [Usage](#usage)

## Objectives

- Put everything you've learned to the test and apply it to a practical web application.
- The content, context, and objective of your application is entirely up to you.

## Dependencies

- First install either create-react-app or vite:

    npx create-react-app <app-name>

    npm create vite@latest <app-name>

- Install React Router and React-Router-Dom

    npm install react-router

    npm install react-router-dom

- Create a start script inside of your package.json so you can start the server easily

    "start": "npm run dev"


## Usage

### API's Used

- [Jikan] (https://jikan.moe/) Unofficial MyAnimeList API

- [Kitsu] (https://kitsu.docs.apiary.io/) Anime discovery platform

### Anime and Character Search

- The anime section of the react app calls fetch requests from Kitsu to display information on anime. 

- The character section of the react app calls fetch requests from Jikan to display information on anime characters.

- The functionality of each section is similar in that when users enter each page, default data will populate the page.\n
    Users can search for a specific anime/character if they require in the searchbar otherwise users can click on a link\n
    and it will take one to a page with specific statistics for the item selected.