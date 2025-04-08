// generate.js
import ejs from 'ejs';
import fs from 'fs';
import path from 'path';


// Path to the JSON data file
const baseDataFile = path.join(process.cwd(), 'base.json');

// Path to the JSON data file
const dataFile = path.join(process.cwd(), 'data.json');

// Path to the templates
const baseTemplateDir = path.join(process.cwd(), 'baseTemplate');

// Path to the templates
const templatesDir = path.join(process.cwd(), 'templates');

// Path to save the generated HTML files
const outputDir = path.join(process.cwd(), '../frontend/output/site');

// Read the data from the JSON file
const jsonData = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));

// Read the data from the JSON file
const baseJsonData = JSON.parse(fs.readFileSync(baseDataFile, 'utf-8'));

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// With base ejs template
const generatePage = (lang, page, data) => {

    let baseData;
    let mainHtml;

    const outputFilePath = path.join(outputDir, lang, `${page}.html`);
    const outputLangDir = path.dirname(outputFilePath);

    // Ensure the output directory exists
    if (!fs.existsSync(outputLangDir)) {
      fs.mkdirSync(outputLangDir, { recursive: true });
    }

    // Path to base template
    const baseTemplateFile = path.join(baseTemplateDir, 'base.ejs');

    // Paths to the templates
    const childTemplateFile = path.join(templatesDir, `${page}.ejs`);

    // Render the child template first
    ejs.renderFile(childTemplateFile, data, (err, childHtml) => {
    
      if (err) {
        console.error(`Error rendering child template for ${lang} - ${page}:`, err);
        return;
      }
    
      // Prepare embedded main html
      mainHtml = childHtml;

    });

    // Generate pages for each language and page type (home, about, contact)
    Object.keys(baseJsonData).forEach(lang => {
      const pages = baseJsonData[lang];
      Object.keys(pages).forEach(page => {
        const dataForPage = pages[page];
        baseData = {
          ...dataForPage, // Pass other data properties (like title, lang, etc.)
          body: mainHtml, // Inject child HTML into the `body`
          lang, // Include the language for the layout
        };

      });
    });

    // Render the base template with injected body content
    ejs.renderFile(baseTemplateFile, baseData, (err, finalHtml) => {
      if (err) {
        console.error(`Error rendering base template for ${lang} - ${page}:`, err);
        return;
      }
    
      // Write the final rendered HTML to the output file
      fs.writeFileSync(outputFilePath, finalHtml);
      console.log(`Static HTML page generated for ${lang} - ${page} at: ${outputFilePath}`);
    });
  
};


// Generate pages for each language and page type (home, about, contact)
Object.keys(jsonData).forEach(lang => {
  const pages = jsonData[lang];
  Object.keys(pages).forEach(page => {
    const dataForPage = pages[page];
    generatePage(lang, page, dataForPage);
  });
});










    


