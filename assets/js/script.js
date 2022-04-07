// get timestamp
var ts = new Date().getTime();
var privKey = "b864417049b272439dc6bb1fdaee4995343fc50b";
var pubKey = "e096fc0b2d2e3a94fbbc2ce9164e4bef" ;
var message = ts+privKey+pubKey;
var hashKey = CryptoJS.MD5(message);
var characterBaseUrl = "http://gateway.marvel.com/v1/public/characters?"

// global variables
// import { characterList } from "./characters";

// content elements
var charContainerEl = document.getElementById("characterCard"); // TODO
var charThumbnail = document.getElementById("characterThumbNail"); // TODO
var movieContainerEl = document.getElementById("moviesContainer"); // TODO

// form elements
var inputEl = document.getElementById("searchCharName");
var buttonEl = document.getElementById("submitBtn");

// event listeners
buttonEl.addEventListener("click", searchId);

// var requestCharacterUrl = []; 
// for (let i = 0; i < 16; i++) {
//     var offset = i*100;
//     var url = characterBaseUrl + "ts=" + ts + "&apikey=" + pubKey + "&hash=" + hashKey + "&limit=100" + "&offset=" + offset;
//     requestCharacterUrl.push(url);
// }

// async function getCharacters() {
//     var characterList = [];
//     for (let i = 0; i < requestCharacterUrl.length; i++)   {
//         console.log('fetching', requestCharacterUrl[i]);
//         try {
//             var request = await fetch(requestCharacterUrl[i]);
//             var response = await request.json();
//             // console.log(response);
//             for(let j = 0; j < response.data.results.length; j++) {
//                 var description = response.data.results[j].description;
//                 // console.log(description);
//                 if (description) {
//                     var characterName = response.data.results[j].name;
//                     var characterSearchString = characterName.replace(/[&#,+()$~%'":*?<>{}]/g, '');
//                     characterSearchString = characterSearchString.replace(/[-\/\\]/g, ' ');
//                     characterSearchString = characterSearchString.split(' ').slice(0, 2).join(' ');
//                     var characterId = response.data.results[j].id;
//                     var characterObj = {
//                         name: characterName,
//                         searchString: characterSearchString,
//                         id: characterId
//                     };
//                     characterList.push(characterObj);
//                 }
//             }
//         }
//         catch (e) {
//             console.error(e.message);
//         }
//     }
//     console.log(JSON.stringify(characterList));
// };

// console.log(characterList);

// main search function
function searchId(event) {
    event.preventDefault();
    var charName = inputEl.value;
    var charId;
    for (i = 0; i < characterList.length; i++) {
        if (characterList[i].searchString == charName) {
            charId = characterList[i].id;
            i = characterList.length;
        }
    }
    if (!charId) {
        console.log("Character not found"); //temp
        return;
    }

    searchCharacter(charId);
    searchMovie(charName);
}


function searchCharacter(id) {
    var requestById = "http://gateway.marvel.com/v1/public/characters/" + id + "?ts=" + ts + "&apikey=" + pubKey + "&hash=" + hashKey;
    fetch(requestById)
    .then(function (response) {
        return response.json();
    })
    .then(function (d) {
        console.log(d);
        var charInfo = {
            name: d.data.results[0].name,
            id: d.data.results[0].id, // delete?
            description: d.data.results[0].description,
            thumbnail: d.data.results[0].thumbnail.path + "." + d.data.results[0].thumbnail.extension,
            comics: d.data.results[0].urls[0].url
        };

        // TODO append info
        var newImg = document.createElement("img");
        newImg.setAttribute("src", charInfo.thumbnail);
        newImg.setAttribute("alt", charInfo.name);
        charThumbnail.append(newImg);

        var newH2 = document.createElement("h2");
        newH2.textContent = charInfo.name;
        var newP = document.createElement("p");
        newP.textContent = charInfo.description;
        var newA = document.createElement("a");
        newA.textContent = "See Comics";
        newA.setAttribute("href", charInfo.comics);

        charContainerEl.append(newH2, newP, newA);
    });
}

//searchCharacter(1009577)
//currentloginid().then(value => console.log(value));

function searchMovie(query) {
    var requestByQuery = "https://api.themoviedb.org/3/search/movie?api_key=c2d17b4b68756938636de8ad845e6940&query=" + query + "&page=1"
    fetch(requestByQuery)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if(!data) {
            return;
        }

        var top5Movies = [];
        movieContainerEl.textContent = "";

        for (i = 0; i < 5; i++) {

            var movie = {
                title: data.results[i].title,
                year: data.results[i].release_date.slice(0, 4),
                overview: data.results[i].overview,
                posterPath: "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path
            };
            
            top5Movies.push(movie);

            var movieDiv = document.createElement("div");
            movieDiv.className = "max-w-sm rounded-lg overflow-hidden hover:bg-red-100 transition duration-200 hover:scale-105 shadow-2xl";

            var movieImg = document.createElement("img");
            movieImg.className = "w-full";
            movieImg.setAttribute("src", "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path);
            movieImg.setAttribute("alt", data.results[i].title + " poster");

            var infoDiv = document.createElement("div");
            infoDiv.className = "px-4 py-4";

            var movieTitle = document.createElement("div");
            movieTitle.className = "font-bold text-xl mb-2";
            movieTitle.textContent = data.results[i].title + " (" + data.results[i].release_date.slice(0, 4) + ")";   
            
            var movieOverview = document.createElement("p");
            movieOverview.className = "text-gray-700 text-base";
            movieOverview.textContent = data.results[i].overview;

            // append elements
            infoDiv.append(movieTitle, movieOverview);
            movieDiv.append(movieImg, infoDiv);
            movieContainerEl.append(movieDiv);
        }
        
        // TODO append info
        //console.log(top5Movies);

        // create elements with attributes and class names

    

    });

    // <div class="max-w-sm rounded-lg overflow-hidden hover:bg-red-100 transition duration-200 hover:scale-105 shadow-2xl">
    //         <img class="w-full" src="https://image.tmdb.org/t/p/w500/ya7KoVn8lHh9TagGmDgDTnUb7mi.jpg" alt="Mountain">
    //         <div class="px-4 py-4">
    //             <div class="font-bold text-xl mb-2">Mountain</div>
    //             <p class="text-gray-700 text-base"> Release Date : <span id="releaseDate"></span></p>
    //             <p class="text-gray-700 text-base">
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
    //             </p>
    //         </div>
    //         </div>


}

// searchMovie("Spiderman");
searchMovie("Iron Man")

// sets character object to local storage
function addToLocalStorage() {
    var searchedCharacters = JSON.parse(localStorage.getItem("searched_characters"));
    if (searchedCharacters == null) {
        searchedCharacters = []
    };
    var characterObj = {
        "name":  characterName,
        "id": characterId,
        "search_string": searchString,
        "thumbnail_url": characterThumbnailUrl, 
    };
    localStorage.setItem("character", JSON.stringify(characterObj));
    searchedCharacters.push(characterObj);
    localStorage.setItem("searched_characters", JSON.stringify(searchedCharacters));
};

// gets last 5 character objects from local storage
function getLast5FromLocalStorage() {
    var storedCharacters = JSON.parse(localStorage.getItem("searched_characters"));
    if (storedCharacters == null) {
        storedCharacters = [];
    } else if (storedCharacters.length > 5) {
        storedCharacters = storedCharacters.slice(-5);
    };
    if (storedCharacters.length > 0) {
        var j = 0;
        var characterOrderDesc = [];
        for (let i = storedCharacters.length - 1; j < storedCharacters.length & j < 5; i--) {
            characterOrderDesc.push(storedCharacters[i]);
            j++;
        }
    }
    return characterOrderDesc;
}
