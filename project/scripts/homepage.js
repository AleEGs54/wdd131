//Main page reviews are examples of waht the use can find in this page: diversity of opinions

const reviews = [
    {
      user: "GamerX92",
      game: "The Legend of Zelda: Breath of the Wild",
      title: "A Masterpiece of Open-World Freedom",
      review: "This game redefines what an open-world game should be. The freedom it gives to explore, solve puzzles, and experiment is simply incredible. The combat and physics mechanics make every encounter unique. Despite some repetitive enemies, it’s still a masterpiece.",
      rating: 5,
      date: "October 15, 2024",
      image: "images/zelda.webp"
    },
    {
      user: "PixelKnight89",
      game: "Red Dead Redemption 2",
      title: "Immersive but Sometimes Slow",
      review: "A masterpiece in terms of narrative and detail. The landscapes, characters, and story fully immerse you in the Old West. However, the slow pace in some missions and clunky controls can be frustrating, which affects the overall experience.",
      rating: 4,
      date: "September 10, 2024",
      image: "images/rdr2.webp"
    },
    {
      user: "EpicGamer123",
      game: "Fortnite",
      title: "Evolving but Heavily Reliant on Microtransactions",
      review: "The constant evolution of this game is impressive. New weapons, events, and game modes keep it fresh. However, the reliance on microtransactions and the high level of competition can make it frustrating if you’re not willing to spend money or invest a lot of time.",
      rating: 3,
      date: "August 2, 2024",
      image:"https://i.pinimg.com/1200x/fc/f4/17/fcf41753db9f399addec1fcfaed2b968.jpg"
    },
    {
      user: "ArcadeLover77",
      game: "Hades",
      title: "A Roguelike with Unmatched Depth",
      review: "This roguelike has one of the best narratives integrated into gameplay that I’ve ever seen. Each death makes you stronger, and the interactions with gods and characters are captivating. The art style and music are sublime. It’s challenging, but each time you lose, you learn something new.",
      rating: 5,
      date: "June 28, 2024",
      image:"https://images2.alphacoders.com/115/thumb-1920-1151800.png"
    },
    {
      user: "SilentHunter94",
      game: "The Last of Us Part II",
      title: "Emotional but Flawed",
      review: "The story is impactful and polarizing. While the narrative is strong, the amount of brutal scenes can feel excessive. Sometimes, the characters make illogical decisions, which affects immersion. Overall, it has highs and lows.",
      rating: 3,
      date: "September 9, 2024",
      image:"https://images7.alphacoders.com/124/thumb-1920-1244875.jpg"
    },
    {
      user: "CyberNinja5000",
      game: "Cyberpunk 2077",
      title: "Still Buggy Despite Patches",
      review: "Despite the patches, it’s still a game plagued by bugs. The city is vibrant, and the main story is interesting, but the amount of repetitive side quests and constant technical issues ruin the experience. It doesn’t fully live up to the initial expectations.",
      rating: 2,
      date: "October 20, 2024",
      image:"https://images2.alphacoders.com/131/thumb-1920-1317789.jpeg"
    },
    {
      user: "RetroWave2012",
      game: "Celeste",
      title: "A Beautiful and Challenging Platformer",
      review: "A difficult but fair platformer with a surprisingly deep narrative. The soundtrack is beautiful, and the gameplay is flawless. Every level feels precisely designed, and though it can be frustrating, it never feels unfair. A true achievement in the platforming genre.",
      rating: 5,
      date: "July 5, 2024",
      image:"https://images7.alphacoders.com/901/thumb-1920-901149.png"
    },
    {
      user: "VRWarrior101",
      game: "Half-Life: Alyx",
      title: "A Groundbreaking VR Experience",
      review: "The best virtual reality game so far. The immersion is total, and the use of VR in solving puzzles and combat is brilliant. However, the story is shorter than expected, and the content may not justify the full price of the game.",
      rating: 4,
      date: "October 12, 2024",
      image:"https://preview.redd.it/0nkgyikp35041.png?width=900&format=png&auto=webp&s=7325d8b34de2e8f13d2c7fbc144d5edcd8e970dd"
    },
    {
      user: "SpaceExplorer99",
      game: "No Man's Sky",
      title: "Redemption but Still Repetitive",
      review: "Although it has improved over time, it still has many problems. Exploring planets quickly becomes repetitive, and the lack of a strong narrative makes it lose interest. It’s fun at times, but not enough to keep you hooked for long.",
      rating: 2,
      date: "September 30, 2024",
      image:"https://images.alphacoders.com/725/thumb-1920-725605.png"
    }
  ];
  
  // loop to create cards for each opinion.
  reviews.forEach(review => {
      
    //Function to nest stars together according to the number of the rating
      function setRatingStars(rating){
        let stars = "";
          for (let i = 0; i < rating; i++)
            { 
                stars += "⭐️";
            }
            return stars;

      }

    //saving .posts to a variable
    const posts = document.querySelector(".posts");

    // creating the elements
    let card = document.createElement("section")
    let shade = document.createElement("div")
    let userAndGame = document.createElement("p");
    let title = document.createElement("h3");
    let reviewContent = document.createElement("p");
    let rating = document.createElement("p");
    let date = document.createElement("p");
    // let image = document.createElement("img")

    
    // assigning data to the elements
    userAndGame.innerHTML = `<span class="username">${review.user}</span> | <span class="game-name">${review.game}</span>`;
    title.textContent = review.title;
    reviewContent.textContent = review.review;
    rating.textContent = setRatingStars(review.rating);
    date.textContent = review.date;

    // assigning the attributes

    card.setAttribute("class", "card");
    shade.setAttribute("class", "shade")
    title.setAttribute("class","title");
    reviewContent.setAttribute("class","review");
    rating.setAttribute("class","rating");
    date.setAttribute("class","date");

    //Appending items inside the shade to highlight them
    shade.appendChild(userAndGame);

    //appending the elements to its card
    card.appendChild(shade);
    card.appendChild(title);
    card.appendChild(rating);
    card.appendChild(reviewContent);
    card.appendChild(date);


    //Here goes the image of each review in this main page which is going to be in the background
    card.style.backgroundImage =`linear-gradient(to bottom,transparent, black, black), url(${review.image})`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";

    //Nestign it all to .posts
    posts.appendChild(card);
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