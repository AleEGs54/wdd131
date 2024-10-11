//Hambutton
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const headerOne = document.querySelector('h1');

hamButton.addEventListener('click', function () {
    hamButton.classList.toggle('open'); //This is to switch from the hmburguer button to the X icon
    navigation.classList.toggle('open'); //This is to display (as block) the menu options
    headerOne.classList.toggle('open');

})


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Hermosillo Sonora Mexico",
        location: "Hermosillo city, Mexico",
        dedicated: "2000, February, 27",
        area: 66736,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hermosillo-sonora-mexico/1200x1200/hermosillo-mexico-temple-lds-171162-wallpaper.jpg"
    },
    {
        templeName: "Kona Hawaii",
        location: "Kailua Kona, Hawaii",
        dedicated: "2000, January, 24",
        area: 12325,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kona-hawaii/1280x800/kona-hawaii-temple-lds-912837-wallpaper.jpg"
    },
    {
        templeName: "Columbus Ohio",
        location: "Colombus, Ohio, United States",
        dedicated: "1999, September, 5",
        area: 11745,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbus-ohio/1280x800/columbus-temple-lds-406110-wallpaper.jpg"
    }
];

// Calling the temple cards function
createTempleCard(temples);

//if user click at home button, it will display all the temples
const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => {
    createTempleCard(temples);
});

// if user click at "Old" button, it will display the filtered results
const oldButton = document.querySelector('#old');
oldButton.addEventListener('click', () => {
    let oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(', ')[0]) < 1900);
    createTempleCard(oldTemples);
});

// if user click at "New" button, it will display the filtered results
const newButton = document.querySelector('#new');
newButton.addEventListener('click', () => {
    let newTemples = temples.filter(temple => parseInt(temple.dedicated.split(', ')[0]) > 2000);
    createTempleCard(newTemples);
});

//If user clicks on large button, it will display the filtered results
const largeButton = document.querySelector('#large');
largeButton.addEventListener('click', () => {
    let largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples);
});

//If user clicks on small button, it will display the filtered results
const smallButton = document.querySelector('#small');
smallButton.addEventListener('click', () => {
    let smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(smallTemples);
});


function createTempleCard(filteredTemples) {
    // first it clears the gallery
    document.querySelector('.gallery').innerHTML = '';

    // then it iterates through the temples and creates the html elements
    filteredTemples.forEach(temple => {
        let card = document.createElement('section');
        let templeName = document.createElement('h3');
        let location = document.createElement('p');
        let dedicated = document.createElement('p');
        let area = document.createElement('p');
        let image = document.createElement('img');

        //Next it adds the data to the html elements
        templeName.textContent = temple.templeName;
        card.setAttribute('class', "card")
        location.innerHTML = `<span class="label">Location</span>: ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated</span>: ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size</span>: ${temple.area}`;
        image.setAttribute('src', temple.imageUrl);
        image.setAttribute('alt', `${temple.templeName} Temple`);
        image.setAttribute('loading', "lazy");
        image.setAttribute('width', "278");
        image.setAttribute('height', "174");

        //Finally it appends the html elements
        card.appendChild(templeName)
        card.appendChild(location)
        card.appendChild(dedicated)
        card.appendChild(area)
        card.appendChild(image)

        //And the card is appended to the gallery
        document.querySelector('.gallery').append(card);
    });
}


//Footer
// Select the DOM elements for output
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// store the current date in a variable
const today = new Date();

// writing the date
currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;