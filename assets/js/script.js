// get timestamp
var ts = new Date().getTime();
var privKey = "b864417049b272439dc6bb1fdaee4995343fc50b";
var pubKey = "e096fc0b2d2e3a94fbbc2ce9164e4bef" ;
var message = ts+privKey+pubKey;
var hashKey = CryptoJS.MD5(message);
var characterBaseUrl = "https://gateway.marvel.com/v1/public/characters?"

// global variables
var searchCharName;
var charFound = true;

// content elements
var charContainerEl = document.getElementById("characterContainer");
var charCardEl = document.getElementById("characterCard");
var charThumbnail = document.getElementById("charImage");
var charName = document.getElementById("charName");
var charDescription = document.getElementById("charDescription");
var charComics = document.getElementById("charComics");
var recentSearchContainerEl = document.getElementById('recentSearchContainer');

var movieSectionEl = document.getElementById("movieSection");
var movieContainerEl = document.getElementById("moviesContainer");

// form elements
var inputEl = document.getElementById("searchCharName");
var buttonEl = document.getElementById("submitBtn");
var autocompleteEl = document.getElementById("result");

// event listeners
buttonEl.addEventListener("click", handleSearch);

    if (recentSearchContainerEl) {
    recentSearchContainerEl.addEventListener("click", handleSearch);    
    }
    if (autocompleteEl){
    autocompleteEl.addEventListener("click", function(event) {
        event.preventDefault();
        var charTarget = event.target.textContent;
        inputEl.value = charTarget;
        document.getElementById("result").style.display = "none";
    });
    }

// prep array for autocomplete
var search_terms = [];
for (let i = 0; i < characterList.length; i++) {
    search_terms.push(characterList[i].name);
}

// initialize page
init();

// autocomplete functions
function autocompleteMatch(input) {
    if (input == '') {
      return [];
    }
    var reg = new RegExp(input, "i")
    return search_terms.filter(function(term) {
        if (term.match(reg)) {
          return term;
        }
    });
  }
  
  function showResults(val) {
      document.getElementById("result").style.display = "block";  
      res = document.getElementById("result");
      res.innerHTML = '';
  
      let list = '';
      let terms = autocompleteMatch(val);
      let terms10 = terms.slice(0,10)
      for (i=0; i<terms10.length; i++) {
          list += '<li>' + terms[i] + '</li>';
      }
      res.innerHTML = '<ul>' + list + '</ul>';
  }

// page load
function init() {
    if (recentSearchContainerEl) {
        populateRecentSearches();
    } else {
        searchId();
    }
}

// search handler, loads character information based on page elements
function handleSearch(event) {
    event.preventDefault();
    if (event.target.id == 'charImg') {
        localStorage.setItem("search-character-name", event.target.alt);
    }
    else {
        localStorage.setItem("search-character-name", inputEl.value);
    }

    if (recentSearchContainerEl) {
        window.location.replace("./searchresults.html");
    } else {
        searchId();
    }
}

// main search function, searches character based on id, and searches movie based on character name
function searchId() {
    var charName = localStorage.getItem("search-character-name");
    var charIndex = characterList.findIndex(e => e.name.toLowerCase() == charName.toLowerCase());
       
    if (charIndex < 0) {
        charFound = false;
        noCharFound();
        return;
    } else {
        if (!charFound) {
            resultReset();
        }
        charFound = true;
    }
    searchCharacter(characterList[charIndex].id);
    searchMovie(characterList[charIndex].searchString);
}

// repopulate the page when a character is found
function resultReset() {
    charName.style.color = "black";
    charName.style.backgroundColor = "inherit";
    charName.style.padding = "unset";
    charCardEl.style.display = "unset";
    charContainerEl.classList.add("border", "border-gray-300");
    movieSectionEl.classList.add("border", "border-gray-300");
    document.body.style.backgroundImage = "none";
}

// display character not found message and depopulates the page
function noCharFound() {
    charName.textContent = "Sorry, we didn't find what you were looking for";
    charName.style.color = "white";
    charName.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    charName.style.padding = "2%";
    charCardEl.style.display = "none";
    charDescription.textContent = "";
    charComics.textContent = "";
    charContainerEl.classList.remove("border", "border-gray-300");
    movieSectionEl.classList.remove("border", "border-gray-300");
    movieContainerEl.textContent = "";
    document.body.style.backgroundImage = "url('./assets/images/marvel-background.jpg')";
}

// fetch character data from Marvel API and appends to page
function searchCharacter(id) {
    var requestById = "https://gateway.marvel.com/v1/public/characters/" + id + "?ts=" + ts + "&apikey=" + pubKey + "&hash=" + hashKey;
    fetch(requestById)
    .then(function (response) {
        return response.json();
    })
    .then(function (d) {
        var characterObj = {
            name: d.data.results[0].name,
            description: d.data.results[0].description,
            thumbnail: d.data.results[0].thumbnail.path + "." + d.data.results[0].thumbnail.extension,
            comics: d.data.results[0].urls[d.data.results[0].urls.length - 1].url
        };

        addToLocalStorage(characterObj)
        if (window.location.href.includes("searchresults.html")){
            charThumbnail.setAttribute("src", characterObj.thumbnail);
            charThumbnail.setAttribute("alt", characterObj.name);
            charName.textContent = characterObj.name;
            charDescription.textContent = characterObj.description;
            charComics.textContent = "Featured Comic Books and Series";
            charComics.setAttribute("href", characterObj.comics);
        }
    });
}

// fetches movie data from the Movie Database API and appends to page
function searchMovie(query) {
    var requestByQuery = "https://api.themoviedb.org/3/search/movie?api_key=c2d17b4b68756938636de8ad845e6940&query=" + query + "&page=1"
    fetch(requestByQuery)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if(data.results.length === 0) {
            movieContainerEl.textContent = "No Movies Found";
            return;
        }

        if (window.location.href.includes("searchresults.html")){
            movieContainerEl.textContent = ""
            
            for (i = 0; i < 5; i++) {
                
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
      }   
    });
}

// sets character object to local storage
function addToLocalStorage(characterObj) {
    var searchedCharacters = [];
    searchedCharacters = JSON.parse(localStorage.getItem("searched_characters"));
    var charInLs;
    
    if (!searchedCharacters) {
        searchedCharacters = []
    }
    
    // Checking for duplicates and if present skip storing in localStorage!! 
    charInLs = searchedCharacters.findIndex(e => e.name == characterObj.name);
    if (charInLs >=0) {
        return;
    }
    searchedCharacters.push(characterObj);
    localStorage.setItem("character", JSON.stringify(characterObj));

    // Storing only 5 Marvel characters in localStorage
    if (searchedCharacters.length === 6) {
         searchedCharacters.shift();
    }
    
    localStorage.setItem("searched_characters", JSON.stringify(searchedCharacters));
}

// gets last 5 character objects from local storage
function populateRecentSearches() {
    var storedCharacters = JSON.parse(localStorage.getItem("searched_characters"));
    recentSearchContainerEl.innerHTML ='';
    if (storedCharacters == null) {
        storedCharacters = [];
        return;
    } 
    if (storedCharacters.length > 0) {
        for (let i = storedCharacters.length - 1; i >= 0; i--) {
            var imgDiv = document.createElement('div');
            imgDiv.setAttribute ('class', "max-w-sm rounded-full h-20 w-20 border border-red-200 overflow-hidden hover:border-red-200 hover:bg-red-100 transition duration-200 hover:scale-105 shadow-2xl");
            var charImg = document.createElement('img');
            charImg.setAttribute('class',"w-full");
            charImg.setAttribute ('src', storedCharacters[i].thumbnail);
            charImg.setAttribute('alt', storedCharacters[i].name);
            charImg.setAttribute('id', "charImg")

            imgDiv.appendChild(charImg);
            recentSearchContainerEl.appendChild(imgDiv);
        }
    }
}