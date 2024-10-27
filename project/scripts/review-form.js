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

document.addEventListener("DOMContentLoaded", () => {
    const timesPostedContainer = document.querySelector(".times-posted-container");
    const timesPosted = document.querySelector(".times-posted");
    
    // Retrieve counter from local storage or begin from 0
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;

    // If it's the first time, hidde the message.
    if (reviewCount === 0) {
        timesPostedContainer.style.display = "none";
    } else {
        // Show the number of reviews send
        timesPosted.textContent = reviewCount;
    }

    // Add the event to the form so the count increases
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the page to reload
        
        // Increase counter and update localStorage
        reviewCount += 1;
        localStorage.setItem("reviewCount", reviewCount);

        // update the display
        timesPosted.textContent = reviewCount;
        

        alert("Review sent successfully!"); // Confirmation message
    });
});

//Footer
// Select the DOM elements for output
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// store the current date in a variable
const today = new Date();

// writing the date
currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;