// background scripts respond to browser events

import browser from "webextension-polyfill";

// listener to log active tab url
browser.tabs.onActivated.addListener((activeInfo) => {
  browser.tabs.get(activeInfo.tabId).then((tab) => {
        console.info('web-extension-starter: active tab url', tab.url);
  })
})
