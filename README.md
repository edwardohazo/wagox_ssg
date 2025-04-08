# Static Site Generator (SSG) Setup Guide


## Teck Stack

- Frontend: Html, Css, Tailwind, JavaScript.

- Backend: Node JS, EJS, Express.

## Download and Setting Up SSG

- Create a root directory named  'your_name_project_ssg'
- Open the dir on your IDE
- Run command:
```sh
npm init
```
- Press enter several times
- npm install wagox_ssg
- Go to /node_modules dir
- Run command:
```sh
mv ./wagox_ssg ../ssg
```

### Run The Following Commands on Terminal
```sh
cd ssg
npm install
```

## Directory Structure

Once you have the **SSG** set up, you need to create a sibling directory structure to organize the frontend and output files properly.


### Required Directory Layout

```plaintext
frontend/
├── output/
│   ├── site/
│   │   ├── assets/
|   |   |   ├── data/
│   │   │   ├── public/
│   │   │   │   ├── css/
│   │   │   │   ├── fonts/
│   │   │   │   ├── images/
│   │   │   ├── src/
│   │   ├── en/
│   │   ├── es/
│   │   ├── fr/
```


## Setting Up the Structure

### Create the necessary directories
```sh
cd ..
mkdir -p frontend/output/site/assets/public/css
mkdir -p frontend/output/site/assets/public/fonts
mkdir -p frontend/output/site/assets/public/images
mkdir -p frontend/output/site/assets/src
mkdir -p frontend/output/site/en
mkdir -p frontend/output/site/es
mkdir -p frontend/output/site/fr
```


### Create the necessary files
```sh
touch frontend/output/site/assets/data/images.json
touch frontend/output/site/assets/public/css/styles.css
touch frontend/output/site/assets/data/images.json
```
- Note: Js files cannot be created on build cause they depends on the selected ejs component

### Locate JavaScript and php files from the SSG in the corresponding frontend dirs

ssg/components/components_js frontend/output/site/assets/src/scripts
ssg/components/components_php frontend/output/site/assets/src/scripts

### Locate css files content from the SSG in the corresponding frontend file

ssg/components/components_css/cc_files.css frontend/output/site/assets/public/css/styles.css


### Ensure your SSG outputs files correctly to the language directories

## Notes
- The `assets/public/` directory contains styles, fonts, and images.
- The `assets/src/scripts` directory contains JavaScript files originally located in `ssg/components/components_js/`.
- The `site/en/`, `site/es/`, and `site/fr/` directories store localized versions of the static site.
- The SSG should be configured to generate files into the correct language directories.


## Running the SSG

Once everything is set up, generate the site by running:

```sh
cd ssg && npm start
```

This should populate frontend/output/site/ with the necessary files.


## Updating generic content

To update the generic content modify base.json and base.json files nested inside sgg.


## Embedding Components

You can find built in components with its corresponding js, php and css files inside ssg/components dir


## Tailwind utility classes order

Layout → Positioning → Display → Flex/Grid → Box Model (padding, margin, border) → Typography → Colors → Effects/Transforms/Transitions → Z-Index → Custom classes or overrides


<!-- TDOD:  -->
- Put coontent on bse.js and data.js files and add placeholders on ejs files []
- Complete README.md with creating files docs []
