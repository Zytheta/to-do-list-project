// footer information

import createElement from "../misc-functions/createElement.js";

function populateFooter(footerInfo) {
  const favInfo = createElement(
    "a",
    {
      class: "citation",
      id: "favicon",
      href: "https://icons8.com/icons/set/checklist",
    },
    ["Favicon is from icons8."]
  );

  footerInfo.appendChild(favInfo);
}

export default populateFooter;
