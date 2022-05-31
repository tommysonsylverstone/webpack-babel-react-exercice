import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/layouts/Home";
import './styles.css';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Home />);