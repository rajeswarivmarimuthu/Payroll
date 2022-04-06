// get timestamp
var ts = new Date().getTime();
var privKey = "b864417049b272439dc6bb1fdaee4995343fc50b";
var pubKey = "e096fc0b2d2e3a94fbbc2ce9164e4bef" ;
var message = ts+privKey+pubKey;
var hashKey = CryptoJS.MD5(message);
var characterBaseUrl = "http://gateway.marvel.com/v1/public/characters?"

// global variables
import { characterList } from "./characters";

// content elements
var charContainerEl = document.getElementById(""); // TODO
var charThumbnail = document.getElementById(""); // TODO
var movieContainerEl = document.getElementById(""); // TODO

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
        var top5Movies = [];

        for (i = 0; i < 5; i++) {

        var movie = {
            title: data.results[i].title,
            year: data.results[i].release_date.slice(0, 4),
            overview: data.results[i].overview,
            posterPath: "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path
        };

        top5Movies.push(movie)
        }
        // TODO append info


        
        console.log(top5Movies);
    });
}

// searchMovie("Spiderman");