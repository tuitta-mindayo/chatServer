import { makeFile } from "./index.js";
//getElements
const name = document.getElementById('name');
const description = document.getElementById('description');
const addonType = document.getElementById('addonType');
const minVersion = document.getElementById('minVersion');
const make = document.getElementById('make');

//EventListeners
make.addEventListener('click', makes);

function makes()
{
  makeFile();
}
