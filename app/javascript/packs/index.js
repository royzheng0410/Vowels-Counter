import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import App from "../components/App";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

document.addEventListener("DOMContentLoaded", () => {
  render(
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>,
    document.body.appendChild(document.createElement("div"))
  );
});