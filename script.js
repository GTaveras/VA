/* write your script here */
var database = [
  {
    name:"Mario",
    born:"1981",
    died:null,
    picture:"img/mario-pose.png",
    bio:"Originally named Jumpman in the game Donkey Kong, and named after Shigeru Miyamoto’s landlord, Mario is part of one of the largest game series franchises in the history of video games."
  },
  {
    name:"Luigi",
    born:"1983",
    died:null,
    picture:"img/luigi-pose.png",
    bio:"Brother to Mario, Luigi exists in the Nintendo Universe, and works as a plumber with hi brother when they aren’t out on adventures."
  },
  {
    name:"Peach",
    born:"1985",
    died:null,
    picture:"img/princessPeach-pose.png",
    bio:"Damsel in distress from attack from bowser, Princess Peach of the Mushroom Kingdom is portrayed as Mario’s main love interest on his adventures."
  },
  {
    name:"Bowser",
    born:"1985",
    died:null,
    picture:"img/Bowser.png",
    bio:"Bowser is a major character and the main antagonist of the Mario franchise. Bowser is a large, powerful, fire-breathing Koopa who leads the Koopa Troop, an antagonistic organization of turtle-like creatures, and has been the archenemy of the Mario Bros.”"
  },
 {
    name:"Yoshi",
    born:"1990",
    died:null,
    picture:"img/yoshi-pose.png",
    bio:"Yoshi is one of the heroes of the Mario franchise, an ally of Mario and Luigi, and the protagonist of his own franchise. He is a member of the Yoshi species and has aided his brethren in saving their homeland on multiple occasions.”"
  },
  {
    name:"Donkey Kong",
    born:"1981",
    died:null,
    picture:"img/donkeyKong-pose.png",
    bio:"Main antagonist against Mario, he’s an apelike creature who tries to stop Mario by throwing barrels at him.”"
  }
];
var searchBar = document.getElementById("search-bar");
var searchButton = document.getElementById("search-button");
var autoSuggestions = document.getElementById("auto-suggestions");
var display = document.getElementById("display");

searchBar.addEventListener("keypress", checkKey);
searchBar.addEventListener("input", getAutoSuggestions);
searchButton.addEventListener("click", processInput);

function getAutoSuggestions() {
  var cleanedInput = searchBar.value.toLowerCase().trim();
  autoSuggestions.innerHTML = "";
  for(var i = -; i < database.length; i++) {
    var cleanedRecord
  }
}

function checkKey(e) {
  var key = e.which || e.keyCode;
  if(key == 13) {
    //console.log(“You pressed enter!”);
  }
}

function processInput() {
  var cleanedInput = searchBar.value.toLowerCase().trim()
  document.getElementById("auto-suggestions") = "";
  autoSuggestions.style.display = "none";
  seearchBar.input = "";
  var databaseRecord = getRecord(cleanedInput);
  if (deatabaseRecord != null) {
    displayRecord(databaseRecord)
  } else {
    alert("No results.")
  }
}

function getRecord(cleanedInput) {
  for (var i = 0; i < database.length; i++){
    var cleanedRecordName = database[i].name.toLowerCase().trim();
    if(cleanedRecordName == cleanedInput) {
      return database[i];
    }
    return null;
  }
}

functino displayRecord(databaseRecord) {
  var recordName = document.createElement("h2");
  recordName.innerHTML = databaseRecord.name;
  var recordPicture = document.createElement("img");
  recordPicture.src = databaseRecord.picture;
  var recordBorn = document.createElement("p");
  recordBorn.innerHTML = "<b>Born:</b> " + databaseRecord.born;
  var recordDied = document.createElement("p");
  if(databaseRecord.died != null) {
    recordDied.innerHTML = "<b>Died:</b> " + databaseRecord.died;
  }
  else {
    recordDied.innerHTML = "<b>Died:</b> N/A";
  }

  display.appendChild(recordName);
  display.appendChild(recordBorn);
  display.appendChild(recordDied);
  display.appendChild(recordPicture);
  display.appendChild(recordBio);

}

function helloWorld() {
  alert("Hello World");
}
