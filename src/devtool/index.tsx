import React from "react";
import browser from "webextension-polyfill";
import AppIcon from '../assets/app_icon.png';
import Home from "./Home";
import { createRoot } from "react-dom/client";

const container = document.getElementById('devtool');
const root = createRoot(container!);
root.render(<Home />);

browser.devtools.panels
  .create(
    "UI TYPE: DEVTOOL",
    browser.runtime.getURL(AppIcon),
    "devtool.html"
  )

