import React from "react";
import { createRoot } from 'react-dom/client';
import CustomApp from "./pages";
import AppIcon from "./assets/app_icon.png";
import browser from "webextension-polyfill";

console.info('web-extension-starter: content script loading!');

// create cta to open custom app
const img = document.createElement('img');
img.src = browser.runtime.getURL(AppIcon);
img.height = 35;
img.style.borderRadius = '50%';
const cta = document.createElement('div');
cta.id = 'app-cta';
cta.style.display = 'flex';
cta.style.justifyContent = 'center';
cta.style.alignItems = 'center';
cta.style.position = 'fixed';
cta.style.right = '30px';
cta.style.bottom = '150px';
cta.style.width = '60px';
cta.style.height = '60px';
cta.style.borderRadius = '50%';
cta.style.backgroundColor = 'lightgrey';
cta.style.zIndex = '99999';
cta.appendChild(img);

document.body.appendChild(cta);

// create container for custom app
const container = document.createElement('div');
container.id = 'app-container';
container.style.boxSizing = 'content-box';
container.style.position = 'fixed';
container.style.right = '35px';
container.style.bottom = '120px';
container.style.height = '750px';
container.style.width = '385px';
container.style.zIndex = '99999';
container.style.border = '1px solid rgb(164, 164, 164)';
container.style.backgroundColor = '#ffffff';
container.style.visibility = 'hidden';
document.body.appendChild(container);

const root = createRoot(container);

const openContainer = () => {
    root.render(<CustomApp />);
    cta.style.visibility = 'hidden';
    container.style.visibility = 'visible';
}

cta.addEventListener('click', () => {
    openContainer();
});