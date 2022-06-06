
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

    const prueba2 = `<table style="border-top:1px solid #d3d4de">
    <tbody><tr>
        <td style="width:55px;padding-top:18px"><a href="http://www.avg.com/email-signature?utm_medium=email&amp;utm_source=link&amp;utm_campaign=sig-email&amp;utm_content=webmail" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://www.avg.com/email-signature?utm_medium%3Demail%26utm_source%3Dlink%26utm_campaign%3Dsig-email%26utm_content%3Dwebmail&amp;source=gmail&amp;ust=1654643192976000&amp;usg=AOvVaw3UPxCaesgmAePOcDaEhYto"><img src="https://ci6.googleusercontent.com/proxy/MoyILPaJZx6jUUqB9B1zExX4W9lxnsmQceeFFQSslT3u652-1zZbb1gOhiPP9rTHfyvM_Usz0rj1_YAB0_O0JhOMCliB-FAfZCvZ12J1mAuSOrHVizmlBtnBHFc=s0-d-e1-ft#https://ipmcdn.avast.com/images/icons/icon-envelope-tick-green-avg-v1.png" alt="" width="46" height="29" style="width:46px;height:29px" class="CToWUd"></a></td>
      <td style="width:470px;padding-top:17px;color:#41424e;font-size:13px;font-family:Arial,Helvetica,sans-serif;line-height:18px">Secure stamp <a href="http://www.avg.com/email-signature?utm_medium=email&amp;utm_source=link&amp;utm_campaign=sig-email&amp;utm_content=webmail" style="color:#4453ea" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://www.avg.com/email-signature?utm_medium%3Demail%26utm_source%3Dlink%26utm_campaign%3Dsig-email%26utm_content%3Dwebmail&amp;source=gmail&amp;ust=1654643192976000&amp;usg=AOvVaw3UPxCaesgmAePOcDaEhYto">www.avg.com</a> 		</td>
    </tr>
  </tbody></table>`

    var str = `<p>Just some <span>text</span> here</p><img src=${src_img}/>`;

    var tag = document.createElement('div');

    tag.classList.add('gmail_signature');

    tag.innerHTML = str;

    let Gmail_Doc = document.getElementsByClassName('cf An');

    // console.log(Gmail_Doc);

    Gmail_Doc[0].insertAdjacentHTML(tag);

  } catch (e) {
    console.log(e);
  }
}

