// get timestamp
// var ts = new Date().getTime();
// var privKey = "b864417049b272439dc6bb1fdaee4995343fc50b";
// var pubKey = "e096fc0b2d2e3a94fbbc2ce9164e4bef" ;
// var message = ts+privKey+pubKey;
// var hashKey = CryptoJS.MD5(message);
// var characterBaseUrl = "http://gateway.marvel.com/v1/public/characters?"

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

console.log(characterList);

function searchCharacter(id) {
    var requestById = "http://gateway.marvel.com/v1/public/characters/" + id + "?ts=" + ts + "&apikey=" + pubKey + "&hash=" + hashKey;
    fetch(requestById)
    .then(function (response) {
        return response.json();
    })
    .then(function (d) {
        console.log(d);
        
        var characterName = d.data.results[0].name;
        console.log(characterName);
    
        var characterId = d.data.results[0].id;
        console.log(characterId);

        var characterDescription = d.data.results[0].description;
        console.log(characterDescription);

        var characterThumbnailUrl = d.data.results[0].thumbnail.path + "." + d.data.results[0].thumbnail.extension;
        console.log(characterThumbnailUrl);

        var characterComicSeriesUrl = d.data.results[0].urls[0].url;
        console.log(characterComicSeriesUrl);
    });
}

//searchCharacter(1009577)

function searchMovie(query) {
    var requestByQuery = "https://api.themoviedb.org/3/search/movie?api_key=c2d17b4b68756938636de8ad845e6940&query=" + query + "&page=1"
    fetch(requestByQuery)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        var movieTitle =  data.results[0].title;
        console.log(movieTitle);

        var releaseDate = data.results[0].release_date;
        console.log(releaseDate);

        var overView = data.results[0].overview;
        console.log(overView);

        var posterPath = "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path;
        console.log(posterPath);
    })
}
// searchMovie("Iron Man")    