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
- Go to /node_modules dir:
```sh
cd node_modules
```
- Move ssg to the root dir:
```sh
mv ./wagox_ssg ../ssg
cd ..
rm -rf node_modules
rm -rf package.json
rm -rf package-lock.json
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
mkdir -p frontend/output/site/assets/data
mkdir -p frontend/output/site/assets/public/css
mkdir -p frontend/output/site/assets/public/fonts
mkdir -p frontend/output/site/assets/public/images
mkdir -p frontend/output/site/assets/src
mkdir -p frontend/output/site/assets/src/components
mkdir -p frontend/output/site/assets/src/scripts
mkdir -p frontend/output/site/en
mkdir -p frontend/output/site/es
mkdir -p frontend/output/site/fr
```


### Create the necessary files
```sh
touch frontend/output/site/assets/data/images.json
touch frontend/output/site/assets/public/css/styles.css
```
- Note: Js nor json files cannot be created on build cause they depends on the selected ejs component

### Copy and Paste JavaScript and php files from the SSG in the corresponding frontend dirs

ssg/components/components_js frontend/output/site/assets/src/scripts
ssg/components/general_js frontend/output/site/assets/src/scripts
ssg/components/components_php frontend/output/site/assets/src/scripts

- Run the followind comand:
```sh
cp ./ssg/components/components_js/headerDynamics.js ./frontend/output/site/assets/src/scripts
cp ./ssg/components/components_js/footer.js ./frontend/output/site/assets/src/scripts
cp ./ssg/components/components_js/aboutUs.js ./frontend/output/site/assets/src/scripts
cp ./ssg/components/components_js/faqs.js ./frontend/output/site/assets/src/scripts
cp ./ssg/components/components_js/gallery.js ./frontend/output/site/assets/src/scripts
cp ./ssg/components/components_js/parallaxImage.js ./frontend/output/site/assets/src/scripts
cp ./ssg/components/components_js/parallaxImageReviewV2.js ./frontend/output/site/assets/src/scripts
cp ./ssg/components/components_js/reviewsV2.js ./frontend/output/site/assets/src/scripts
cp ./ssg/components/components_js/reviewsV2mobile.js ./frontend/output/site/assets/src/scripts
cp ./ssg/components/components_js/formValidations.js ./frontend/output/site/assets/src/scripts
cp ./ssg/components/components_js/script.js ./frontend/output/site/assets/src/scripts
cp ./ssg/components/components_js/servicesCardsTwo.js ./frontend/output/site/assets/src/scripts
cp ./ssg/components/general_js/scrollDynamics.js ./frontend/output/site/assets/src/scripts
cp ./ssg/components/general_js/loadComponents.js ./frontend/output/site/assets/src/scripts
cp ./ssg/components/components_php/send_email.php ./frontend/output/site/assets/src/scripts
```


### Add components styles from components_css to folder:

frontend/output/site/assets/public/css/styles.css


### Ensure your SSG outputs files correctly to the language directories

## Notes
- The `assets/public/` directory contains styles, fonts, and images.
- The `assets/src/scripts` directory contains JavaScript files originally located in `ssg/components/components_js/` and `ssg/components/general_js/`.
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
- Complete README.md with creating files docs []
- Put content on base.js and data.js files and add placeholders on ejs files []

