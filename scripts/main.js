const eka = document.getElementById("eka");
const uls = eka.querySelector("ul");
const firstUl = uls;
firstUl.setAttribute("style", "display:flex;");

const firstLi = firstUl.children;
console.log(firstLi);

for (let index = 0; index < firstLi.length; index++) {
  firstLi[index].setAttribute("class", "firstli");
  firstLi[index].setAttribute("style", "list-style: none;");
}

for (let index = 0; index < firstLi.length; index++) {
  let secondUl = firstLi[index].children;
  console.log(secondUl);
  for (let index = 0; index < secondUl.length; index++) {
    secondUl[index].setAttribute(
      "style",
      " background-color: gray;    margin-right: 1.5rem; margin-top: 1rem;"
    );
    secondUl[index].setAttribute("class", "second-ul");
  }
}

let x = document.getElementsByClassName("firstli");
console.log(x);

const a = document.querySelectorAll("a");

a.forEach((element) => {
  element.setAttribute(
    "style",
    "font-style: italic; text-decoration: underline dotted 0.27rem red; color: brown;"
  );
});

const tr = document.querySelectorAll("tr");

const toka = document.getElementById("toka");

toka.setAttribute("style", "margin: 0 0 4rem 0");

const tables = document.querySelectorAll("table");

const table1 = tables[0];

table1.setAttribute("class", "table1");
table1.setAttribute("style", "width: 60%;");

// Hieman kesken
// const secondUl = document.querySelectorAll(".second-ul");
// secondUl.forEach((element) => {
//   element.setAttribute(
//     "style",
//     " background-color: gray;    margin-right: 1.5rem; margin-top: 1rem;"
//   );
// });

const trArray1 = table1.querySelectorAll("tr");

for (let index = 0; index < trArray1.length; index++) {
  if (index % 2 !== 0) {
    trArray1[index].setAttribute("style", "background-color: gray;");
  }
}

const td = document.querySelectorAll("td");
td.forEach((element) => {
  element.setAttribute("style", "padding: 1.0rem 1.2rem;");
});

const th = document.querySelectorAll("th");
th.forEach((element) => {
  element.setAttribute("style", "padding: 1.2rem 1.4rem;");
});

const table2 = tables[1];
table2.setAttribute("class", "table2");
table2.setAttribute("style", "width: 30%;");

const trArray2 = table2.querySelectorAll("tr");

for (let index = 0; index < trArray2.length; index++) {
  if (index % 2 === 0) {
    trArray2[index].setAttribute("style", "background-color:gray;");
  }
}

var links = document.links;
for (let index = 0; index < links.length; index++) {
  var href = links[index].href;

  if (href.includes(".pdf")) {
    let pdfIcon = document.createElement("i");
    pdfIcon.setAttribute("class", "fa-solid fa-file-pdf");
    pdfIcon.setAttribute("style", "padding-inline: 0.5rem 0; color: red;");
    links[index].append(pdfIcon);
  } else if (href.includes("mailto:")) {
    let envelope = document.createElement("i");
    let arrow = document.createElement("i");
    arrow.setAttribute("class", "fa-solid fa-arrow-up-right-from-square");
    envelope.setAttribute("class", "fa-solid fa-envelope");
    envelope.setAttribute("style", "padding-inline: 0 0.5rem; color: orange;");
    arrow.setAttribute("style", "padding-inline: 0 0.5rem; color: green;");
    links[index].prepend(arrow);
    links[index].prepend(envelope);
  } else if (href.includes("https://www.bucking-palace.co.uk")) {
    let arrow = document.createElement("i");
    arrow.setAttribute("class", "fa-solid fa-arrow-up-right-from-square");
    arrow.setAttribute("style", "padding-inline: 0 0.5rem; color: green;");
    links[index].prepend(arrow);
  }
}
