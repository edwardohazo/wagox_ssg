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
```sh
npm install wagox_ssg
cd node_modules
mv ./wagox_ssg ../
cd ..
rm -rf package.json
rm -rf package-lock.json
cd wagox_ssg
npm install
cd ..
rm -rf node_modules
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


- Note: Js nor json files cannot be created on build cause they depends on the selected ejs component

### Copy and Paste JavaScript, php, html and css files from the SSG in the corresponding frontend dirs

ssg/components/components_js frontend/output/site/assets/src/scripts
ssg/components/general_js frontend/output/site/assets/src/scripts
ssg/components/components_php frontend/output/site/assets/src/scripts

- Run the followind comand:
```sh
cp ./wagox_ssg/components/components_js/headerDynamics.js ./frontend/output/site/assets/src/scripts
cp ./wagox_ssg/components/components_js/footer.js ./frontend/output/site/assets/src/scripts
cp ./wagox_ssg/components/components_js/aboutUs.js ./frontend/output/site/assets/src/scripts
cp ./wagox_ssg/components/components_js/faqs.js ./frontend/output/site/assets/src/scripts
cp ./wagox_ssg/components/components_js/gallery.js ./frontend/output/site/assets/src/scripts
cp ./wagox_ssg/components/components_js/parallaxImage.js ./frontend/output/site/assets/src/scripts
cp ./wagox_ssg/components/components_js/parallaxImageReviewV2.js ./frontend/output/site/assets/src/scripts
cp ./wagox_ssg/components/components_js/reviewsV2.js ./frontend/output/site/assets/src/scripts
cp ./wagox_ssg/components/components_js/reviewsV2mobile.js ./frontend/output/site/assets/src/scripts
cp ./wagox_ssg/components/components_js/formValidations.js ./frontend/output/site/assets/src/scripts
cp ./wagox_ssg/components/components_js/script.js ./frontend/output/site/assets/src/scripts
cp ./wagox_ssg/components/components_js/servicesCardsTwo.js ./frontend/output/site/assets/src/scripts
cp ./wagox_ssg/components/general_js/scrollDynamics.js ./frontend/output/site/assets/src/scripts
cp ./wagox_ssg/components/general_js/loadComponents.js ./frontend/output/site/assets/src/scripts
cp ./wagox_ssg/components/general_js/loadComponents.js ./frontend/output/site/assets/src/scripts
cp ./wagox_ssg/components/components_html/carousel.html ./frontend/output/site/assets/src/components
cp ./wagox_ssg/assets/styles.css ./frontend/output/site/assets/public/css
cp ./wagox_ssg/assets/images.json ./frontend/output/site/assets/data
```


### Ensure your SSG outputs files correctly to the language directories

## Notes
- The `assets/public/` directory contains styles, fonts, and images.
- Make sure images inside `frontend\output\site\assets\public\images` folder are stored with same names as the ones writen on `frontend\output\site\assets\data\images.json` file.
- The `assets/src/scripts` directory contains JavaScript files originally located in `ssg/components/components_js/` and `ssg/components/general_js/`.
- The `site/en/`, `site/es/`, and `site/fr/` directories store localized versions of the static site.
- The SSG should be configured to generate files into the correct language directories.



## Running the SSG

Once everything is set up, generate the site by running:

```sh
cd wagox_ssg 
npm start
```

This should populate frontend/output/site/ with the necessary files.


## Updating generic content

To update the generic content modify base.json and base.json files nested inside sgg dir.


## Embedding Components

You can find built in components with its corresponding js, php and css files inside ssg/components dir

1. Create a template with its corresponding page name ej contact.ejs inside wagox_ssg\templates
2. Take a component from wagox_ssg/components/components_html
3. Paste it on your ejs created file
4. Create a js file inside frontend/output/site/assets/src/scripts with the same name as the html linked file
5. Add its css inside ssg\components\components_css to frontend/output/site/assets/public/css/styles.css file
6. Add the path to the base.json file
7. Add the placeholder ejs to the script tag inside ssg\baseTemplate\base.ejs file

## Tailwind utility classes order

Layout → Positioning → Display → Flex/Grid → Box Model (padding, margin, border) → Typography → Colors → Effects/Transforms/Transitions → Z-Index → Custom classes or overrides


