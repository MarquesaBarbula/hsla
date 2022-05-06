// --try this color slider response

const slider = document.getElementById("new-hue-slider");
const numInput = document.getElementById("new-hue-number");
const root = document.documentElement;

slider.addEventListener("input", (e) => {
    root.style.setProperty("--try_this_color", e.target.value);
});

numInput.addEventListener("input", (e) => {
    root.style.setProperty("--try_this_color", e.target.value);
});

// --connect slider and number field
var range = document.querySelector("#new-hue-slider");
var field = document.querySelector("#new-hue-number");

range.addEventListener('input', function (e) { field.value = e.target.value; });
field.addEventListener('input', function (e) { range.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// custom color slider response

// color 1 - hue1

const sliderhue1 = document.getElementById("hue1");
const numhue1 = document.getElementById("hue1-number");
const roothue1 = document.documentElement;

sliderhue1.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_1", e.target.value);
});

numhue1.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_1", e.target.value);
});

// --connect slider and number field
var rangeHue1 = document.querySelector("#hue1");
var fieldHue1 = document.querySelector("#hue1-number");

rangeHue1.addEventListener('input', function (e) { fieldHue1.value = e.target.value; });
fieldHue1.addEventListener('input', function (e) { rangeHue1.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 1 - sat1

const sliderSat1 = document.getElementById("sat1");
const numSat1 = document.getElementById("sat1-number");
const rootSat1 = document.documentElement;

sliderSat1.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_1", e.target.value + "%");
});

numSat1.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_1", e.target.value + "%");
});

// --connect slider and number field
var rangesat1 = document.querySelector("#sat1");
var fieldsat1 = document.querySelector("#sat1-number");

rangesat1.addEventListener('input', function (e) { fieldsat1.value = e.target.value; });
fieldsat1.addEventListener('input', function (e) { rangesat1.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}

// color 1 - lig1

const sliderlig1 = document.getElementById("lig1");
const numlig1 = document.getElementById("lig1-number");
const rootlig1 = document.documentElement;

sliderlig1.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_1", e.target.value + "%");
});

numlig1.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_1", e.target.value + "%");
});

// --connect slider and number field
var rangeLig1 = document.querySelector("#lig1");
var fieldLig1 = document.querySelector("#lig1-number");

rangeLig1.addEventListener('input', function (e) { fieldLig1.value = e.target.value; });
fieldLig1.addEventListener('input', function (e) { rangeLig1.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 1 - alph1

const slideralph1 = document.getElementById("alph1");
const numalph1 = document.getElementById("alph1-number");
const rootalph1 = document.documentElement;

slideralph1.addEventListener("input", (e) => {
    root.style.setProperty("--try_a_1", e.target.value + "%");
});

numalph1.addEventListener("input", (e) => {
    root.style.setProperty("--try_a_1", e.target.value + "%");
});

// --connect slider and number field
var rangeAlph1 = document.querySelector("#alph1");
var fieldAlph1 = document.querySelector("#alph1-number");

rangeAlph1.addEventListener('input', function (e) { fieldAlph1.value = e.target.value; });
fieldAlph1.addEventListener('input', function (e) { rangeAlph1.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 2 - hue2

const sliderhue2 = document.getElementById("hue2");
const numhue2 = document.getElementById("hue2-number");
const roothue2 = document.documentElement;

sliderhue2.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_2", e.target.value);
});

numhue2.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_2", e.target.value);
});

// --connect slider and number field
var rangeHue2 = document.querySelector("#hue2");
var fieldHue2 = document.querySelector("#hue2-number");

rangeHue2.addEventListener('input', function (e) { fieldHue2.value = e.target.value; });
fieldHue2.addEventListener('input', function (e) { rangeHue2.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 2 - sat2

const slidersat2 = document.getElementById("sat2");
const numsat2 = document.getElementById("sat2-number");
const rootsat2 = document.documentElement;

slidersat2.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_2", e.target.value + "%");
});

numsat2.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_2", e.target.value + "%");
});

// --connect slider and number field
var rangeSat2 = document.querySelector("#sat2");
var fieldSat2 = document.querySelector("#sat2-number");

rangeSat2.addEventListener('input', function (e) { fieldSat2.value = e.target.value; });
fieldSat2.addEventListener('input', function (e) { rangeSat2.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 2 - lig2

const sliderlig2 = document.getElementById("lig2");
const numlig2 = document.getElementById("lig2-number");
const rootlig2 = document.documentElement;

sliderlig2.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_2", e.target.value + "%");
});

numlig2.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_2", e.target.value + "%");
});

// --connect slider and number field
var rangeLig2 = document.querySelector("#lig2");
var fieldLig2 = document.querySelector("#lig2-number");

rangeLig2.addEventListener('input', function (e) { fieldLig2.value = e.target.value; });
fieldLig2.addEventListener('input', function (e) { rangeLig2.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 2 - alph2

const slideralph2 = document.getElementById("alph2");
const numalph2 = document.getElementById("alph2-number");
const rootalph2 = document.documentElement;

slideralph2.addEventListener("input", (e) => {
    root.style.setProperty("--try_a_2", e.target.value + "%");
});

numalph2.addEventListener("input", (e) => {
    root.style.setProperty("--try_a_2", e.target.value + "%");
});

// --connect slider and number field
var rangeAlph2 = document.querySelector("#alph2");
var fieldAlph2 = document.querySelector("#alph2-number");

rangeAlph2.addEventListener('input', function (e) { fieldAlph2.value = e.target.value; });
fieldAlph2.addEventListener('input', function (e) { rangeAlph2.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 3 - hue3

const sliderhue3 = document.getElementById("hue3");
const numhue3 = document.getElementById("hue3-number");
const roothue3 = document.documentElement;

sliderhue3.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_3", e.target.value);
});

numhue3.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_3", e.target.value);
});

// --connect slider and number field
var rangeHue3 = document.querySelector("#hue3");
var fieldHue3 = document.querySelector("#hue3-number");

rangeHue3.addEventListener('input', function (e) { fieldHue3.value = e.target.value; });
fieldHue3.addEventListener('input', function (e) { rangeHue3.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 3 - sat3

const slidersat3 = document.getElementById("sat3");
const numsat3 = document.getElementById("sat3-number");
const rootsat3 = document.documentElement;

slidersat3.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_3", e.target.value + "%");
});

numsat3.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_3", e.target.value + "%");
});

// --connect slider and number field
var rangeSat3 = document.querySelector("#sat3");
var fieldSat3 = document.querySelector("#sat3-number");

rangeSat3.addEventListener('input', function (e) { fieldSat3.value = e.target.value; });
fieldSat3.addEventListener('input', function (e) { rangeSat3.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 3 - lig3

const sliderlig3 = document.getElementById("lig3");
const numlig3 = document.getElementById("lig3-number");
const rootlig3 = document.documentElement;

sliderlig3.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_3", e.target.value + "%");
});

numlig3.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_3", e.target.value + "%");
});

// --connect slider and number field
var rangeLig3 = document.querySelector("#lig3");
var fieldLig3 = document.querySelector("#lig3-number");

rangeLig3.addEventListener('input', function (e) { fieldLig3.value = e.target.value; });
fieldLig3.addEventListener('input', function (e) { rangeLig3.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 3 - alph3

const slideralph3 = document.getElementById("alph3");
const numalph3 = document.getElementById("alph3-number");
const rootalph3 = document.documentElement;

slideralph3.addEventListener("input", (e) => {
    root.style.setProperty("--try_a_3", e.target.value + "%");
});

numalph3.addEventListener("input", (e) => {
    root.style.setProperty("--try_a_3", e.target.value + "%");
});

// --connect slider and number field
var rangeAlph3 = document.querySelector("#alph3");
var fieldAlph3 = document.querySelector("#alph3-number");

rangeAlph3.addEventListener('input', function (e) { fieldAlph3.value = e.target.value; });
fieldAlph3.addEventListener('input', function (e) { rangeAlph3.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 4 - hue4

const sliderhue4 = document.getElementById("hue4");
const numhue4 = document.getElementById("hue4-number");
const roothue4 = document.documentElement;

sliderhue4.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_4", e.target.value);
});

numhue4.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_4", e.target.value);
});

// --connect slider and number field
var rangeHue4 = document.querySelector("#hue4");
var fieldHue4 = document.querySelector("#hue4-number");

rangeHue4.addEventListener('input', function (e) { fieldHue4.value = e.target.value; });
fieldHue4.addEventListener('input', function (e) { rangeHue4.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 4 - sat4

const slidersat4 = document.getElementById("sat4");
const numsat4 = document.getElementById("sat4-number");
const rootsat4 = document.documentElement;

slidersat4.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_4", e.target.value + "%");
});

numsat4.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_4", e.target.value + "%");
});

// --connect slider and number field
var rangeSat4 = document.querySelector("#sat4");
var fieldSat4 = document.querySelector("#sat4-number");

rangeSat4.addEventListener('input', function (e) { fieldSat4.value = e.target.value; });
fieldSat4.addEventListener('input', function (e) { rangeSat4.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 4 - lig4

const sliderlig4 = document.getElementById("lig4");
const numlig4 = document.getElementById("lig4-number");
const rootlig4 = document.documentElement;

sliderlig4.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_4", e.target.value + "%");
});

numlig4.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_4", e.target.value + "%");
});

// --connect slider and number field
var rangeLig4 = document.querySelector("#lig4");
var fieldLig4 = document.querySelector("#lig4-number");

rangeLig4.addEventListener('input', function (e) { fieldLig4.value = e.target.value; });
fieldLig4.addEventListener('input', function (e) { rangeLig4.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 4 - alph4

const slideralph4 = document.getElementById("alph4");
const numalph4 = document.getElementById("alph4-number");
const rootalph4 = document.documentElement;

slideralph4.addEventListener("input", (e) => {
    root.style.setProperty("--try_a_4", e.target.value + "%");
});

numalph4.addEventListener("input", (e) => {
    root.style.setProperty("--try_a_4", e.target.value + "%");
});

// --connect slider and number field
var rangeAlph4 = document.querySelector("#alph4");
var fieldAlph4 = document.querySelector("#alph4-number");

rangeAlph4.addEventListener('input', function (e) { fieldAlph4.value = e.target.value; });
fieldAlph4.addEventListener('input', function (e) { rangeAlph4.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 5 - hue5

const sliderhue5 = document.getElementById("hue5");
const numhue5 = document.getElementById("hue5-number");
const roothue5 = document.documentElement;

sliderhue5.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_5", e.target.value);
});

numhue5.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_5", e.target.value);
});

// --connect slider and number field
var rangeHue5 = document.querySelector("#hue5");
var fieldHue5 = document.querySelector("#hue5-number");

rangeHue5.addEventListener('input', function (e) { fieldHue5.value = e.target.value; });
fieldHue5.addEventListener('input', function (e) { rangeHue5.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 5 - sat5

const slidersat5 = document.getElementById("sat5");
const numsat5 = document.getElementById("sat5-number");
const rootsat5 = document.documentElement;

slidersat5.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_5", e.target.value + "%");
});

numsat5.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_5", e.target.value + "%");
});

// --connect slider and number field
var rangeSat5 = document.querySelector("#sat5");
var fieldSat5 = document.querySelector("#sat5-number");

rangeSat5.addEventListener('input', function (e) { fieldSat2.value = e.target.value; });
fieldSat5.addEventListener('input', function (e) { rangeSat2.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 5 - lig5

const sliderlig5 = document.getElementById("lig5");
const numlig5 = document.getElementById("lig5-number");
const rootlig5 = document.documentElement;

sliderlig5.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_5", e.target.value + "%");
});

numlig5.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_5", e.target.value + "%");
});

// --connect slider and number field
var rangeLig4 = document.querySelector("#lig4");
var fieldLig4 = document.querySelector("#lig4-number");

rangeLig4.addEventListener('input', function (e) { fieldLig4.value = e.target.value; });
fieldLig4.addEventListener('input', function (e) { rangeLig4.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 5 - alph5

const slideralph5 = document.getElementById("alph5");
const numalph5 = document.getElementById("alph5-number");
const rootalph5 = document.documentElement;

slideralph5.addEventListener("input", (e) => {
    root.style.setProperty("--try_a_5", e.target.value + "%");
});

numalph5.addEventListener("input", (e) => {
    root.style.setProperty("--try_a_5", e.target.value + "%");
});

// --connect slider and number field
var rangeAlph5 = document.querySelector("#alph5");
var fieldAlph5 = document.querySelector("#alph5-number");

rangeAlph5.addEventListener('input', function (e) { fieldAlph5.value = e.target.value; });
fieldAlph5.addEventListener('input', function (e) { rangeAlph5.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}

// color 6 - hue6

const sliderhue6 = document.getElementById("hue6");
const numhue6 = document.getElementById("hue6-number");
const roothue6 = document.documentElement;

sliderhue6.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_6", e.target.value);
});

numhue6.addEventListener("input", (e) => {
    root.style.setProperty("--try_h_6", e.target.value);
});

// --connect slider and number field
var rangeHue6 = document.querySelector("#hue6");
var fieldHue6 = document.querySelector("#hue6-number");

rangeHue6.addEventListener('input', function (e) { fieldHue6.value = e.target.value; });
fieldHue6.addEventListener('input', function (e) { rangeHue6.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 6 - sat6

const slidersat6 = document.getElementById("sat6");
const numsat6 = document.getElementById("sat6-number");
const rootsat6 = document.documentElement;

slidersat6.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_6", e.target.value + "%");
});

numsat6.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_6", e.target.value + "%");
});

// --connect slider and number field
var rangeSat6 = document.querySelector("#sat6");
var fieldSat6 = document.querySelector("#sat6-number");

rangeSat6.addEventListener('input', function (e) { fieldSat2.value = e.target.value; });
fieldSat6.addEventListener('input', function (e) { rangeSat2.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 6 - lig6

const sliderlig6 = document.getElementById("lig5");
const numlig6 = document.getElementById("lig6-number");
const rootlig6 = document.documentElement;

sliderlig6.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_5", e.target.value + "%");
});

numlig6.addEventListener("input", (e) => {
    root.style.setProperty("--try_l_6", e.target.value + "%");
});

// --connect slider and number field
var rangeLig6 = document.querySelector("#lig6");
var fieldLig6 = document.querySelector("#lig6-number");

rangeLig6.addEventListener('input', function (e) { fieldLig6.value = e.target.value; });
fieldLig6.addEventListener('input', function (e) { rangeLig6.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}


// color 6 - alph6

const slideralph6 = document.getElementById("alph6");
const numalph6 = document.getElementById("alph6-number");
const rootalph6 = document.documentElement;

slideralph6.addEventListener("input", (e) => {
    root.style.setProperty("--try_a_5", e.target.value + "%");
});

numalph6.addEventListener("input", (e) => {
    root.style.setProperty("--try_a_6", e.target.value + "%");
});

// --connect slider and number field
var rangeAlph6 = document.querySelector("#alph6");
var fieldAlph6 = document.querySelector("#alph6-number");

rangeAlph6.addEventListener('input', function (e) { fieldAlph6.value = e.target.value; });
fieldAlph6.addEventListener('input', function (e) { rangeAlph6.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);
}
