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


// color 1 - sat1

const slidersat1 = document.getElementById("sat1");
const numsat1 = document.getElementById("sat1-number");
const rootsat1 = document.documentElement;

slidersat1.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_1", e.target.value + "%");
});

numsat1.addEventListener("input", (e) => {
    root.style.setProperty("--try_s_1", e.target.value + "%");
});

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