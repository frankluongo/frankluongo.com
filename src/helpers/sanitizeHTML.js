/**
 * sanitizeHTML()
 * Takes in HTML, the image object and a path and returns the HTML
 * with images sourced from our Gatsby site instead of Notion
 * @param {string} html - The post/project html from markdown
 * @param {object} imageObj - the Image Object containing all of
 * the images for the site
 * @returns {string} Sanitized HTML
 */
export function sanitizeHTML(html, imageObj, path) {
  // Initially, create a copy of our html
  let sanitizedHTML = html;
  // Grab all of the image src's (image-name.jpg) in the html
  const htmlImages = html.match(/([A-Z|a-z|-])+\.(png|jpg)/g);
  // Grab all the "src="blahblahblag"" strings
  const srcs = html.match(/src="(.*?)"/g);
  // If htmlImages does not exist OR has no length, just return
  if (!htmlImages || !htmlImages.length) return sanitizedHTML;
  // Go through each image we have
  htmlImages.forEach((img) => {
    // Create a path to the image hosted in Gatsby
    const newSrc = imageObj[`${path}/${img}`].publicURL;
    // Grab the string for the current "src" in HTML
    const oldSrc = srcs.find((src) => src.includes(img));
    // Modify sanitizedHTML to replace the old "src" with the new one
    sanitizedHTML = sanitizedHTML.replace(oldSrc, `src="${newSrc}"`);
  });
  // Return the HTML
  return sanitizedHTML;
}
