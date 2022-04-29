import Tooltip from "./ui/tooltip";
import Dropdown from "./ui/dropdown";
import Tabs from "./ui/tabs";
import Snackbar from "./ui/snackbar";

//create a tooltip

const tooltips = document.querySelectorAll(".tooltip");

tooltips.forEach((tooltip) => {
  const instance = new Tooltip(tooltip);
  instance.init();
});

//create dropdowns

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

//create tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

//create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  snackbar.show("You clicked me");
});
