/**
 * sanitizeHTML()
 * Takes in HTML, and the image object
 * @param {string} html - The post/project html from markdown
 * @param {object} imageObj - the Image Object containing all of the images for the site
 * @returns {string} Sanitized HTML
 */
export function sanitizeHTML(html, imageObj, path) {
  const tempHTML = document.createElement("div");
  tempHTML.innerHTML = html;
  const images = tempHTML.querySelectorAll("img");
  images.forEach((img) => {
    const rawImg = img.src.match(/([A-Z|a-z|-])+\.(png|jpg)/)[0];
    img.src = imageObj[`${path}/${rawImg}`].publicURL;
  });
  return tempHTML.innerHTML;
}
