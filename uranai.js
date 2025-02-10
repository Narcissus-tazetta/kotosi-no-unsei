"use strict";
const username = document.getElementById("name");
const birthday = document.getElementById("date");
const submitButton = document.getElementById("submit");
const resultArea = document.getElementById("result-area");

submitButton.addEventListener("click", () => {
    const name = username.value;
    if (name.length === 0) {
        return;
    };
    const date = birthday.value;
    if (date.length === 0) {
        return;
    };

    resultArea.innerText = "";

    const headerDivision = document.createElement("div");
    headerDivision.setAttribute("class", "card-header text-bg-light");
    headerDivision.innerText = "結果";

    const bodyDivision = document.createElement("div");
    bodyDivision.setAttribute("class", "card-body");

    const paragraph = document.createElement("p");
    paragraph.setAttribute("class", "card-text");
    const result = uranau(name, date);
    paragraph.innerText = result;
    bodyDivision.appendChild(paragraph);

    resultArea.setAttribute("class", "card");

    resultArea.appendChild(headerDivision);
    resultArea.appendChild(bodyDivision);
});

username.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        submitButton.dispatchEvent(new Event("click"));
    }
});

const result = ["大吉", "小吉", "中吉", "吉","大吉", "小吉", "中吉", "吉"];

function uranau(username) {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();
    let Code = 0;
    for (let i = 0; i < username.length; i++) {
    Code = Code + username.charCodeAt(i);
    }
    let kekka =  year * month * Code % day 
    let u = result[kekka];
    const Result = username + 'の今年の運勢は「' + u + `」です!!!!!`
    return Result;
}