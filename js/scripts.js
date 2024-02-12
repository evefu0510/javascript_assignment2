// Constants for query selector
var page = document.querySelector('html'); // Selects the html element
var image = document.querySelector('#images'); // Selects the element with id 'images'
var customNumber =  document.querySelector("#customNumber"); // Selects the element with id 'customNumber'
var custColorButton = document.querySelector(".custColor"); // Selects the element with class 'custColor'
var randColorButton = document.querySelector(".randColor"); // Selects the element with class 'randColor'
var imageSelect = document.querySelector("#imageSelect"); // Selects the element with id 'imageSelect'
var showrandnum = document.querySelector(".showrandnum"); // Selects the element with class 'showrandnum'

// Function to change background color based on user input
function changeCustomColor() {
    var userinput = Number(customNumber.value); // Get the value of customNumber input field and convert to a number
    console.log(userinput);
    // Using if statement to determine background color based on user input
    if (userinput < 0 || userinput > 100) {
        page.style.backgroundColor = "red";
    } else if (userinput >= 0 && userinput < 20) {
        page.style.backgroundColor = "green";
    } else if (userinput >= 20 && userinput < 40) {
        page.style.backgroundColor = "blue";
    } else if (userinput >= 40 && userinput < 60) {
        page.style.backgroundColor = "orange";
    } else if (userinput >= 60 && userinput < 80) {
        page.style.backgroundColor = "purple";
    } else if (userinput >= 80 && userinput <= 100) {
        page.style.backgroundColor = "yellow";
    }
}

// Function to change background color based on random number
function changeRandomColor() {
    var randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    console.log(randomNumber);
    showrandnum.textContent = randomNumber; // Display the random number in the .showrandnum element
    // Using switch statement to determine background color based on random number
    switch (true) {
        case (randomNumber < 0 || randomNumber > 100):
            page.style.backgroundColor = "red";
            break;
        case (randomNumber >= 0 && randomNumber < 20):
            page.style.backgroundColor = "green";
            break;
        case (randomNumber >= 20 && randomNumber < 40):
            page.style.backgroundColor = "blue";
            break;
        case (randomNumber >= 40 && randomNumber < 60):
            page.style.backgroundColor = "orange";
            break;
        case (randomNumber >= 60 && randomNumber < 80):
            page.style.backgroundColor = "purple";
            break;
        case (randomNumber >= 80 && randomNumber <= 100):
            page.style.backgroundColor = "yellow";
            break;
    }
}

// Function to generate options for select list
function addList() {
    var imageArray = ["./img/img1.png", "./img/img2.png", "./img/img3.png", "./img/img4.png", "./img/img5.png"];
    for (var i = 0; i < imageArray.length; i++) {
        var option = document.createElement("option"); // Create a new option element
        option.value = imageArray[i]; // Set the value attribute of the option
        option.text = "image" + (i + 1); // Set the text content of the option
        imageSelect.appendChild(option); // Append the option to the imageSelect element
    }
    // Tip: You might have to check the length condition so that the list does not keep growing when clicked
    // Tip: Use createElement and appendChild inside every for loop to add elements to select list from array
}

// Function to change image
function changeImage() {
    var selectedImg = imageSelect.value; // Get the value of the selected option
    console.log(selectedImg);
    image.setAttribute("src", selectedImg); // Set the src attribute of the image to the selected value
}

// Event listeners for click event of buttons and select
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);
// Event listener for change event of select
imageSelect.addEventListener("change", changeImage);

addList(); // Call the addList function to generate options for the select list
