//2.0.1.6
//Patrice-Morgan O. de Goma

var storage, database;

var config = {
    apiKey: "AIzaSyAzqXRxpmI9K7UMTsiuFU6b54SkSjNojkU",
    authDomain: "lyoko-blockchain.firebaseapp.com",
    databaseURL: "https://lyoko-blockchain-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "lyoko-blockchain",
    storageBucket: "lyoko-blockchain.appspot.com",
    messagingSenderId: "820284895954",
    appId: "1:820284895954:web:e69039cadfd002bc15b30b"
};

firebase.initializeApp(config);
storage = firebase.storage();
database = firebase.database();


const dbPrimaryFunctions = database.ref().child("primary");
const dbSecondaryFunctions = database.ref().child("secondary");

dbPrimaryFunctions.once("value").then(function(snap){
    //DefenseAugmentedRealityIntelligentAssistant.primary = snap.val();
});

dbSecondaryFunctions.once("value").then(function(snap){
    DefenseAugmentedRealityIntelligentAssistant.secondary = snap.val();
});

function processWT(meaningInput, currentTerm){
  NodeClientSenses.processWrittenText(meaningInput, currentTerm);
}

class Senses{
  //let self = this;
  constructor(Vision, HearingBalance, Olfaction, Taste, Touch){
    this.Vision = Vision;
    this.HearingBalance = HearingBalance;
    this.Olfaction = Olfaction;
    this.Taste = Taste;
    this.Touch = Touch;
    this.UI = {
      mode: "ar-mode-button-container"
    };
    this.literate = false,
    this.workingMemory = {
      stream: [],
      active: false
    }
    this.longTermMemory = {
      literature: null,
      "lyoko-blockchain": [
        "the-weeknd",
        "the-weeknd-trilogy",
        "the-weeknd-house-of-balloons",
        "the-weeknd-trilogy-house-of-balloons",
        "the-weeknd-thursday",
        "the-weeknd-trilogy-thursday",
        "the-weeknd-echoes-of-silence",
        "the-weeknd-trilogy-echoes-of-silence"
      ]
    }
  }
  processWrittenText(prompt, phrase){
    let textMeaningInput = prompt;
    let urlMatchCheckString = textMeaningInput.replace(/\s/g,'-');
    if(phrase==urlMatchCheckString){
        var adder = "math: "+phrase;
        document.getElementById("special-hand-tracking-box-container").innerText += adder;
        //console.log("match: ",phrase);
    }
  }
  toggleSenses(senseNum){
    switch(senseNum){
      case 0:
        if(this.Vision.on){
          stopMobileVideo();
          this.Vision.on = false;
        }
        else{
          startMobileVideo();
          this.Vision.on = true;
        }
        break;
      case 1:
        if(this.HearingBalance.on){
          this.HearingBalance.on = false;
        }
        else{
          this.HearingBalance.on = true;
        }
        break;
      case 2:
        if(this.Olfaction.on){
          this.Olfaction.on = false;
        }
        else{
          this.Olfaction.on = true;
        }
        break;
      case 3:
        if(this.Taste.on){
          this.Taste.on = false;
        }
        else{
          this.Taste.on = true;
        }
        break;
      case 4:
        if(this.Touch.on){
          this.Touch.on = false;
        }
        else{
          this.Touch.on = true;
        }
        break;
      default:
        //console.log("no option available");
        document.getElementById("special-hand-tracking-box-container").innerText += "\nno option available";
        break;
      }
  }
  Cognition(prompt, action){
    let meaningInput = prompt;
    let prefix;
    if(action){
      if(action==="read"){
        //console.log(meaningInput);
        document.getElementById("special-hand-tracking-box-container").innerText += meaningInput;
        if(meaningInput.length>10){// avg length of word in English is 4.7 characters, search terms fo interest are 5 characters or less (four for the owrd, one for the space after it)
          prefix = meaningInput.substring(0,4);
          if(prefix==="find"){
            this.Cognition(meaningInput.substring(5), "searchFor");
          }
            switch(meaningInput){
                case "ARE ANY HONEYPOT TARGETS WITHIN A 30 MILE RADIUS OF THE HOUSE?":
                case "ARE ANY HONEYPOT TARGETS WITHIN A 30 MILE RADIUS OF THE HOUSE":
                case "ARE ANY HONEY POT TARGETS WITHIN A 30 MILE RADIUS OF THE HOUSE?":
                case "ARE ANY HONEY POT TARGETS WITHIN A 30 MILE RADIUS OF THE HOUSE":
                case "ARE ANY HONEY POT TARGETS WITHIN A THIRTY MILE RADIUS OF THE HOUSE?":
                case "ARE ANY HONEY POT TARGETS WITHIN A THIRTY MILE RADIUS OF THE HOUSE":
                case "ARE ANY HONEYPOT TARGETS WITHIN A THIRTY MILE RADIUS OF THE HOUSE?":
                case "ARE ANY HONEYPOT TARGETS WITHIN A THIRTY MILE RADIUS OF THE HOUSE?":
                    console.log("YES. WOULD YOU LIKE ME TO LIST THEM?");
                    break;
                case "IF THEY ARE LOCATED WITHIN A MILE OF THE HOUSE PRODUCE A TABLE INCLUDING THEIR LAST LOGGED LOCATION, WHETHER OR NOT THEY WERE IN A VEHICLE, AND IF SO WHAT THE MAKE/MODEL/YEAR OF THE VEHICLE IS.":
                case "IF THEY ARE LOCATED WITHIN A MILE OF THE HOUSE PRODUCE A TABLE INCLUDING THEIR LAST LOGGED LOCATION, WHETHER OR NOT THEY WERE IN A VEHICLE, AND IF SO WHAT THE MAKE/MODEL/YEAR OF THE VEHICLE IS":
                case "IF THEY ARE LOCATED WITHIN ONE MILE OF THE HOUSE PRODUCE A TABLE INCLUDING THEIR LAST LOGGED LOCATION, WHETHER OR NOT THEY WERE IN A VEHICLE, AND IF SO WHAT THE MAKE/MODEL/YEAR OF THE VEHICLE IS.":
                case "IF THEY ARE LOCATED WITHIN ONE MILE OF THE HOUSE PRODUCE A TABLE INCLUDING THEIR LAST LOGGED LOCATION, WHETHER OR NOT THEY WERE IN A VEHICLE, AND IF SO WHAT THE MAKE/MODEL/YEAR OF THE VEHICLE IS":
                case "IF THEY ARE LOCATED WITHIN 1 MILE OF THE HOUSE PRODUCE A TABLE INCLUDING THEIR LAST LOGGED LOCATION, WHETHER OR NOT THEY WERE IN A VEHICLE, AND IF SO WHAT THE MAKE/MODEL/YEAR OF THE VEHICLE IS.":
                case "IF THEY ARE LOCATED WITHIN 1 MILE OF THE HOUSE PRODUCE A TABLE INCLUDING THEIR LAST LOGGED LOCATION, WHETHER OR NOT THEY WERE IN A VEHICLE, AND IF SO WHAT THE MAKE/MODEL/YEAR OF THE VEHICLE IS":
                    console.log("OK");
                    console.log("[PRODUCES A TABLE WITH 2 PEOPLE WITHIN ONE MILE]");
                    break;
                case "FOR EVERYONE ELSE SIMPLY PROVIDE THEIR NAME AND LATEST ACCOUNT":
                    console.log("OK");
                    console.log("[PRODUCES ANOTHER TABLE WITH 6 PEOPLE TOTAL INCLUDING THE 2 ABOVE]");
                    break;
                case "HOW MANY CELLS ARE AVAILABLE IN THE PARK?":
                    console.log("TWO. ONE IN THE AIR, ONE ON THE GROUND.");
                    break;
                case "HOW MANY NODES ARE CONNECTED ON THE GROUND?":
                    console.log("TWO OF THE FOUR NODES ARE CONNECTED TO THEIR CHARGING PORTS.");
                    break;
                case "OK RUN A SWEEP OF THE NEIGHBORHOOD USING THE CELL IN THE AIR AND EXPORT THE DATA TO FOUR DIFFERENT .CELL FILES: ONE SHOWING ABSOLUTE MOTION, ANOTHER SHOWING RELATIVE MOTION, ANOTHER TRACKING AND IDENTIFYING ALL VEHICLES, AND THE LAST WITH THE TRADITIONAL CAMERA VIEW IN 4K 60FPS.":
                case "OK RUN A SWEEP OF THE NEIGHBORHOOD USING THE CELL IN THE AIR AND EXPORT THE DATA TO FOUR DIFFERENT .CELL FILES: ONE SHOWING ABSOLUTE MOTION, ANOTHER SHOWING RELATIVE MOTION, ANOTHER TRACKING AND IDENTIFYING ALL VEHICLES, AND THE LAST WITH THE TRADITIONAL CAMERA VIEW IN 4K 60FPS":
                case "RUN A SWEEP OF THE NEIGHBORHOOD USING THE CELL IN THE AIR AND EXPORT THE DATA TO FOUR DIFFERENT .CELL FILES: ONE SHOWING ABSOLUTE MOTION, ANOTHER SHOWING RELATIVE MOTION, ANOTHER TRACKING AND IDENTIFYING ALL VEHICLES, AND THE LAST WITH THE TRADITIONAL CAMERA VIEW IN 4K 60FPS.":
                case "OK RUN A SWEEP OF THE NEIGHBORHOOD USING THE CELL IN THE AIR AND EXPORT THE DATA TO FOUR DIFFERENT .CELL FILES: ONE SHOWING ABSOLUTE MOTION, ANOTHER SHOWING RELATIVE MOTION, ANOTHER TRACKING AND IDENTIFYING ALL VEHICLES, AND THE LAST WITH THE TRADITIONAL CAMERA VIEW IN 4K 60FPS":
                    console.log("OK. PREPARING SWEEP. TASK IS IN QUEUE.");
                    console.log("SENDING TASK TO CELL…");
                    console.log("EXPECTED FLIGHT DURATION IS 30 MINUTES.");
                    console.log("TASK RECEIVED. NAVIGATE TO THIS LINK TO VIEW A LIVE FEED. FILES WILL BE EMAILED TO YOU ONCE COMPLETE.");
                    break;
                default:
                    console.log("I AM SORRY. PLEASE TRY THAT QUERY AGAIN I DID NOT UNDERSTAND.");
                    break;
            }
        }
      }
      else if(action==="searchFor"){
        for(var i=0; i<this.longTermMemory["lyoko-blockchain"].length; i++){
          let currentTerm = this.longTermMemory["lyoko-blockchain"][i];
          (function(){
            processWT(meaningInput, currentTerm);
          })();
        }
      }
    }
  }
};

var NodeClientSenses;

document.addEventListener("DOMContentLoaded", function(){
    NodeClientSenses = new Senses({name: "Vision", on: true}, {name: "Hearing/Balance", on: true}, {name: "Olfaction", on: true}, {name: "Taste", on: true}, {name: "Touch", on: true});

    document.getElementById("toggle-audio-playback-button-container").addEventListener("click", function(){
        let audioPlayer = document.getElementById("xr-audio-player-container");
        let toggleButton = document.getElementById("toggle-audio-playback-button-container");
        //let DARIA = DefenseAugmentedRealityIntelligentAssistant;

        if(!DARIA.active){
          document.getElementById("landing-object-container").setAttribute("visible", "false");

          document.getElementById("dia-entry-screen-0-container").setAttribute("visible", "true");
          document.getElementById("dia-entry-screen-title-0-container").setAttribute("visible", "true");
          document.getElementById("dia-entry-screen-title-1-container").setAttribute("visible", "true");

          setTimeout(function(){
            document.getElementById("dia-entry-screen-0-container").setAttribute("visible", "false");
            document.getElementById("dia-entry-screen-1-container").setAttribute("visible", "true");
          }, 6000);

          setTimeout(function(){
            document.getElementById("dia-entry-screen-title-0-container").setAttribute("visible", "false");
            document.getElementById("dia-entry-screen-title-1-container").setAttribute("value", "initializing...");
          }, 9000);

          setTimeout(function(){
            document.getElementById("dia-entry-screen-1-container").setAttribute("visible", "false");
            document.getElementById("dia-entry-screen-title-1-container").setAttribute("visible", "false");
          }, 12000);

          DARIA.active = true;
        }
        else{
          console.log("DARIA already active");
        }

    });

    document.getElementById("return-to-pangaea-map-button-container").addEventListener("click", function(){
        window.location.href = "./preview";
    });

    document.getElementById("return-to-experience-lobby-button-container").addEventListener("click", function(){
        //window.location.href = "./daria";
        //if(NodeClientSenses.Vision.on){
          NodeClientSenses.toggleSenses(0);
        //}
    });

    document.getElementById("ar-mode-button-container").addEventListener("click", function(){
      if(!NodeClientSenses.Vision.on){ //  if Vision off...
        NodeClientSenses.toggleSenses(0); //  ... turn on ...
      }
      // else if already on, change nothing and continue ...

      document.getElementById("vr-mode-box-container").style.opacity = 0;//...to hide VR container and reveal AR mode

      document.getElementById(NodeClientSenses.UI.mode).classList.remove("current-mode-selected");
      document.getElementById("ar-mode-button-container").classList.add("current-mode-selected");
      NodeClientSenses.UI.mode = "ar-mode-button-container";
    });

    document.getElementById("vr-mode-button-container").addEventListener("click", function(){
      if(NodeClientSenses.Vision.on){ //  if Vision on...
        NodeClientSenses.toggleSenses(0); //  ... turn off ...
      }
      // else if already off, change nothing and continue ...

      document.getElementById("vr-mode-box-container").style.opacity = 1.0//...to reveal VR container

      document.getElementById(NodeClientSenses.UI.mode).classList.remove("current-mode-selected");
      document.getElementById("vr-mode-button-container").classList.add("current-mode-selected");
      NodeClientSenses.UI.mode = "vr-mode-button-container";
    });

    document.getElementById("text-mode-button-container").addEventListener("click", function(){
      if(NodeClientSenses.literate){ //  if Text console reader is visible...
        document.getElementById("text-mode-input-container").style.opacity = 0; // ...conceal it
        document.getElementById("text-mode-input-container").style.width = 0;
        setTimeout(function(){
          document.getElementById("text-mode-input-container").style.display = "none";
          NodeClientSenses.literate = false;
        }, 505);
      }
      else{ //  ...else if Text console reader is not visible...
        document.getElementById("text-mode-input-container").style.display = "block"; // ...reveal it
        setTimeout(function(){
          document.getElementById("text-mode-input-container").style.opacity = 1.0;
          document.getElementById("text-mode-input-container").style.width = "60%";
          NodeClientSenses.literate = true;
        }, 50);
      }
      // else if already off, change nothing and continue ...
    });

    document.getElementById("text-mode-input-container").addEventListener("keypress", function (e) {
      let currentPrompt = document.getElementById("text-mode-input-container").value;
      if (e.key === 'Enter') {
        // code for enter
        if(NodeClientSenses.literate&&currentPrompt!=null&&currentPrompt!=""){
          NodeClientSenses.Cognition(currentPrompt, "read");
          document.getElementById("text-mode-input-container").value = "";
        }
      }
    });

    document.getElementById("mod-tracker-app-container").addEventListener("click", function(){
      //let DARIA = DefenseAugmentedRealityIntelligentAssistant;
      console.log(DARIA.secondary);
    });
});
