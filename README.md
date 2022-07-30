## North 141 rides again

In Development! (7/14/22)

This is a react front-end that calls a RESTful headless backend at `api.north141.com`

---
### To work on this repo:
clone it down

create .env file in project root, add 

`REACT_APP_TOKEN=your-api-key-here` 

with the API key that Mr. Potter provides to you

---

### To start the dev client:

`npm start`

if you are using `local.north141.com` (just JP for now, this is a reminder space-cadet)

run: 

`dev-nginx start`

---

Major API endpoints: **in process**


---
some ad-hoc development notes:

Front end in React with styled components and Material UI:

**INDEX pages**

> » Landing (home) Page - full width hero top section, articles, about section, why us section  - [see here on figma](https://www.figma.com/file/c1ORDWbGMv5l3os0HwlWjC/north-141---2022?node-id=0%3A1)

> » All Posts page - masonry with lots of white space »Search/Tag Search
>>  » can this be whipped up with a material ui component?*

**TEMPLATE pages**

» Photo post - »HERO (image with text) »ABOUT (text) »4-image blocks?

» Writing / Article post - »Large text with drop cap »images in circular avatar?

» Video post - »HERO Video BG Teaser (use mux?) (animated gif?, webm version? YT-> webm?), scroll down to play video without frame, scroll again for production details/notes, inside window (or click out to YT)


**To Do List**
---
+ Technology to add
  + React Router
    + '/', render `<Homepage>`
    + '/articles/post-name', render `<Post post={params}>`
    + '/about', render `<About />`
  + React Helmet
+ Components to build
  + Hero image block with title
  + Multi Image Grid (needs touchup and API definition)
  + Text Block with section header
  + Video hero with BG video?
+ Page Templates:
  + Homepage
  + Blog Post
  + Video Post
  + Photo Gallery Post