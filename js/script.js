
// Simple fade in
var delay = 0
var elements = document.getElementById("startPageContainer").childNodes
function animate(element, delay){
    window.setTimeout(function(){
        element.style.display = 'block'
    }, delay*100)
}
var onlydivs = Object.keys(elements).forEach(function(index, element){
	if (elements[element].nodeType !== Node.TEXT_NODE) 
  	animate(elements[element], delay++)
})

// Assign DOM elements
var title = document.getElementById("title")
var explanation = document.getElementById("explanation")
var graphic = document.getElementById("graphic")
var buttonMain = document.getElementById("buttonText")
var finalButtons = document.getElementsByClassName("finalButton")

var canvasDivs = document.getElementsByClassName("canvasDiv")
var canvasDivIdList = ["canvasDiv1", "canvasDiv2"]
var currentChoice = 0

var stage = 0
var titles = ["Raw Materials", "Design", "Pollutant Management", "E-waste Management Promises", "Design for Repair and Salvage", "Refurbish Phones", "Maintenance and Repair", "Results"]
/* WRITE AND ADD TEXTS */
var explanations = ["1","2","3","4","5","6","7",""]
/* ADD SVG PATHS ETC */
var graphics = ["assets/phone1.svg","assets/materials.svg","assets/miner.svg","assets/money.svg"]

// ^Move large text lists out of script file?


// Apply page changes on click
buttonMain.addEventListener("click", changeStage)
function changeStage() {
	if(stage==0){
  	buttonMain.innerHTML ="Next"
    // graphic.innerHTML =""
    
    for(var a in canvasDivs){
      if (canvasDivs[a].style !== undefined) {
        canvasDivs[a].style.display = "inline-block"
      }
    }
  }
  if(stage>=0 & stage<8){
    for(var b in canvasDivIdList){
      document.getElementById(canvasDivIdList[b]).style.borderStyle = "none"
    }
  	title.innerHTML = titles[stage]
    explanation.innerHTML = explanations[stage]
    // Link update graphics on each page, for both sections

    // Apply count additions
  }
  if(stage==7){
    buttonMain.style.display = "none"
    
    for(var c in finalButtons){
      const inlineDisplay = "inline"
    	finalButtons[c].style.display = inlineDisplay
    }
  }else{
  	stage+=1
  }
}

// ^Separate stage sections into different functions

function animateSVG(){
  $("#canvas1").delay(100).velocity({x: "+=20", y: "+=20" })
  console.log("activated")
}

function toggleSelection(canvasSelection){
  var id = canvasSelection.id
  var selectedElement = document.getElementById(id)
  
  selectedElement.style.borderStyle = "solid"
  selectedElement.style.borderColor = "cadetblue"
  if(id == canvasDivIdList[0]){
    currentChoice = 1
    document.getElementById(canvasDivIdList[1]).style.borderStyle = "none"
  }
  if(id == canvasDivIdList[1]){
    currentChoice = 2
    document.getElementById(canvasDivIdList[0]).style.borderStyle = "none"
  }
}


// function svgTest() {
//   $("#rect").delay(100).velocity({x: "+=20", y: "+=20" })
//   console.log("activated")
// }
