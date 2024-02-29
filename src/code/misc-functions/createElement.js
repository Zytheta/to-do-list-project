// elementCreator.js

// Private function to create a DOM element
function createElement(elementType, attributes = {}, children = []) {
  const element = document.createElement(elementType);

  // Attribute setter
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  // Append children
  children.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
}

// Export the createElement function for use in other files
export default createElement;

// // Test text div
// const testDiv1 = elementCreator.createElement("div", {}, ["Test text?"]);

// // Test img div
// const testImg1 = elementCreator.createElement("img", {
//   src: "My files/Downloads/teth.png",
//   alt: "The symbol for teth.",
// });
// const testDiv2 = elementCreator.createElement("div", {}, [testImg1]);

// // Test appending to main
// mainElement.appendChild(testDiv1);
// mainElement.appendChild(testDiv2);

// Test div with custom attributes
// const testDiv3 = elementCreator.createElement(
//   "div",
//   {
//     class: "custom-class",
//     id: "custom-id",
//     style: "color: blue;",
//     "data-custom": "custom-value",
//   },
//   ["Custom text"]
// );

// // Test img with custom attributes
// const testImg2 = elementCreator.createElement("img", {
//   src: "path/to/image.jpg",
//   alt: "Custom image",
//   width: "100",
//   height: "100",
// });
