
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

  const src_img = 'https://freesvg.org/img/1291143713.png';

  try {

    var str = `<p>Just some <span>text</span> here</p><img src=${src_img}/>`;

    var tag = document.createElement('div');

    // tag.classList.add('gmail_signature');

    tag.innerHTML = str;

    
    // console.log();
    
    // Gmail_Doc[0].insertBefore(str, Gmail_Doc[0].nextSibling);
    
    // console.log(Gmail_Doc);
    
    
    let Gmail_Doc = document.getElementsByClassName('cf An');

    Gmail_Doc[0].insertBefore(tag, Gmail_Doc[0].children[0]);

  } catch (e) {
    console.log(e);
  }
}