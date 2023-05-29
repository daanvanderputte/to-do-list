const ulOne = document.querySelector(".ul-one");

const addToList = (item) => {
    item.preventDefault();
    let userData = document.querySelector("#user-data").value;
    if (!userData == "") {
        let newLi = document.createElement("li");
        let text = document.createTextNode(userData);
        newLi.appendChild(text);
        ulOne.appendChild(newLi);
    }
}

document.querySelector("form").addEventListener("submit", addToList);