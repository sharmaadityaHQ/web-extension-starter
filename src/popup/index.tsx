import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home";

const container = document.getElementById('popup');
const root = createRoot(container!);
root.render(<Home />);