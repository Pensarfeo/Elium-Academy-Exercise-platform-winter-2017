const jasmineRequire = require("./core")
const jsdom = require("jsdom").jsdom;
const document = jsdom('<div class="jasmine_html-reporter"></div>');
var window = document.defaultView;
createElement = (ele) => window.document.createElement(ele)
divEle = createElement("div")
appendChild = divEle.appendChild(createElement("ul"))
console.log(divEle.outerHTML);
// output: "<html><head></head><body>hello world</body></html>