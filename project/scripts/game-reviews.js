//List of reviews
const games = [
    "The Legend of Zelda: Breath of the Wild",
    "Red Dead Redemption 2",
    "Fortnite",
    "Hades",
    "The Last of Us Part II",
    "Cyberpunk 2077",
    "Celeste",
    "Half-Life: Alyx",
    "No Man's Sky",
];

const reviews = {
    "The Legend of Zelda: Breath of the Wild": [
        {
            user: "IGN",
            title: "Groundbreaking Open-World Adventure",
            review: "This game is a remarkable evolution for Zelda, with unprecedented freedom and stunning world design.",
            rating: 5,
            date: "March 3, 2017"
        },
        {
            user: "GameSpot",
            title: "Incredible Exploration with Minor Flaws",
            review: "A beautiful world with unique puzzle-solving, but slight frame rate issues can interrupt the experience.",
            rating: 4,
            date: "March 4, 2017"
        },
        {
            user: "Polygon",
            title: "Revolutionary for Zelda",
            review: "Physics and freedom redefine Zelda, bringing a fresh sense of discovery and adventure.",
            rating: 5,
            date: "March 5, 2017"
        },
        {
            user: "GamesRadar",
            title: "A Unique Action RPG Experience",
            review: "Nintendo's twist on action RPGs blends survival with fun, adding depth to exploration.",
            rating: 5,
            date: "March 6, 2017"
        },
        {
            user: "PlayerX",
            title: "Endlessly Immersive",
            review: "Surprises await in every corner of Hyrule, rewarding player curiosity with endless adventure.",
            rating: 5,
            date: "March 7, 2017"
        },
        {
            user: "Push Square",
            title: "A Story-Rich World",
            review: "The lore and environment encourage exploration, rewarding curious players.",
            rating: 5,
            date: "March 8, 2017"
        },
        {
            user: "Eurogamer",
            title: "A True Open-World Zelda",
            review: "Blending survival with adventure, though some dungeons feel a bit short.",
            rating: 4,
            date: "March 9, 2017"
        },
        {
            user: "Nintendo Life",
            title: "An Epic Experience",
            review: "High-point for Nintendo; survival and cooking elements add richness to gameplay.",
            rating: 5,
            date: "March 10, 2017"
        },
        {
            user: "Kotaku",
            title: "Genre-Defining",
            review: "Freedom with challenge, though mixed reactions on weapon durability.",
            rating: 4,
            date: "March 11, 2017"
        },
        {
            user: "LinkFan",
            title: "A World of Mystery",
            review: "The intricate world and Korok seeds encourage rewarding exploration.",
            rating: 5,
            date: "March 12, 2017"
        },
        {
            user: "Trusted Reviews",
            title: "Endlessly Replayable",
            review: "With fresh elements every playthrough, the game feels new every time.",
            rating: 5,
            date: "March 13, 2017"
        },
        {
            user: "HyruleLover",
            title: "Realistic Exploration",
            review: "Weather and stamina impact gameplay, adding a layer of realism to the adventure.",
            rating: 4,
            date: "March 14, 2017"
        }
    ],
    "Red Dead Redemption 2": [
        {
            user: "IGN",
            title: "A Truly Exceptional Experience",
            review: "Red Dead Redemption 2 is a masterpiece in storytelling, character development, and immersive gameplay.",
            rating: 5,
            date: "October 26, 2018"
        },
        {
            user: "GameSpot",
            title: "A Flawless Open World",
            review: "The world feels alive, but the pace can be slow for some players.",
            rating: 4,
            date: "October 27, 2018"
        },
        {
            user: "Polygon",
            title: "Beautiful and Exhausting",
            review: "Stunning graphics and storytelling, yet it can be overwhelming at times.",
            rating: 4,
            date: "October 28, 2018"
        },
        {
            user: "PC Gamer",
            title: "A Mixed Bag",
            review: "Incredible detail and depth, but can feel bogged down by its mechanics.",
            rating: 4,
            date: "October 29, 2018"
        },
        {
            user: "Game Informer",
            title: "Epic Storytelling",
            review: "An epic story with rich characters, though pacing may not suit everyone.",
            rating: 4,
            date: "October 30, 2018"
        },
        {
            user: "Kotaku",
            title: "Narrative Overload",
            review: "While the narrative is strong, some players may feel it's too drawn out.",
            rating: 3,
            date: "October 31, 2018"
        },
        {
            user: "GamesRadar",
            title: "A Western Masterpiece",
            review: "A game that encapsulates the essence of the Wild West but may frustrate action-oriented players.",
            rating: 4,
            date: "November 1, 2018"
        },
        {
            user: "Destructoid",
            title: "A Slow Burn",
            review: "While immersive, the slow pace can test players' patience.",
            rating: 4,
            date: "November 2, 2018"
        },
        {
            user: "Eurogamer",
            title: "Visually Stunning",
            review: "A marvel in visual storytelling, but can feel tedious at times.",
            rating: 4,
            date: "November 3, 2018"
        }
    ],
    "Fortnite": [
        {
            user: "IGN",
            title: "A Cultural Phenomenon",
            review: "Fortnite has taken the gaming world by storm with its innovative battle royale format and engaging events.",
            rating: 4,
            date: "July 26, 2017"
        },
        {
            user: "GameSpot",
            title: "Fun and Addictive",
            review: "A fun game that continues to evolve, though it can feel repetitive.",
            rating: 4,
            date: "July 27, 2017"
        },
        {
            user: "Polygon",
            title: "Engaging Yet Frustrating",
            review: "Fun building mechanics but plagued by server issues and bugs.",
            rating: 3,
            date: "July 28, 2017"
        },
        {
            user: "Kotaku",
            title: "A Mix of Fun and Chaos",
            review: "Engaging gameplay but can often lead to chaotic moments that may frustrate players.",
            rating: 3,
            date: "July 29, 2017"
        },
        {
            user: "PC Gamer",
            title: "Brilliantly Simple",
            review: "A simple concept that is executed brilliantly, though the learning curve can be steep for newcomers.",
            rating: 4,
            date: "July 30, 2017"
        },
        {
            user: "Destructoid",
            title: "A Vibrant Community",
            review: "The vibrant community is a highlight, but balancing can sometimes be an issue.",
            rating: 3,
            date: "July 31, 2017"
        },
        {
            user: "Game Informer",
            title: "Unforgettable Moments",
            review: "Create unforgettable moments, but microtransactions can be off-putting.",
            rating: 4,
            date: "August 1, 2017"
        },
        {
            user: "Eurogamer",
            title: "A Game of Survival",
            review: "Great mechanics for survival but lacks variety in long-term gameplay.",
            rating: 3,
            date: "August 2, 2017"
        },

        {
            user: "GamesRadar",
            title: "A Game That Keeps Evolving",
            review: "Constant updates keep the game fresh, but the constant changes can be overwhelming.",
            rating: 3,
            date: "August 3, 2017"
        }
    ],
    "Hades": [
        {
            user: "IGN",
            title: "A Roguelike Masterpiece",
            review: "Hades blends brilliant storytelling with addictive gameplay, making it a must-play.",
            rating: 5,
            date: "September 17, 2020"
        },
        {
            user: "GameSpot",
            title: "Stunning Visuals and Gameplay",
            review: "The art and animation are top-notch, but the difficulty may not appeal to everyone.",
            rating: 4,
            date: "September 18, 2020"
        },
        {
            user: "Polygon",
            title: "Innovative Storytelling",
            review: "The narrative is engaging, but some may find the roguelike mechanics repetitive.",
            rating: 4,
            date: "September 19, 2020"
        },
        {
            user: "PC Gamer",
            title: "A Beautifully Crafted Game",
            review: "It's visually stunning, though the grind can be a turn-off for some players.",
            rating: 4,
            date: "September 20, 2020"
        },
        {
            user: "Kotaku",
            title: "Fun Yet Challenging",
            review: "An enjoyable experience that can become frustrating as the game progresses.",
            rating: 4,
            date: "September 21, 2020"
        },
        {
            user: "Destructoid",
            title: "A Unique Take on Greek Mythology",
            review: "Offers a fresh take but may not be for those who dislike roguelikes.",
            rating: 3,
            date: "September 22, 2020"
        },
        {
            user: "GamesRadar",
            title: "A Thrilling Adventure",
            review: "While exciting, the permadeath mechanic can frustrate some players.",
            rating: 4,
            date: "September 23, 2020"
        },
        {
            user: "Eurogamer",
            title: "Highly Replayable",
            review: "Each run is different, but the core gameplay loop can become predictable.",
            rating: 3,
            date: "September 24, 2020"
        }
    ],
    "The Last of Us Part II": [
        {
            user: "IGN",
            title: "A Bold and Unforgettable Journey",
            review: "An emotionally charged narrative that pushes boundaries, though its pacing can be polarizing.",
            rating: 5,
            date: "June 19, 2020"
        },
        {
            user: "GameSpot",
            title: "A Game of Contrasts",
            review: "Visually stunning with deep themes, but some fans were divided on its storytelling choices.",
            rating: 4,
            date: "June 20, 2020"
        },
        {
            user: "Polygon",
            title: "Intense and Beautiful",
            review: "A masterpiece in game design, but its dark themes might not resonate with all players.",
            rating: 4,
            date: "June 21, 2020"
        },
        {
            user: "Kotaku",
            title: "Emotionally Heavy",
            review: "While powerful, the game can be exhausting and grim, leaving some players drained.",
            rating: 3,
            date: "June 22, 2020"
        },
        {
            user: "PC Gamer",
            title: "A Flawed Masterpiece",
            review: "Innovative gameplay meets beautiful visuals, but it can feel overly long.",
            rating: 4,
            date: "June 23, 2020"
        },
        {
            user: "Destructoid",
            title: "Divisive Yet Impactful",
            review: "A bold narrative choice that may alienate some fans of the original.",
            rating: 3,
            date: "June 24, 2020"
        },
        {
            user: "GamesRadar",
            title: "A Stunning Achievement",
            review: "While breathtaking, its approach to violence can be off-putting for some.",
            rating: 4,
            date: "June 25, 2020"
        },
        {
            user: "Eurogamer",
            title: "A Game to Remember",
            review: "Brilliantly crafted, though its themes can be hard to digest.",
            rating: 4,
            date: "June 26, 2020"
        }
    ],
    "Cyberpunk 2077": [
        {
            user: "IGN",
            title: "Ambitious Yet Flawed",
            review: "Cyberpunk 2077 boasts a rich world and deep narrative but suffers from significant bugs.",
            rating: 3,
            date: "December 10, 2020"
        },
        {
            user: "GameSpot",
            title: "Visually Stunning",
            review: "A beautiful world with engaging storylines, but performance issues mar the experience.",
            rating: 3,
            date: "December 11, 2020"
        },
        {
            user: "Polygon",
            title: "An Unfulfilled Promise",
            review: "Has great potential, but numerous bugs and gameplay issues undermine its brilliance.",
            rating: 3,
            date: "December 12, 2020"
        },
        {
            user: "PC Gamer",
            title: "A Messy Launch",
            review: "While the narrative is captivating, the launch was riddled with issues.",
            rating: 5,
            date: "December 13, 2020"
        },
        {
            user: "Kotaku",
            title: "A Complicated Experience",
            review: "An ambitious project that falls short due to technical flaws.",
            rating: 5,
            date: "December 14, 2020"
        },
        {
            user: "Destructoid",
            title: "A Dystopian Dream",
            review: "Great world-building, but the bugs can hinder immersion.",
            rating: 3,
            date: "December 15, 2020"
        },
        {
            user: "GamesRadar",
            title: "Striking Visuals, Struggling Performance",
            review: "While visually stunning, performance issues often disrupt gameplay.",
            rating: 5,
            date: "December 16, 2020"
        },
        {
            user: "Eurogamer",
            title: "A Disappointing Launch",
            review: "Had high expectations, but technical flaws prevent it from being the game it should have been.",
            rating: 5,
            date: "December 17, 2020"
        }
    ],
    "Celeste": [
        {
            user: "IGN",
            title: "A Platforming Masterpiece",
            review: "Celeste combines tight controls with a touching story, making for an unforgettable experience.",
            rating: 5,
            date: "January 25, 2018"
        },
        {
            user: "GameSpot",
            title: "Challenging Yet Rewarding",
            review: "The game's difficulty may deter some, but the satisfaction of overcoming challenges is immense.",
            rating: 4,
            date: "January 26, 2018"
        },
        {
            user: "Polygon",
            title: "A Stunning Indie Title",
            review: "Every level is beautifully crafted, though the steep difficulty curve can be off-putting.",
            rating: 4,
            date: "January 27, 2018"
        },
        {
            user: "Destructoid",
            title: "An Inspiring Challenge",
            review: "The emotional depth and gameplay are superb, though it might be too hard for some.",
            rating: 4,
            date: "January 28, 2018"
        },
        {
            user: "GamesRadar",
            title: "A Triumph of Indie Game Design",
            review: "Engaging gameplay coupled with a touching story, making it a must-play.",
            rating: 5,
            date: "January 29, 2018"
        },
        {
            user: "Eurogamer",
            title: "A Masterclass in Platforming",
            review: "Each level is meticulously designed, though the difficulty might alienate some.",
            rating: 4,
            date: "January 30, 2018"
        },
        {
            user: "Kotaku",
            title: "A Climb Worth Taking",
            review: "Its challenging nature rewards perseverance, even if it’s not for everyone.",
            rating: 4,
            date: "January 31, 2018"
        },
        {
            user: "Game Informer",
            title: "An Emotional Journey",
            review: "Celeste tackles mental health with grace, though its challenge may turn off casual gamers.",
            rating: 4,
            date: "February 1, 2018"
        },
        {
            user: "PC Gamer",
            title: "A Platforming Gem",
            review: "With its pixel-perfect platforming, it’s a standout title despite its high difficulty.",
            rating: 4,
            date: "February 2, 2018"
        }
    ],
    "Half-Life: Alyx": [
        {
            user: "IGN",
            title: "A Landmark in VR Gaming",
            review: "Half-Life: Alyx sets a new standard for virtual reality with immersive gameplay and stunning visuals.",
            rating: 5,
            date: "March 23, 2020"
        },
        {
            user: "GameSpot",
            title: "An Essential VR Experience",
            review: "While the combat can feel limited at times, the overall experience is unforgettable.",
            rating: 4,
            date: "March 24, 2020"
        },
        {
            user: "Polygon",
            title: "A Return to Form",
            review: "The story is compelling, but some puzzles may frustrate players looking for a more linear experience.",
            rating: 4,
            date: "March 25, 2020"
        },
        {
            user: "PC Gamer",
            title: "A New Era for Half-Life",
            review: "Fantastic world-building and design, though VR mechanics can be a barrier for newcomers.",
            rating: 4,
            date: "March 26, 2020"
        },
        {
            user: "Destructoid",
            title: "An Unforgettable VR Adventure",
            review: "The game is brilliant, but the requirement for VR may limit its audience.",
            rating: 4,
            date: "March 27, 2020"
        },
        {
            user: "Game Informer",
            title: "An Instant Classic",
            review: "Half-Life: Alyx revitalizes the series, though some sections can feel drawn out.",
            rating: 4,
            date: "March 28, 2020"
        },
        {
            user: "Eurogamer",
            title: "A Showcase for VR",
            review: "Sets a high bar for VR titles, yet some may find the pacing uneven.",
            rating: 4,
            date: "March 29, 2020"
        },
        {
            user: "Kotaku",
            title: "A Technical Marvel",
            review: "The game is visually stunning, but the VR aspect might not appeal to everyone.",
            rating: 4,
            date: "March 30, 2020"
        },
        {
            user: "PC Gamer",
            title: "The Future of Gaming?",
            review: "Impressive technology and storytelling, though VR fatigue can set in.",
            rating: 4,
            date: "March 31, 2020"
        }
    ],
    "No Man's Sky": [
        {
            user: "IGN",
            title: "A Universe of Possibilities",
            review: "After numerous updates, No Man's Sky has transformed into a vast and enjoyable exploration experience.",
            rating: 4,
            date: "August 12, 2020"
        },
        {
            user: "GameSpot",
            title: "An Ambitious Journey",
            review: "Though it had a rocky start, the game now offers a fulfilling exploration experience.",
            rating: 4,
            date: "August 13, 2020"
        },
        {
            user: "Polygon",
            title: "Finally Living Up to Its Promise",
            review: "The game has improved significantly, but still lacks some depth in gameplay mechanics.",
            rating: 3,
            date: "August 14, 2020"
        },
        {
            user: "PC Gamer",
            title: "A Beautiful but Empty Universe",
            review: "Visually stunning, but exploration can feel repetitive after a while.",
            rating: 3,
            date: "August 15, 2020"
        },
        {
            user: "Destructoid",
            title: "An Ongoing Journey",
            review: "While improved, the core gameplay still leaves something to be desired.",
            rating: 3,
            date: "August 16, 2020"
        },
        {
            user: "Game Informer",
            title: "A Beautiful World with Room to Grow",
            review: "The graphics are breathtaking, yet it can feel empty during exploration.",
            rating: 3,
            date: "August 17, 2020"
        },
        {
            user: "Eurogamer",
            title: "The Game that Keeps Improving",
            review: "Although the game is fun now, it took a long time to get here.",
            rating: 3,
            date: "August 18, 2020"
        },
        {
            user: "Kotaku",
            title: "An Ever-Changing Experience",
            review: "The updates have added depth, but it can still be a grind.",
            rating: 3,
            date: "August 19, 2020"
        },
        {
            user: "GamesRadar",
            title: "Exploration at Its Best",
            review: "While the universe feels vast, the lack of meaningful interactions can be a drawback.",
            rating: 3,
            date: "August 20, 2020"
        },
        {
            user: "Trusted Reviews",
            title: "A Journey Worth Taking",
            review: "The game has come a long way, yet still struggles with gameplay depth and variety.",
            rating: 3,
            date: "August 21, 2020"
        }
    ]
};



//Filter

//selecting the dropdown
function SelectDropdown() {
    const dropdown = document.querySelector("#game-selector");

    //Iterating over the list of games
    games.forEach(game => {
        //Creating the option
        let option = document.createElement("option");

        //Adding attributes to the option
        option.setAttribute("value", `${game}`);

        //Adding data to the option
        option.textContent = game;

        dropdown.appendChild(option);

    });
}

//Displaying the reviews according to the option chosen

//Function to nest stars together according to the number of the rating
function setRatingStars(rating) {
    let stars = "";
    for (let i = 0; i < rating; i++) {
        stars += "⭐️";
    }
    return stars;

}
function DisplayingReviews() {
    const selectElement = document.querySelector("#game-selector");
    //Add and event listener, so it activates when the user changes the value of the selectElement
    selectElement.addEventListener("change", function () {

        //storing the value of the item in the select
        //which is the name
        const value = selectElement.value;

        //Cleaning the display
        const posts = document.querySelector(".posts");
        posts.innerHTML = '';

        //More logic here... (What will you do with "value"?)
        Object.keys(reviews).forEach(gameTitle => {
            if (gameTitle === value) {
                
                reviews[gameTitle].forEach(review => {
    
    
    
                    //saving .posts to a variable
                    const posts = document.querySelector(".posts");
    
                    // creating the elements
                    let reviewInfo = document.createElement("div");
                    let card = document.createElement("section");
                    let shade = document.createElement("div");
                    let userAndGame = document.createElement("p");
                    let title = document.createElement("h3");
                    let reviewContent = document.createElement("p");
                    let rating = document.createElement("p");
                    let date = document.createElement("p");
                    // let imgContainer = document.createElement("div");
                    // let image = document.createElement("img")
    
    
                    // assigning data to the elements
                    userAndGame.innerHTML = `<span class="username">${review.user}</span>`;
                    title.textContent = review.title;
                    reviewContent.textContent = review.review;
                    rating.textContent = setRatingStars(review.rating);
                    date.textContent = review.date;
    
    
                    // assigning the attributes
                    reviewInfo.setAttribute("class", "review-info"); //This div will be the holder for the entire information
                    card.setAttribute("class", "card"); //THe card will be the background for the image
                    shade.setAttribute("class", "shade")
                    title.setAttribute("class", "title");
                    reviewContent.setAttribute("class", "review");
                    rating.setAttribute("class", "rating");
                    date.setAttribute("class", "date");
    
                    // //Acquires the url, the alt and lazyload
                    // image.setAttribute("src", `${review.image}`);
                    // image.setAttribute("alt", "videogame image");
                    // image.setAttribute("loading", "lazy")
                    // image.setAttribute("width", "100");
                    // image.setAttribute("height", "150");
                    // imgContainer.setAttribute("class", "bg-image");
    
                    //Appending items inside the shade to highlight them
                    shade.appendChild(userAndGame);
    
                    //appending the elements to its card
                    // imgContainer.appendChild(image);
                    // card.appendChild(imgContainer);
    
                    reviewInfo.appendChild(shade);
                    reviewInfo.appendChild(title);
                    reviewInfo.appendChild(rating);
                    reviewInfo.appendChild(reviewContent);
                    reviewInfo.appendChild(date);
    
                    card.appendChild(reviewInfo);
    
    
    
                    posts.appendChild(card);
    
    
                });
            }
        });

    })
}


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

//Running the functions
SelectDropdown();
DisplayingReviews();

//Footer
// Select the DOM elements for output
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// store the current date in a variable
const today = new Date();

// writing the date
currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;