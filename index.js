

var x=0;

function valuess() {
 dog = document.getElementById("testsubject");
 hue = document.getElementById("changehue").value;
 saturation = document.getElementById("changesat").value;
 contrast = document.getElementById("changecon").value;
 tablehue = document.getElementById("huefilter");
 tablecon = document.getElementById("contrastfilter");
 tablesat = document.getElementById("saturationfilter");
 //advanced
 blure = document.getElementById("changeblur").value; //blur is already a thing, had to add an e
 invert = document.getElementById("changeinv").value;
 sepia = document.getElementById("changesep").value;
 tableinv = document.getElementById("invertfilter");
 tablesep = document.getElementById("sepiafilter");
 tableblur = document.getElementById("blurfilter");

 brightness = document.getElementById("changebright").value;
 grayscale = document.getElementById("changegray").value;

 tablegray = document.getElementById("grayfilter")
 tablebright = document.getElementById("brightfilter")
 
}

function experiment() {
valuess()


if (hue <= 0) {
hue = 0
}
if (contrast <= 0) {
contrast = 100
}
if (saturation <= 0) {
saturation = 100
}

if (blure <= 0) {
    blure = 0
}
if (invert <= 0) {
    invert = 0
}
if (sepia <= 0) {
    sepia = 0
}

if (grayscale <= 0) {
    grayscale = 0
}

if (brightness <= 0) {
    brightness = 100
}


dog.style.filter = "hue-rotate("+hue+"deg) contrast("+contrast+"%) saturate("+saturation+"%) blur("+blure+"px) invert("+invert+"%) sepia("+sepia+"%) grayscale("+grayscale+"%) brightness("+brightness+"%)";
tablehue.innerHTML = hue;
tablecon.innerHTML = contrast;
tablesat.innerHTML = saturation;
//advanced
tableinv.innerHTML = invert;
tableblur.innerHTML = blure;
tablesep.innerHTML = sepia;
tablebright.innerHTML = brightness;
tablegray.innerHTML = grayscale;

}

function changeimg() {
   
}

function clearfilter() {
    document.getElementById("testsubject").style.filter = ""
    document.getElementById("changehue").value = ""
    document.getElementById("changesat").value = ''
    document.getElementById("changecon").value = ''
    document.getElementById("huefilter").innerHTML = "0"
    document.getElementById("contrastfilter").innerHTML = "100"
    document.getElementById("saturationfilter").innerHTML = "100"
    //advanced filters
    document.getElementById("invertfilter").innerHTML = "0"
    document.getElementById("sepiafilter").innerHTML = "0"
    document.getElementById("blurfilter").innerHTML = "0"
    document.getElementById("changeblur").value = ""
    document.getElementById("changeinv").value = ""
    document.getElementById("changesep").value = ""
    document.getElementById("changegray").value = ""
    document.getElementById("changebright").value = ""
    document.getElementById("grayfilter").innerHTML = "0"
    document.getElementById("brightfilter").innerHTML = "100"
}

function randomfilter() {
   // valuess()

    random1 = Math.floor(Math.random() * 360);
    random2 = Math.floor(Math.random() * 360);
    random3 = Math.floor(Math.random() * 360);

    //advanced
    random4 = Math.floor(Math.random() * 2); //inv
    if (random4 == 1) {
        random4 = 100; //if 1 then will be inverted
    }
    else {
        random4 = 0; //if 0 then its not inverted
    }

   // random6 = Math.floor(Math.random() * 200); //brightness
   
  min = Math.ceil(50);
  max = Math.floor(200);
  random6 = Math.floor(Math.random() * (max - min + 1) + min)
    
    if (document.getElementById("allowhigh").checked) {
        random1 = Math.floor(Math.random() * 900000);
        random2 = Math.floor(Math.random() * 900000);
        random3 = Math.floor(Math.random() * 900000);
       
    }

    if (x==1) {
        document.getElementById("testsubject").style.filter = "hue-rotate("+random1+"deg) contrast("+random3+"%) saturate("+random2+"%) invert("+random4+"%)";
    }
    //for random, there is no grayscale, sepia or blur because it will most likely look like a black/white/gray blob
    else {
        document.getElementById("testsubject").style.filter = "hue-rotate("+random1+"deg) contrast("+random3+"%) saturate("+random2+"%)"
    }

    
    document.getElementById("huefilter").innerHTML = random1;
    document.getElementById("contrastfilter").innerHTML = random3;
    document.getElementById("saturationfilter").innerHTML = random2;
    document.getElementById("changehue").value = random1
    document.getElementById("changesat").value = random2
    document.getElementById("changecon").value = random3
    document.getElementById("invertfilter").innerHTML = random4;
    document.getElementById("brightfilter").innerHTML = random6;
    document.getElementById("changeinv").value = random4;
    document.getElementById("changebright").value = random6;
}

function advancedfilter() {
    if (x==1) {x=0;} else {x=1;}
   // if (x==1) {document.getElementById("advancedfilter").style.display = "flex"; document.getElementById("advfilter").style.display = "table-cell";}
   var adv = document.querySelectorAll("[id='advfilter']"); // why the f*lip does this work? NO CLUE.
   

    if (x==1) {document.getElementById("advancedfilter").style.display = "flex"; for(var i = 0; i < adv.length; i++)  adv[i].style.display='table-cell';}
    if (x==0) {document.getElementById("advancedfilter").style.display = "none"; for(var i = 0; i < adv.length; i++)  adv[i].style.display='none';}
}





function changeimg() {

const dogs = ["https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/breed_library/affenpinscher.jpg?itok=HFBGWk_x", "https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0000_afghan_hound_0.jpg?itok=vkb8L2gC", "https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0001_airedale_terrier_0.jpg?itok=dvziZunq", "https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0002_alaskan_malamute_0.jpg?itok=xJ9tGkgt", "https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2023-10/BREED%20Hero%20American%20Bulldog_0.jpg?itok=Q4ApiEXA", "https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0122_spaniel_american_cocker.jpg?itok=6tp5ZyMZ", "https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0003_anatolian_shepherd_0.jpg?itok=OuNMUJIo", "https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0004_australian_cattle_dog_0.jpg?itok=J67OtFMX", "https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0005_australian_shepherd_dog_0.jpg?itok=zc1yYpsb", "https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/breed_library/australian_silky_terrier.jpg?itok=5tlr9UrZ", "https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero%20Australian%20Terrier_0.jpg?itok=fpftBRzI", "https://www.purina.co.uk/sites/default/files/styles/nppe_breed_selector_500/public/2021-12/GettyImages-856980022%20%282%29.jpg?itok=G7IOaQPg" ] 
const random = Math.floor(Math.random() * dogs.length);
dog = (random, dogs[random]);
picture = document.getElementById('testsubject')
if (picture == dog ) {
dog = (random, dogs[random]); 
picture.src = dog;
console.log('duplicate', dog)
} else {
    picture.src = dog;
}

}
dogamt = 0;

function cehangeimg() {
const picture = document.getElementById('testsubject');
picture.src = dogs[dogamt];

dogamt = (dogamt + 1) % dogs.length;
}

var seizurehappening = false

function seizure() {
    if (seizurehappening == true) {
        seizurehappening = false;
        clearInterval(intervalId);
        document.getElementById('seizurebutton').innerText = 'Seizure'
       
    } else {
        seizurehappening = true;
        document.getElementById('seizurebutton').innerText = 'Stop Seizure'
        intervalId = window.setInterval(function(){
            randomfilter();
            }, 10);
    }
     
}
