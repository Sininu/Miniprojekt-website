
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", functions() {

var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json");
ourRequest.onload = function() {
    console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    console.log(ourData[0])
    };
    ourRequest.send();
    pageCounter ++;
    if (pageCounter > 3) {
        btn.classList.hide
    }
};
function renderHTML(data) {
    var htmlString = "this is a test";
    for (i = 0; i < data.lenght; i++) {
        htmlString += "<p>" + data[i].name + "is a " + ".</p>";
    }

    animalContainer.insertAdjacentHTML("Beforeend", htmlString);

}

