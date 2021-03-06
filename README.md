<div id="top"></div>

<br />
<div align="center">
  <h3 align="center">Movie Database Web Application</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![1][screenshot-1]]

Movie Database Web Application with some features including but not limited to:

- Search
- Movie detailed infos
- Infinite scroll listing

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Ant Design](https://ant.design/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

  ```sh
  npm install npm@latest -g
  ```

- [Node.js](https://nodejs.org/en/)

- [git](https://git-scm.com/downloads)

- [Visual Studio Code](https://code.visualstudio.com/)

### Installation

1. Get a free API Key at [https://www.omdbapi.com/](https://www.omdbapi.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/naufalg/movieDB.git
   ```
3. Install packages
   ```sh
   npm install
   or
   yarn install
   ```
4. Store your API in `.env`
   ```env
   REACT_APP_URL_API=ENTER YOUR API
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

1. Open root project directory using Visual Studio Code
2. Start the project
   ```env
   yarn start
   ```
3. Use the app

Features:
- Search Movie
  [![2][screenshot-2]]

Type the movie you want to find and click search

- Movie Detail Information
  [![3][screenshot-3]]

Click on the movie poster to enlarge and preview the poster image, or click the movie title in the movie card you just searched and you will be redirected to the movie detail page for further information about the movie.

- Responsive layout website
  [![4][screenshot-4]]

Access from your beloved device wether it is your PC, Tablet, Smartphone, you name it.

<p align="right">(<a href="#top">back to top</a>)</p>

[screenshot-1]: images/screenshot-1.jpg
[screenshot-2]: images/screenshot-2.jpg
[screenshot-3]: images/screenshot-3.jpg
[screenshot-4]: images/screenshot-4.png
