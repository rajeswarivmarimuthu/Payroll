// This code was used to request data from the Marvel API and handle any missing data, replace special characters in strings, and compact it into an array of character objects. We stored the filtered data into a variable to avoid long runtimes.

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

var characterList = [{"name":"A-Bomb (HAS)","searchString":"A Bomb","id":1017100},{"name":"A.I.M.","searchString":"A.I.M.","id":1009144},{"name":"Abomination (Emil Blonsky)","searchString":"Abomination Emil","id":1009146},{"name":"Adam Warlock","searchString":"Adam Warlock","id":1010354},{"name":"Agent X (Nijo)","searchString":"Agent X","id":1011031},{"name":"Alex Wilder","searchString":"Alex Wilder","id":1010755},{"name":"Amun","searchString":"Amun","id":1010905},{"name":"Angel (Angel Salvadore)","searchString":"Angel Angel","id":1011684},{"name":"Arnim Zola","searchString":"Arnim Zola","id":1009740},{"name":"Attuma","searchString":"Attuma","id":1011758},{"name":"Avengers","searchString":"Avengers","id":1009165},{"name":"Azazel (Mutant)","searchString":"Azazel Mutant","id":1011766},{"name":"Banshee (Theresa Rourke)","searchString":"Banshee Theresa","id":1009596},{"name":"Baron Mordo (Karl Mordo)","searchString":"Baron Mordo","id":1011778},{"name":"Battlestar","searchString":"Battlestar","id":1011785},{"name":"Belasco","searchString":"Belasco","id":1011793},{"name":"Ben Reilly","searchString":"Ben Reilly","id":1011346},{"name":"Ben Urich","searchString":"Ben Urich","id":1010782},{"name":"Bethany Cabe","searchString":"Bethany Cabe","id":1011907},{"name":"Black Knight (Dane Whitman)","searchString":"Black Knight","id":1011809},{"name":"Black Widow/Natasha Romanoff (MAA)","searchString":"Black Widow","id":1017109},{"name":"Bling!","searchString":"Bling!","id":1011836},{"name":"Bob, Agent of Hydra","searchString":"Bob Agent","id":1011119},{"name":"Boom Boom","searchString":"Boom Boom","id":1010366},{"name":"Cap'n Oz","searchString":"Capn Oz","id":1011276},{"name":"Captain America","searchString":"Captain America","id":1009220},{"name":"Captain America (Sam Wilson)","searchString":"Captain America","id":1017575},{"name":"Captain America/Steve Rogers (MAA)","searchString":"Captain America","id":1017105},{"name":"Captain Stacy","searchString":"Captain Stacy","id":1009225},{"name":"Carmella Unuscione","searchString":"Carmella Unuscione","id":1009688},{"name":"Carrion (Malcolm McBride)","searchString":"Carrion Malcolm","id":1011937},{"name":"Charlie-27","searchString":"Charlie 27","id":1012019},{"name":"Chase Stein","searchString":"Chase Stein","id":1010754},{"name":"Chthon","searchString":"Chthon","id":1012065},{"name":"Colleen Wing","searchString":"Colleen Wing","id":1010676},{"name":"Daredevil","searchString":"Daredevil","id":1009262},{"name":"Deathlok","searchString":"Deathlok","id":1010890},{"name":"Demogoblin","searchString":"Demogoblin","id":1011071},{"name":"Devil Dinosaur (HAS)","searchString":"Devil Dinosaur","id":1017102},{"name":"Falcon","searchString":"Falcon","id":1009297},{"name":"Falcon/Sam Wilson (MAA)","searchString":"Falcon Sam","id":1017110},{"name":"Fantastic Four","searchString":"Fantastic Four","id":1009299},{"name":"Franklin Richards","searchString":"Franklin Richards","id":1009539},{"name":"Franklin Storm","searchString":"Franklin Storm","id":1010980},{"name":"Glenn Talbot","searchString":"Glenn Talbot","id":1009645},{"name":"Guardians of the Galaxy","searchString":"Guardians of","id":1011299},{"name":"Gwen Stacy","searchString":"Gwen Stacy","id":1009619},{"name":"Hank Pym","searchString":"Hank Pym","id":1011490},{"name":"Hawkeye/Clint Barton (MAA)","searchString":"Hawkeye Clint","id":1017108},{"name":"Hela","searchString":"Hela","id":1011482},{"name":"Hulk","searchString":"Hulk","id":1009351},{"name":"Hulk (HAS)","searchString":"Hulk HAS","id":1017098},{"name":"Hulk/Bruce Banner (MAA)","searchString":"Hulk Bruce","id":1017107},{"name":"Iron Fist (USM)","searchString":"Iron Fist","id":1016839},{"name":"Iron Man","searchString":"Iron Man","id":1009368},{"name":"Iron Man/Tony Stark (MAA)","searchString":"Iron Man","id":1017104},{"name":"Iron Patriot (James Rhodes)","searchString":"Iron Patriot","id":1009538},{"name":"Isaiah Bradley","searchString":"Isaiah Bradley","id":1011876},{"name":"Jimmy Woo","searchString":"Jimmy Woo","id":1011105},{"name":"John Wraith","searchString":"John Wraith","id":1009721},{"name":"Ken Ellis","searchString":"Ken Ellis","id":1011319},{"name":"Mariko Yashida","searchString":"Mariko Yashida","id":1009735},{"name":"Mary Jane Watson","searchString":"Mary Jane","id":1009708},{"name":"Mary Jane Watson (House of M)","searchString":"Mary Jane","id":1010993},{"name":"Matsu'o Tsurayaba","searchString":"Matsuo Tsurayaba","id":1009677},{"name":"Meltdown","searchString":"Meltdown","id":1009439},{"name":"Miracleman","searchString":"Miracleman","id":1013727},{"name":"Ms. Marvel (Kamala Khan)","searchString":"Ms. Marvel","id":1017577},{"name":"Nova (Sam Alexander)","searchString":"Nova Sam","id":1017078},{"name":"Nova (USM)","searchString":"Nova USM","id":1016837},{"name":"Pete Wisdom","searchString":"Pete Wisdom","id":1010779},{"name":"Power Man (USM)","searchString":"Power Man","id":1016840},{"name":"Red Hulk (HAS)","searchString":"Red Hulk","id":1017099},{"name":"Rocket Raccoon","searchString":"Rocket Raccoon","id":1010744},{"name":"Runaways","searchString":"Runaways","id":1010747},{"name":"Sabra","searchString":"Sabra","id":1009553},{"name":"Scarecrow (Ebenezer Laughton)","searchString":"Scarecrow Ebenezer","id":1010861},{"name":"Scorpion (Carmilla Black)","searchString":"Scorpion Carmilla","id":1010790},{"name":"Scrambler","searchString":"Scrambler","id":1011230},{"name":"Scream (Donna Diego)","searchString":"Scream Donna","id":1009566},{"name":"Screwball","searchString":"Screwball","id":1011242},{"name":"Sebastian Shaw","searchString":"Sebastian Shaw","id":1009581},{"name":"Selene","searchString":"Selene","id":1009568},{"name":"Sentry (Robert Reynolds)","searchString":"Sentry Robert","id":1009571},{"name":"Sersi","searchString":"Sersi","id":1010345},{"name":"Shadow King","searchString":"Shadow King","id":1009573},{"name":"Shadowcat (Age of Apocalypse)","searchString":"Shadowcat Age","id":1010975},{"name":"Shadowcat (Ultimate)","searchString":"Shadowcat Ultimate","id":1010974},{"name":"Shadu the Shady","searchString":"Shadu the","id":1011406},{"name":"Shaman","searchString":"Shaman","id":1009576},{"name":"Shang-Chi","searchString":"Shang Chi","id":1009577},{"name":"Shanna the She-Devil","searchString":"Shanna the","id":1009578},{"name":"Shape","searchString":"Shape","id":1010712},{"name":"Shard","searchString":"Shard","id":1009579},{"name":"Shatterstar","searchString":"Shatterstar","id":1009580},{"name":"She-Hulk (HAS)","searchString":"She Hulk","id":1017111},{"name":"She-Hulk (Jennifer Walters)","searchString":"She Hulk","id":1009583},{"name":"Shinobi Shaw","searchString":"Shinobi Shaw","id":1009582},{"name":"Shiver Man","searchString":"Shiver Man","id":1011394},{"name":"Shocker (Herman Schultz)","searchString":"Shocker Herman","id":1009585},{"name":"Shockwave","searchString":"Shockwave","id":1010858},{"name":"Shriek","searchString":"Shriek","id":1009587},{"name":"Sif","searchString":"Sif","id":1009588},{"name":"Silhouette","searchString":"Silhouette","id":1010848},{"name":"Silver Fox","searchString":"Silver Fox","id":1009589},{"name":"Silver Sable","searchString":"Silver Sable","id":1009590},{"name":"Silver Samurai","searchString":"Silver Samurai","id":1009591},{"name":"Silver Samurai (Age of Apocalypse)","searchString":"Silver Samurai","id":1010976},{"name":"Silver Surfer","searchString":"Silver Surfer","id":1009592},{"name":"Silverclaw","searchString":"Silverclaw","id":1010864},{"name":"Silvermane","searchString":"Silvermane","id":1009594},{"name":"Siren (Earth-93060)","searchString":"Siren Earth","id":1010834},{"name":"Skaar","searchString":"Skaar","id":1011223},{"name":"Skaar (HAS)","searchString":"Skaar HAS","id":1017101},{"name":"Skin","searchString":"Skin","id":1009598},{"name":"Skreet","searchString":"Skreet","id":1011157},{"name":"Slapstick","searchString":"Slapstick","id":1011057},{"name":"Slayback","searchString":"Slayback","id":1011070},{"name":"Sleepwalker","searchString":"Sleepwalker","id":1010761},{"name":"Slipstream","searchString":"Slipstream","id":1009602},{"name":"Slyde","searchString":"Slyde","id":1010874},{"name":"Smasher (Vril Rokk)","searchString":"Smasher Vril","id":1009603},{"name":"Snowbird","searchString":"Snowbird","id":1009606},{"name":"Solo (James Bourne)","searchString":"Solo James","id":1010855},{"name":"Songbird","searchString":"Songbird","id":1010693},{"name":"Speed","searchString":"Speed","id":1010833},{"name":"Speed Demon","searchString":"Speed Demon","id":1011032},{"name":"Spider-Girl (Anya Corazon)","searchString":"Spider Girl","id":1009157},{"name":"Spider-Girl (May Parker)","searchString":"Spider Girl","id":1009609},{"name":"Spider-Ham (Larval Earth)","searchString":"Spider Ham","id":1011347},{"name":"Spider-Man (House of M)","searchString":"Spider Man","id":1012200},{"name":"Spider-Man (Marvel Zombies)","searchString":"Spider Man","id":1011114},{"name":"Spider-Man (Miles Morales)","searchString":"Spider Man","id":1016181},{"name":"Spider-Man (Peter Parker)","searchString":"Spider Man","id":1009610},{"name":"Spider-Man (Ultimate)","searchString":"Spider Man","id":1011010},{"name":"Spider-Woman (Jessica Drew)","searchString":"Spider Woman","id":1009608},{"name":"Spider-Woman (Mattie Franklin)","searchString":"Spider Woman","id":1010794},{"name":"Spiral (Rita Wayword)","searchString":"Spiral Rita","id":1009614},{"name":"Spirit","searchString":"Spirit","id":1011158},{"name":"Spitfire","searchString":"Spitfire","id":1010899},{"name":"Spot","searchString":"Spot","id":1009616},{"name":"Sprite","searchString":"Sprite","id":1011180},{"name":"Squirrel Girl","searchString":"Squirrel Girl","id":1010860},{"name":"Star-Lord (Peter Quill)","searchString":"Star Lord","id":1010733},{"name":"Starbolt","searchString":"Starbolt","id":1009621},{"name":"Stardust","searchString":"Stardust","id":1010764},{"name":"Starfox","searchString":"Starfox","id":1011084},{"name":"Starhawk (Stakar Ogord)","searchString":"Starhawk Stakar","id":1011341},{"name":"Stature","searchString":"Stature","id":1010828},{"name":"Stegron","searchString":"Stegron","id":1012230},{"name":"Stellaris","searchString":"Stellaris","id":1011159},{"name":"Stepford Cuckoos","searchString":"Stepford Cuckoos","id":1009625},{"name":"Stick","searchString":"Stick","id":1009626},{"name":"Stilt-Man (Wibur Day)","searchString":"Stilt Man","id":1009627},{"name":"Stingray (Walter Newell)","searchString":"Stingray Walter","id":1009628},{"name":"Storm","searchString":"Storm","id":1009629},{"name":"Storm (Age of Apocalypse)","searchString":"Storm Age","id":1010979},{"name":"Storm (Ultimate)","searchString":"Storm Ultimate","id":1010978},{"name":"Stranger","searchString":"Stranger","id":1011062},{"name":"Strong Guy","searchString":"Strong Guy","id":1011051},{"name":"Stryfe","searchString":"Stryfe","id":1009632},{"name":"Sub-Mariner","searchString":"Sub Mariner","id":1010791},{"name":"Sugar Man","searchString":"Sugar Man","id":1011212},{"name":"Sunfire","searchString":"Sunfire","id":1009636},{"name":"Sunfire (Age of Apocalypse)","searchString":"Sunfire Age","id":1010981},{"name":"Sunspot","searchString":"Sunspot","id":1009638},{"name":"Super-Adaptoid","searchString":"Super Adaptoid","id":1011022},{"name":"Super-Skrull","searchString":"Super Skrull","id":1009639},{"name":"Supernaut","searchString":"Supernaut","id":1011232},{"name":"Supreme Intelligence","searchString":"Supreme Intelligence","id":1011160},{"name":"Surge","searchString":"Surge","id":1010695},{"name":"Surtur","searchString":"Surtur","id":1011477},{"name":"Swarm","searchString":"Swarm","id":1011075},{"name":"Sway","searchString":"Sway","id":1011017},{"name":"Swordsman","searchString":"Swordsman","id":1009641},{"name":"Swordsman (Jacques Duquesne)","searchString":"Swordsman Jacques","id":1010982},{"name":"Synch","searchString":"Synch","id":1009643},{"name":"Talisman (Elizabeth Twoyoungmen)","searchString":"Talisman Elizabeth","id":1009646},{"name":"Talkback (Chase Stein)","searchString":"Talkback Chase","id":1010753},{"name":"Talon (Fraternity of Raptors)","searchString":"Talon Fraternity","id":1011395},{"name":"Talos","searchString":"Talos","id":1011161},{"name":"Tarantula (Luis Alvarez)","searchString":"Tarantula Luis","id":1010713},{"name":"Tarantula (Maria Vasquez)","searchString":"Tarantula Maria","id":1011854},{"name":"Taskmaster","searchString":"Taskmaster","id":1009648},{"name":"Taurus (Cornelius van Lunt)","searchString":"Taurus Cornelius","id":1011896},{"name":"Tenebrous","searchString":"Tenebrous","id":1011162},{"name":"Terrax","searchString":"Terrax","id":1009651},{"name":"Terror","searchString":"Terror","id":1011034},{"name":"Thanos","searchString":"Thanos","id":1009652},{"name":"The Collector (Taneleer Tivan)","searchString":"The Collector","id":1012080},{"name":"The Leader (HAS)","searchString":"The Leader","id":1017103},{"name":"Thena","searchString":"Thena","id":1011181},{"name":"Thing","searchString":"Thing","id":1009662},{"name":"Thing (Ultimate)","searchString":"Thing Ultimate","id":1010983},{"name":"Thor","searchString":"Thor","id":1009664},{"name":"Thor (Goddess of Thunder)","searchString":"Thor Goddess","id":1017576},{"name":"Thor (MAA)","searchString":"Thor MAA","id":1017106},{"name":"Thor (Ultimate)","searchString":"Thor Ultimate","id":1011025},{"name":"Thor Girl","searchString":"Thor Girl","id":1010820},{"name":"Thunderball","searchString":"Thunderball","id":1010885},{"name":"Thunderbird (John Proudstar)","searchString":"Thunderbird John","id":1009666},{"name":"Thunderbird (Neal Shaara)","searchString":"Thunderbird Neal","id":1009667},{"name":"Thunderbolts","searchString":"Thunderbolts","id":1010360},{"name":"Thundra","searchString":"Thundra","id":1011304},{"name":"Tiger Shark","searchString":"Tiger Shark","id":1009669},{"name":"Tigra (Greer Nelson)","searchString":"Tigra Greer","id":1009670},{"name":"Timeslip","searchString":"Timeslip","id":1010857},{"name":"Tinkerer","searchString":"Tinkerer","id":1011345},{"name":"Tippy Toe","searchString":"Tippy Toe","id":1011960},{"name":"Titania","searchString":"Titania","id":1010669},{"name":"Toad","searchString":"Toad","id":1009673},{"name":"Tombstone","searchString":"Tombstone","id":1009675},{"name":"Toro (Thomas Raymond)","searchString":"Toro Thomas","id":1011309},{"name":"Toxin","searchString":"Toxin","id":1009676},{"name":"Trauma","searchString":"Trauma","id":1010822},{"name":"Trevor Fitzroy","searchString":"Trevor Fitzroy","id":1011978},{"name":"Triathlon","searchString":"Triathlon","id":1010825},{"name":"Triton","searchString":"Triton","id":1010335},{"name":"Turbo","searchString":"Turbo","id":1011047},{"name":"Typhoid Mary","searchString":"Typhoid Mary","id":1010369},{"name":"U-Go Girl","searchString":"U Go","id":1009681},{"name":"U.S. Agent","searchString":"U.S. Agent","id":1009682},{"name":"Uatu The Watcher","searchString":"Uatu The","id":1009683},{"name":"Ulik","searchString":"Ulik","id":1010358},{"name":"Ultimate Spider-Man (USM)","searchString":"Ultimate Spider","id":1016825},{"name":"Ultimo","searchString":"Ultimo","id":1011311},{"name":"Ultron","searchString":"Ultron","id":1009685},{"name":"Umar","searchString":"Umar","id":1009686},{"name":"Unicorn","searchString":"Unicorn","id":1010862},{"name":"Union Jack (Brian Falsworth)","searchString":"Union Jack","id":1010985},{"name":"Union Jack (Joseph Chapman)","searchString":"Union Jack","id":1010696},{"name":"Union Jack (Montgomery Falsworth)","searchString":"Union Jack","id":1010984},{"name":"Unus","searchString":"Unus","id":1009687},{"name":"Unus (Age of Apocalypse)","searchString":"Unus Age","id":1010987},{"name":"Unus (House of M)","searchString":"Unus House","id":1010988},{"name":"Unus (Ultimate)","searchString":"Unus Ultimate","id":1010986},{"name":"Valkyrie (Samantha Parrington)","searchString":"Valkyrie Samantha","id":1010350},{"name":"Vampiro","searchString":"Vampiro","id":1011182},{"name":"Vanisher (Age of Apocalypse)","searchString":"Vanisher Age","id":1010989},{"name":"Vanisher (Telford Porter)","searchString":"Vanisher Telford","id":1011365},{"name":"Vanisher (Ultimate)","searchString":"Vanisher Ultimate","id":1009689},{"name":"Vapor","searchString":"Vapor","id":1011316},{"name":"Vargas","searchString":"Vargas","id":1009690},{"name":"Vector","searchString":"Vector","id":1010872},{"name":"Veda","searchString":"Veda","id":1011231},{"name":"Vengeance (Michael Badilino)","searchString":"Vengeance Michael","id":1009691},{"name":"Venom (Flash Thompson)","searchString":"Venom Flash","id":1009663},{"name":"Venom (Mac Gargan)","searchString":"Venom Mac","id":1010788},{"name":"Venom (Ultimate)","searchString":"Venom Ultimate","id":1011128},{"name":"Venus (Siren)","searchString":"Venus Siren","id":1011106},{"name":"Venus Dee Milo","searchString":"Venus Dee","id":1009693},{"name":"Vermin (Edward Whelan)","searchString":"Vermin Edward","id":1010353},{"name":"Vertigo (Savage Land Mutate)","searchString":"Vertigo Savage","id":1009694},{"name":"Vindicator","searchString":"Vindicator","id":1009695},{"name":"Viper","searchString":"Viper","id":1009696},{"name":"Vision","searchString":"Vision","id":1009697},{"name":"Vulcan (Gabriel Summers)","searchString":"Vulcan Gabriel","id":1011011},{"name":"Vulture (Adrian Toomes)","searchString":"Vulture Adrian","id":1009699},{"name":"Vulture (Blackie Drago)","searchString":"Vulture Blackie","id":1010990},{"name":"Wallflower","searchString":"Wallflower","id":1010849},{"name":"Wallop","searchString":"Wallop","id":1011267},{"name":"Wallow","searchString":"Wallow","id":1009700},{"name":"War (Abraham Kieros)","searchString":"War Abraham","id":1009701},{"name":"War Machine (James Rhodes)","searchString":"War Machine","id":1017834},{"name":"War Machine (Parnell Jacobs)","searchString":"War Machine","id":1010991},{"name":"Warlock (Janie Chin)","searchString":"Warlock Janie","id":1009704},{"name":"Warlock (Technarchy)","searchString":"Warlock Technarchy","id":1011287},{"name":"Warpath","searchString":"Warpath","id":1009705},{"name":"Warstar","searchString":"Warstar","id":1009706},{"name":"Wasp","searchString":"Wasp","id":1009707},{"name":"Wasp (Ultimate)","searchString":"Wasp Ultimate","id":1010992},{"name":"Werewolf By Night","searchString":"Werewolf By","id":1010765},{"name":"Whiplash (Anton Vanko)","searchString":"Whiplash Anton","id":1011588},{"name":"Whiplash (Mark Scarlotti)","searchString":"Whiplash Mark","id":1009711},{"name":"Whirlwind","searchString":"Whirlwind","id":1010348},{"name":"White Tiger (Angela Del Toro)","searchString":"White Tiger","id":1010853},{"name":"White Tiger (USM)","searchString":"White Tiger","id":1016838},{"name":"Whizzer (Stanley Stewart)","searchString":"Whizzer Stanley","id":1011425},{"name":"Wiccan","searchString":"Wiccan","id":1009714},{"name":"Wild Child","searchString":"Wild Child","id":1009715},{"name":"Wild Child (Age of Apocalypse)","searchString":"Wild Child","id":1010994},{"name":"William Stryker","searchString":"William Stryker","id":1009633},{"name":"Wind Dancer","searchString":"Wind Dancer","id":1011009},{"name":"Wither","searchString":"Wither","id":1011043},{"name":"Wolf Cub","searchString":"Wolf Cub","id":1011290},{"name":"Wolfsbane","searchString":"Wolfsbane","id":1009717},{"name":"Wolfsbane (Age of Apocalypse)","searchString":"Wolfsbane Age","id":1010995},{"name":"Wolverine","searchString":"Wolverine","id":1009718},{"name":"Wolverine (Ultimate)","searchString":"Wolverine Ultimate","id":1011006},{"name":"Wonder Man","searchString":"Wonder Man","id":1009719},{"name":"Wong","searchString":"Wong","id":1009720},{"name":"Wrecker","searchString":"Wrecker","id":1010884},{"name":"X-23","searchString":"X 23","id":1009722},{"name":"X-Man","searchString":"X Man","id":1009725},{"name":"X-Men","searchString":"X Men","id":1009726},{"name":"X-Ray (James Darnell)","searchString":"X Ray","id":1010875},{"name":"Xorn (Kuan-Yin Xorn)","searchString":"Xorn Kuan","id":1009734},{"name":"Yellow Claw","searchString":"Yellow Claw","id":1009736},{"name":"Yellowjacket (Hank Pym)","searchString":"Yellowjacket Hank","id":1009737},{"name":"Yellowjacket (Rita DeMara)","searchString":"Yellowjacket Rita","id":1010996},{"name":"Yondu","searchString":"Yondu","id":1011542},{"name":"Zarek","searchString":"Zarek","id":1011163},{"name":"Zeus","searchString":"Zeus","id":1011515},{"name":"Zodiak","searchString":"Zodiak","id":1011127},{"name":"Zombie (Simon Garth)","searchString":"Zombie Simon","id":1009741},{"name":"Zuras","searchString":"Zuras","id":1011183},{"name":"Zzzax","searchString":"Zzzax","id":1009742}];