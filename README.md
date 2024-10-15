# 🎬 Movies Search App

A full-featured movie search application built with **React**, integrating the [OMDB API](https://www.omdbapi.com/). Users can search for movies, view detailed information, and manage their favorites list.

## ✨ Features

- 🔍 **Search Functionality**: Search for movies using titles or keywords.
- 🎥 **Movie Details View**: View detailed information about each movie, including a large poster, title, release year, genre, plot, ratings, and cast.
- 🖼️ **Movie Grid/List Display**: Display movie posters, titles, and short descriptions in a user-friendly layout.
- 🎚️ **Dropdown Filter**: Filter movies based on their type using the OMDB API.
- 🔁 **Pagination/Infinite Scroll**: Handle large sets of movie results efficiently.
- 🚨 **Error Handling**: Displays user-friendly error messages when API requests fail or no results are found.
- 🚀 **React Router Integration**: Smooth navigation between the search page and movie details page.

## 🛠️ Tech Stack

- ⚛️ **React.js**: Frontend framework for building UI.
- 🚦 **React Router**: For navigation and routing between different pages.
- 🎨 **Tailwind CSS**: Utility-first CSS framework for styling.
- 💻 **JavaScript**: For interactivity and dynamic content.
- 🌐 **OMDB API**: To fetch movie data.

## 🔧 Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/movies-search-app.git
   cd movies-search-app

## Add your OMDB API key:

- Sign up for the OMDB API and get your API key.

- Create a .env file in the root directory and add.


## 📦 Deployment
The app is deployed on Netlify. You can view it here.

## 📚 How It Works
- The app uses the OMDB API to fetch movie data based on user search queries.
- React Router is used for seamless navigation between the search and movie detail pages.
- Tailwind CSS is used for creating a responsive and aesthetically pleasing layout.
## 🎯 Task Requirements
- Implemented API service functions for fetching movie data and search results.
- Created a search bar for user input.
- Displayed results in a grid format with movie posters and titles.
- Added pagination support.
- Developed a detailed view with all the necessary movie information.
- Included filtering using the OMDB API without using local array.filter() method.
