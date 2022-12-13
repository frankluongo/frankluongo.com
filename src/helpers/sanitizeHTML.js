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
  const imgTags = html.match(/<img(.*?)>/g);

  if (exists(imgTags)) {
    imgTags.forEach((img) => {
      // Get the alt tag, img filename, and create a mutable image
      // to manipulate
      const alt = img.match(/alt="(.*?)"/)[0];
      const fileName = img.match(/([A-Z|a-z|-])+\.(png|jpg)/)[0];
      const oldSrc = img.match(/src="(.*?)"/)[0];
      let mutableImg = img;
      // Replace alt tags
      mutableImg = mutableImg.replace(alt, 'alt="Frank Luongo Design Co."');
      // Get gatsby image
      const gatsbyImage = imageObj[`${path}/${fileName}`];
      const newSrc = gatsbyImage.publicURL;
      const height = gatsbyImage?.childImageSharp?.original?.height || 0;
      const width = gatsbyImage?.childImageSharp?.original?.width || 0;
      const ratio = (height * 100) / width;
      // replace the source
      mutableImg = mutableImg.replace(
        oldSrc,
        `src="${newSrc}" class="normal-image"`
      );
      // Finally, add it to our html
      sanitizedHTML = sanitizedHTML.replace(
        img,
        `<figure style="--ratio: ${ratio}%" class="normal-image-wrapper">${mutableImg}</figure>`
      );
    });
  }
  // Return the HTML:
  return sanitizedHTML;
}

function exists(arr) {
  return arr && arr.length;
}
