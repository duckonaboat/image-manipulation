

function changecolor() {
var randOne = Math.floor(1);
var randTwo = Math.ceil(360);
random = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
var box = document.getElementById('dogbox');
box.style.filter = "hue-rotate("+random+"deg)"
}

//default variables
let speed = 100
value = 0
newvalue = 0
filtermode = 'hue-rotate'
unit = 'deg'

//sets the mode and unit for each filter
function contraston() {
    filtermode = 'contrast';
    unit = '%';
    document.getElementById('filterModeLabel').innerHTML = filtermode;
    if (newvalue == 0) {
        document.getElementById('valueCounter').innerHTML = 100;
    }
    

}

function sepia() {
    filtermode = 'sepia';
    unit = '%';
    document.getElementById('filterModeLabel').innerHTML = filtermode;
    document.getElementById('valueCounter').innerHTML = newvalue;

}
function invert() {
    filtermode = 'invert';
    unit = '%';
    document.getElementById('filterModeLabel').innerHTML = filtermode;
    document.getElementById('valueCounter').innerHTML = newvalue;

}
function grayscale() {
    filtermode = 'grayscale';
    unit = '%';
    document.getElementById('filterModeLabel').innerHTML = filtermode;
    document.getElementById('valueCounter').innerHTML = newvalue;

}

function saturation() {
    filtermode = 'saturate';
    unit = '%';
    document.getElementById('filterModeLabel').innerHTML = filtermode;
    if (newvalue == 0) {
        document.getElementById('valueCounter').innerHTML = 100;
    }

}

function huerotate() {
    filtermode = 'hue-rotate';
    unit = 'deg';
    document.getElementById('filterModeLabel').innerHTML = filtermode;
    document.getElementById('valueCounter').innerHTML = newvalue;

}

function brightness() {
    filtermode = 'brightness';
    unit = '';
    value = 0

}



function colorspeed() {
    speed = document.getElementById('colorspeed').value;
    splabel = document.getElementById('currentSpeed');
    splabel.innerHTML = ""+speed+" milisecond delay"
    // speed = Math.floor(parseFloat(speed)); 
}



function ordercolor() {
intervalId = window.setInterval(function(){
        if (newvalue < 1) {
            newvalue = value + 1
            } else {
                newvalue = newvalue + 1
            }
    
       

       
        if (filtermode == 'hue-rotate') {
            if (newvalue > 360) {
                newvalue = 1
            }
        } 
        if (filtermode == 'contrast') {
            if (newvalue > 499) {
                newvalue = 1
            }
        } 
        if (filtermode == 'sepia') {
            if (newvalue > 499) {
                newvalue = 1
            }
        } 
        if (filtermode == 'invert') {
            if (newvalue > 99) {
                newvalue = 0
            }
        } 
        if (filtermode == 'grayscale') {
            if (newvalue > 99) {
                newvalue = 0
            }
        } 
        
        var box = document.getElementById('dogbox');
        box.style.filter = ""+filtermode+"("+newvalue+""+unit+")";
        console.log(value)
        document.getElementById('valueCounter').innerHTML = newvalue;
        document.getElementById('filterModeLabel').innerHTML = filtermode;
    }, speed)
    document.getElementById('seizureButton').style.display = 'none'
  document.getElementById('stopSeizureButton').style.display = 'inline-block'
  
}


function seizure() {
    intervalId = window.setInterval(function(){
        changecolor();
      }, 10);
      document.getElementById('seizureButton').style.display = 'none';
      document.getElementById('stopSeizureButton').style.display = 'inline-block';

    }

function stopseizure() {
    clearInterval(intervalId)
    document.getElementById('seizureButton').style.display = 'inline-block';
      document.getElementById('stopSeizureButton').style.display = 'none';
}

function resetSeizure() {
    if (document.getElementById('seizureButton').style.display == 'none') {
        clearInterval(intervalId)
    }
    var box = document.getElementById('dogbox');
    document.getElementById('seizureButton').style.display = 'inline-block';
      document.getElementById('stopSeizureButton').style.display = 'none';
    
    if (filtermode == 'contrast' || filtermode == 'saturation') {
        groundValue = 100
        box.style.filter = ""+filtermode+"("+groundValue+""+unit+")";
    } else {
        groundValue = 0
        box.style.filter = ""+filtermode+"("+groundValue+""+unit+")";
    }
    document.getElementById('valueCounter').innerHTML = groundValue;
    cusvalue  = document.getElementById('custom').value = '';
}

function customvalue() {
    var box = document.getElementById('dogbox');
    cusvalue  = document.getElementById('custom').value;
    box.style.filter = ""+filtermode+"("+cusvalue+""+unit+")";
    document.getElementById('valueCounter').innerHTML = cusvalue;
    if (filtermode == 'contrast' || filtermode == 'saturation') {
        if (document.getElementById('valueCounter').innerHTML == '') {
            document.getElementById('valueCounter').innerHTML = '100';
            box.style.filter = ""+filtermode+"("+100+""+unit+")";
        }
    } else { (document.getElementById('valueCounter').innerHTML == '') 
        document.getElementById('valueCounter').innerHTML = '0';
       
    }
   
}

function customImage() {
    var cusimage = document.getElementById('customPicture');
    var imagebox = document.getElementById('customImg');
    //add check later

    cusimage.src = imagebox.value;
    cusimage.style.display = 'flex';
    if (imagebox.value == '') {
    cusimage.style.display = 'none';
    }
}

function clearCustom() {
var cusimage = document.getElementById('customPicture');
var imagebox = document.getElementById('customImg');
imagebox.value = '';
cusimage.src = '';
cusimage.style.display = 'none';
}

function customMutipleFilters() {
    var box = document.getElementById('dogbox');
    huerotate = document.getElementById('customHue').value; 
    contraston = document.getElementById('customContrast').value;  
    saturation = document.getElementById('customSaturation').value;  
    sepia = document.getElementById('customSepia').value;  
    grayscale = document.getElementById('customGray').value;  
    invert = document.getElementById('customInvert').value;  

    if (huerotate == '') {
huerotate = '0'
    }
    if (contraston == '') {
contraston = '100'
    }
    if (saturation == '') {
saturation = '100'
    }
    if (sepia == '') {
sepia = '0'
    }
    if (grayscale == '') {
grayscale = '0'
    }
    if (invert == '') {
invert = '0'
    }
    box.style.filter = "hue-rotate("+huerotate+"deg) contrast("+contraston+"%) saturate("+saturation+"%) sepia("+sepia+"%) grayscale("+grayscale+"%) invert("+invert+"%)" ;

}

function clearAllFilters() {
    var box = document.getElementById('dogbox');
    huerotate = document.getElementById('customHue')
    contraston = document.getElementById('customContrast') 
    saturation = document.getElementById('customSaturation') 
    sepia = document.getElementById('customSepia')
    grayscale = document.getElementById('customGray')  
    invert = document.getElementById('customInvert')  

    huerotate.value = ''
    contraston.value = ''
    saturation.value = ''
    sepia.value = ''
    grayscale.value = ''
    invert.value = ''

    box.style.filter = 'none';
}