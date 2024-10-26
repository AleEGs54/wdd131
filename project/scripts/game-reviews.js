//List of reviews

//Filter


//Menu button
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
const header = document.querySelector("header");

hamButton.addEventListener("click", function () {
  //To switch from ☰ to X
  hamButton.classList.toggle("open");
  //To open or close the nav
  navigation.classList.toggle("open");
  //To give more space to the nav, since it's a part of the header's flex
  header.classList.toggle("open");

})



//Footer
// Select the DOM elements for output
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// store the current date in a variable
const today = new Date();

// writing the date
currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;