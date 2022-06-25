

setTimeout(() => {
    // let Gmail_Doc = document.getElementsByClassName("T-I T-I-KE L3");

    let Gmail_Test = document.getElementsByClassName('eN  aaA aaB');
    
    alert('funciona');

    console.log(Gmail_Test);

    Gmail_Test[0].addEventListener("click", async () => {
        console.log(Gmail_Test);
        setPageBackgroundColor();
    });
}, 7000);

function setPageBackgroundColor() {

    try {
        var str = `
      <div dir="ltr"><table style="direction: ltr; border-collapse: collapse"
      ><tbody
        ><tr><td style="font-size: 0; height: 12px; line-height: 0"></td></tr
        ><tr
          ><td
            ><table
              cellpadding="0"
              cellspacing="0"
              style="
                border-collapse: collapse;
                font-family: Arial;
                line-height: 1.15;
                color: #000;
              "
              ><tbody
                ><tr
                  ><td
                    style="
                      vertical-align: top;
                      padding: 0.01px 14px 0.01px 0.01px;
                    "
                    ><table
                      cellpadding="0"
                      cellspacing="0"
                      style="border-collapse: collapse; width: 80px"
                      ><tbody
                        ><tr
                          ><td style="padding: 0.01px 10px 0 0"
                            ><img
                              src="https://ci3.googleusercontent.com/proxy/LkJweEisZmnWUh16hrR5pYZtPpqT_KnlxS2jbDOSPhfQgv94zcKujLgmhP-Jwi3BXuMCe4uFvaMTZi9_nFWTkpgpxLpuX8gYE2HVUqPLjFnPpTBdN45idMu9HqPWoAzeKitUe27fzPkjetG-ss0-8SW9P8g=s0-d-e1-ft#https://d36urhup7zbd7q.cloudfront.net/6663415996219392/6625337319489536/logo.gif?ck=1653947321.39"
                              height="80"
                              width="80"
                              style="
                                width: 80px;
                                vertical-align: initial;
                                border-radius: 0;
                                display: block;
                                height: 80px;
                              "
                              class="CToWUd" /></td></tr></tbody></table></td
                  ><td
                    height="1"
                    width="0"
                    style="
                      width: 0;
                      padding: 0.01px;
                      border-right: 1px solid #bdbdbd;
                      height: 1px;
                      font-size: 1pt;
                    "
                    >&nbsp;</td
                  ><td
                    style="
                      padding: 0.01px 0.01px 0.01px 14px;
                      vertical-align: top;
                    "
                    valign="top"
                    ><table
                      cellpadding="0"
                      cellspacing="0"
                      style="border-collapse: collapse"
                      ><tbody
                        ><tr
                          ><td
                            style="
                              line-height: 1.2;
                              padding: 0.01px 0.01px 12px 0.01px;
                            "
                            ><span
                              style="
                                font-family: Arial;
                                text-transform: initial;
                                font-weight: bold;
                              "
                              ><span style="color: #646464; font-size: 16px">
                                Lucas Fernández
                              </span></span
                            ><br /><span
                              style="
                                font-size: 13px;
                                letter-spacing: 0;
                                font-family: Arial;
                                text-transform: initial;
                                font-weight: bold;
                                color: #646464;
                              "
                            >
                              Secure Stamp
                            </span></td
                          ></tr
                        ><tr
                          ><td style="padding: 0.01px; line-height: 0"
                            ><table
                              cellpadding="0"
                              cellspacing="0"
                              style="border-collapse: collapse"
                              ><tbody
                                ><tr
                                  ><td style="padding: 0.01px"
                                    ><table
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="border-collapse: collapse"
                                      ><tbody
                                        ><tr
                                          ><td
                                            style="
                                              line-height: 0;
                                              padding: 0.01px 0.01px 6px 0.01px;
                                            "
                                            ><table
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                border-collapse: collapse;
                                                line-height: 14px;
                                                font-size: 12px;
                                                font-family: Arial;
                                              "
                                              ><tbody
                                                ><tr
                                                  ><td
                                                    style="
                                                      padding: 0.01px;
                                                      font-family: Arial;
                                                      font-size: 12px;
                                                    "
                                                    ><a
                                                      href="tel:+549+11+6577-7743"
                                                      style="
                                                        text-decoration: unset;
                                                        font-size: 12px;
                                                        font-family: Arial;
                                                      "
                                                      target="_blank"
                                                      ><span
                                                        style="
                                                          line-height: 1.2;
                                                          color: #212121;
                                                          font-family: Arial;
                                                          white-space: nowrap;
                                                          font-size: 12px;
                                                        "
                                                      >
                                                        +549 11
                                                        6577-7743&nbsp;</span
                                                      ></a
                                                    ></td
                                                  ></tr
                                                ></tbody
                                              ></table
                                            ></td
                                          ></tr
                                        ></tbody
                                      ></table
                                    ></td
                                  ></tr
                                ></tbody
                              ></table
                            ></td
                          ></tr
                        ></tbody
                      ></table
                    ></td
                  ></tr
                ></tbody
              ></table
            ><table
              cellpadding="0"
              cellspacing="0"
              border="0"
              style="max-width: 600px; width: 100%"
              ><tbody
                ><tr
                  ><td
                    style="line-height: 0"
                  ></td></tr></tbody></table></td></tr></tbody></table></div
  >`;

        var tag = document.createElement('div');

        tag.innerHTML = str;

        let Gmail_Doc = document.querySelectorAll('[role="textbox"]')
        let Gmail_Button = document.getElementsByClassName('T-I J-J5-Ji aoO v7 T-I-atl L3');

        Gmail_Doc[0].appendChild(tag);

    } catch (e) {
        console.log(e);
    }
}