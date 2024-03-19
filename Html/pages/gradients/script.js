value1 = [
   { value: 0},
   { value: 0}, 
   { value: 0}, 
    
];

value2 = [
    { value: 255} ,
    { value: 255}, 
    { value: 255}, 
     
 ];
    
function rainbow() {
    intervalId = window.setInterval(function(){
        value1[0].value = value1[0].value + 1
        value1[1].value = value1[1].value + 10
        value1[2].value = value1[2].value + 20

        value2[0].value = value2[0].value - 10
        value2[1].value = value2[1].value - 15
        value2[2].value = value2[2].value - 35


        
        console.log(value1[0].value)
        var gradientBody = document.getElementById('gradientBody');
        gradientBody.style.backgroundImage = "linear-gradient(rgb("+value1[0].value+","+value1[1].value+","+value1[2].value+"), rgb("+value2[0].value+","+value2[1].value+","+value2[2].value+"))"
        
        
       }, 1000);
       
}

function randomGradient() {
var randOne = Math.floor(0);
var randTwo = Math.ceil(255);
var rgbValue = document.getElementById('rgbValue');
var hexValue = document.getElementById('hexValue');
intervalId = window.setInterval(function()
{
    random1 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random2 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random3 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random4 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random5 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random6 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    
            value1[0].value = random1
            value1[1].value = random2
            value1[2].value = random3
    
            value2[0].value = random4
            value2[1].value = random5
            value2[2].value = random6
    gradientBody.style.backgroundImage = "linear-gradient(rgb("+random1+","+random2+","+random3+"), rgb("+random4+","+random5+","+random6+"))"
},1000)

}

function gradientFade() {
   var gradientBody = document.getElementById('gradientBody');
// gradientBody.style.backgroundImage = "linear-gradient(rgb("+value1[0].value+","+value1[1].value+","+value1[2].value+"), rgb("+value2[0].value+","+value2[1].value+","+value2[2].value+"))";
   
    gradientBody.setAttribute('style', "linear-gradient(rgb("+value1[0].value+","+value1[1].value+","+value1[2].value+"), rgb("+value2[0].value+","+value2[1].value+","+value2[2].value+"))")
    alert(gradientBody.style.backgroundImage)
}

function addElement() {
    var randOne = Math.floor(0);
    var randTwo = Math.ceil(255);
    random1 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random2 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random3 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random4 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random5 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random6 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    
            value1[0].value = random1
            value1[1].value = random2
            value1[2].value = random3
    
            value2[0].value = random4
            value2[1].value = random5
            value2[2].value = random6
    const newDiv = document.createElement("div");
    newDiv.style = "background-color: red; padding: 1rem; margin: 5px; border: 1px solid white; background-image: linear-gradient(rgb("+random1+","+random2+","+random3+"), rgb("+random4+","+random5+","+random6+"))" 
    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }).join('')
    const hex1 = document.createTextNode(rgbToHex(random1, random2, random3));
    const hex2 = document.createTextNode(rgbToHex(random4, random5, random6));
    const linebreak = document.createElement("br")
    newDiv.appendChild(hex1)
    newDiv.appendChild(linebreak)
    newDiv.appendChild(hex2)
    
    document.getElementById('mainBody').appendChild(newDiv)
}

function SpamElement() {
    intervalId = window.setInterval(function(){
        addElement();
    },10)
}

function StopSpamElement() {
clearInterval(intervalId)
}

function coloring() {

        value1[0].value = value1[0].value + 0
        value1[1].value = value1[1].value + 1
        value1[2].value = value1[2].value + 0.1
        
        

        value2[0].value = value2[0].value - 0
        value2[1].value = value2[1].value - 0.1
        value2[2].value = value2[2].value - 1 






var box = document.getElementById('colorbox');
box.style.backgroundImage = "linear-gradient(rgb("+value1[0].value+","+value1[1].value+","+value1[2].value+"), rgb("+value2[0].value+","+value2[1].value+","+value2[2].value+"))"


}

function coloringg() {
    loop = window.setInterval(function() {
        coloring();
    },10)
}