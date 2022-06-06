
// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {

  try {
    // var tag = `<div><h1>My First Heading</h1><p>My first paragraph.</p></div>`;

    // // var text = document.createTextNode("Tutorix is the best e-learning platform");

    // // tag.appendChild(text);

    var str = '<p>Just some <span>text</span> here</p><img src="https://drive.google.com/file/d/1bgR0_fVem_qhl7dFk3oW_ySmSoHHXn_-/preview"/>';

    var tag = document.createElement('div');

    tag.innerHTML = str;

    let Gmail_Doc = document.getElementsByClassName('gmail_signature');

    Gmail_Doc[0].appendChild(tag);

  } catch (e) {
    console.log(e);
  }
}

