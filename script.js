// get timestamp
var ts = new Date().getTime();
var privKey = "b864417049b272439dc6bb1fdaee4995343fc50b";
var pubKey = "e096fc0b2d2e3a94fbbc2ce9164e4bef" ;
var message = ts+privKey+pubKey;
var hashKey = CryptoJS.MD5(message);

var requestGeocodeUrl1 = "http://gateway.marvel.com/v1/public/characters?ts=" + ts + "&apikey=" + pubKey + "&hash=" + hashKey + "&limit=100" + "&orderBy=-modified"

fetch(requestGeocodeUrl1, {method: 'get'})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)
});

var requestGeocodeUrl2 = "http://gateway.marvel.com/v1/public/characters/1009610/series?ts=" + ts + "&apikey=" + pubKey + "&hash=" + hashKey + "&limit=100" + "&orderBy=-modified"
fetch(requestGeocodeUrl2, {method: 'get'})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })

var requestGeocodeUrl3 = "https://api.themoviedb.org/3/search/movie?api_key=c2d17b4b68756938636de8ad845e6940&query=Spider+Man"
fetch(requestGeocodeUrl3, {method: 'get'})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    