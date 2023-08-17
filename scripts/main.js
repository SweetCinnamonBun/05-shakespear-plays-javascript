// let myStyle = document.createElement("style");

// myStyle.innerHTML = `

// section > ul {
//     display: flex;
//   }

//   section > ul > li {
//     list-style: none;
//   }

//   section > ul > li > ul {
//     background-color: gray;
//     margin-right: 1.5rem;
//     margin-top: 1rem;
//   }

//   section > ul > li > ul > li > a {
//     font-style: italic;
//     text-decoration: underline dotted 0.27rem red;
//     color: brown;
//   }

//   tr:nth-child(even) {
//     background-color: gray;
//   }

//   td,
//   th {
//     padding: 1.2rem 1.5rem;
//   }
// `;

// document.head.appendChild(myStyle);

const eka = document.getElementById("eka");
const uls = eka.querySelector("ul");
const firstUl = uls;
firstUl.setAttribute("style", "display:flex;");

const firstLi = firstUl.children;

for (let index = 0; index < firstLi.length; index++) {
  firstLi[index].setAttribute("class", "firstli");
  firstLi[index].setAttribute("style", "list-style: none;");
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

const tables = document.querySelectorAll("table");

const table1 = tables[0];

table1.setAttribute("class", "table1");

const trArray1 = table1.querySelectorAll("tr");

for (let index = 0; index < trArray1.length; index++) {
  if (index % 2 !== 0) {
    trArray1[index].setAttribute("style", "background-color: gray;");
  }
}

const td = document.querySelectorAll("td");
td.forEach((element) => {
  element.setAttribute("style", "padding: 1.2rem 1.5rem;");
});

const th = document.querySelectorAll("th");
th.forEach((element) => {
  element.setAttribute("style", "padding: 1.2rem 1.5rem;");
});

const table2 = tables[1];
table2.setAttribute("class", "table2");

const trArray2 = table2.querySelectorAll("tr");

for (let index = 0; index < trArray2.length; index++) {
  if (index % 2 === 0) {
    trArray2[index].setAttribute("style", "background-color:gray;");
  }
}
