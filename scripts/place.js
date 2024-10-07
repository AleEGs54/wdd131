//Footer
// Select the DOM elements for output
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// store the current date in a variable
const today = new Date();

// writing the date
currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

//Windchill calculation
const temperature = 10; 
const windSpeed = 6;
let windChill;

//Calculating the windChill 
const calculateWindChill = (T, V) => 13.12 + 0.6215 * T - 11.37 * Math.pow(V, 0.16) + 0.3965 * T * Math.pow(V, 0.16);

//If the variables doesn't match the requirements, the function won't be called.
if (temperature <= 10 && windSpeed > 4.8)
{
     windChill = calculateWindChill(temperature, windSpeed);
}
else 
{
     windChill = "N/A";
}

//Writing the result in the html
document.querySelector(".weather .label:nth-child(8)").nextElementSibling.textContent = `${parseFloat(windChill.toFixed(2))} °C`;
