// Jesper Engström FEND16, examination Foodie 24/11 2016

// array av objekt med maträtter, deras url, veg true/false och bildadress.

var dishes = [
    { name: "Plättar med sylt & grädde", veg: true, url: "http://www.spisa.nu/3.12981/recept/pannkakorplattar-med-sylt-och-gradde/", image: "http://www.spisa.nu/recipeImages/ri_12981_3.jpg"},
    { name: "Köttbullar med potatismos, gräddsås och stekt lök", veg: false, url: "https://www.landleyskok.se/recept/hemlagade-kottbullar.html/", image:"https://www.landleyskok.se/wp-content/uploads/2012/06/kottbullar_IMG_3376.jpg"},
    { name: "Baconinlindad kycklingfile", veg: false, url: "https://www.kokaihop.se/recept/baconinlindad-kycklingfile-2", image: "https://res.cloudinary.com/hufennija/image/upload/f_auto,q_50,fl_progressive,w_790,h_460,c_fill/27127210.jpg"},
    { name: "Pannbiff med löksky", veg: false, url: "http://www.tasteline.com/recept/pannbiff-med-loksky/", image: "http://cdn1.tasteline.com/6190_pannbiffmedloksky-360x360.jpg"},
    { name: "Pasta carbonara", veg: false, url: "https://www.recepten.se/recept/pasta_carbonara.html", image: "https://www.recepten.se/bilder/recept/292/main/m/pasta_carbonara.jpg"},
    { name: "Rårakor", veg: true, url: "http://www.koket.se/raraka-grundrecept", image: "https://img.koket.se/media/raraka-grundrecept.jpg"},
    { name: "Falukorv med kryddig tomatsalsa och mos", veg: false, url: "https://www.landleyskok.se/recept/falukorv-med-kryddig-tomatsas-och-mos.html/", image: "https://www.landleyskok.se/wp-content/uploads/2015/12/falukorviugn_IMG_1369.jpg"},
    { name: "Lasagne med köttfärssås", veg: false, url: "http://www.koket.se/lasagne-med-kottfarssas", image: "https://img.koket.se/media/lasagne-med-kottfarssas.jpg"},
    { name: "Majsplättar med avokadoröra", veg: true, url: "https://www.mathem.se/recept/mattias-majsplattar-med-avokado-chimichurri", image: "https://static.mathem.se/shared/images/recipes/doublelarge/majsplattar_v41_mathem.jpeg"}, 
    { name: "Lasagne med halloumi, spenat och pumpakärnor", veg: true, url: "http://www.ica.se/recept/lasagne-med-halloumi-spenat-och-pumpakarnor-718382/", image: "http://www.ica.se/imagevaultfiles/id_106734/cf_1286/lasagne-med-halloumi-spenat-och-pumpakarnor-718382.png"},
    { name: "Rödbetsrisotto med hyvlad halloumi och valnötter", veg: true, url: "http://www.ica.se/recept/rodbetsrisotto-med-hyvlad-halloumi-och-valnotter-720045/", image: "http://www.ica.se/imagevaultfiles/id_132144/cf_1286/rodbetsrisotto-med-hyvlad-haloumi-och-valnotter-v8.jpg"},
    { name: "Indisk linssoppa ”Mulligatawny”", veg: true, url: "http://www.ica.se/recept/indisk-linssoppa-mulligatawny-718554/", image: "http://www.ica.se/imagevaultfiles/id_109810/cf_1286/indisk-linssoppa-mulligatawny-718554.png"},
    { name: "Falafel med hummus, yoghurtdressing och rödlök", veg: true, url: "http://www.ica.se/recept/falafel-med-hummus-yoghurtdressing-och-picklad-rodlok-717166/", image: "http://www.ica.se/imagevaultfiles/id_87862/cf_1286/falafel-med-hummus-yoghurtdressing-och-picklad-r-d.jpg"},
    { name: "Vegetarisk pastagratäng", veg: true, url: "https://www.landleyskok.se/recept/vegetarisk-pastagratang.html/", image: "https://www.landleyskok.se/wp-content/uploads/2016/07/pastagratang-0D5A3732-main.jpg"},
    { name: "Morotsbiffar", veg: true, url: "http://www.tasteline.com/recept/morotsbiffar-med-dragon/", image: "http://cdn1.tasteline.com/morotsbiffar_med_dragon.jpg"},
    { name: "Chipotle Chilipizza", veg: true, url: "http://www.koket.se/vegetariska-chipotle-chilipizzor", image: "https://img.koket.se/desktop/felix-mini-chipotle-chili-pizza.jpg"},
    { name: "Ugnsstekt falukorv med rostade rotsaker", veg: false, url: "http://www.ica.se/recept/ugnsstekt-falukorv-med-rostade-rotfrukter-713615/", image: "http://www.ica.se/imagevaultfiles/id_33702/cf_1286/ugnsstekt-falukorv-med-rostade-rotfrukter.jpg"},
    { name: "Biff teriyaki", veg: false, url: "http://www.arla.se/recept/biff-teriyaki", image: "https://cdn.rdb.arla.com/Files/arla-se/4220609831/5625331d-c195-4ae6-9c65-5d1283a9abb2.jpeg"},
    { name: "Coq Au Vin", veg: false, url: "http://www.foodnetwork.com/recipes/ina-garten/coq-au-vin-recipe4.html", image: "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2008/2/1/0/IG1005_Coq_Au_Vin.jpg.rend.sni12col.landscape.jpeg"},
    { name: "Halstrad tonfisk med avokadohummus", veg: false, url: "http://www.ica.se/recept/halstrad-tonfisk-med-avokadohummus-719975/", image: "http://www.ica.se/imagevaultfiles/id_131212/cf_1286/halstrad-tonfisk-med-avokadohummus-719975.jpg"},

];

//några variabler här...

var checkbox = document.getElementById("vego");
var displayElement = document.getElementById("dish");			
var setImage = document.getElementById("pic");
var dishImg = document.getElementById("imgLink");
var filteredDishes;

//Event handlers som visar en slumpad rätt när sidan laddas + när man klickar på knappen.

window.addEventListener("DOMContentLoaded", getRandomDish);
document.getElementById("myButton").addEventListener("click", getRandomDish);

//Funktion som kollar om checkboxen är kryssad och sedan hämtar en slumpad rätt från arrayen (veg eller vilken som helst)

function getRandomDish() {
	if (checkbox.checked) {
		filteredDishes = dishes.filter(getVegDish);
		}
	else filteredDishes = dishes;
	var randomDish = filteredDishes[Math.floor(Math.random() * filteredDishes.length)];	
	displayDish(randomDish);										
}

//funktion som skriver ut maträtten, länk bild mm på skärmen.

function displayDish(x) {
	displayElement.href = x.url;
	displayElement.innerHTML = x.name + "!";
	setImage.src = x.image;
	dishImg.href = x.url;
}

//hjälpfunktion till array.filter() - returnerar endast veg-rätter

function getVegDish(val) {
	if (val.veg === true)
		return val;
}



