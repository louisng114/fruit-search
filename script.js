const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const wingdingsBtn = document.querySelector('button.wingdings-mode');
const searchContainer = document.querySelector('.search-container');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	results = fruit.filter((value) => {
		return value.toLocaleLowerCase().includes(str.toLocaleLowerCase());
	});

	return results;		// generate results for suggestions
};

function searchHandler(e) {
	if (input.value === "") {
		suggestions.innerHTML = "";		// clear suggestions when input field is empty
	} else {
		showSuggestions(search(input.value).slice(0,5), input.value);		// get the first 5 matches.
	}
};

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = "";
	results.forEach((element) => {
		const newLi = document.createElement("li");
		const boldPosition = element.toLocaleLowerCase().indexOf(inputVal.toLocaleLowerCase());

		newLi.innerHTML = element.slice(0, boldPosition)
			+ "<b>"
			+ element.slice(boldPosition, boldPosition + inputVal.length)
			+ "</b>"
			+ element.slice(boldPosition + inputVal.length);		// bold the inputted substring

		suggestions.append(newLi);
	});
};

function useSuggestion(e) {
	if (e.target.tagName === "LI") {
		input.value = e.target.textContent;
		suggestions.innerHTML = "";
	} else if (e.target.parentElement.tagName === "LI") {		// register clicks on letters with <b> tag
		input.value = e.target.parentElement.textContent;
		suggestions.innerHTML = "";
	};
};

function toggleWingdings() {		// add whimsy
	input.classList.toggle("wingdings-mode");
	searchContainer.classList.toggle("wingdings-mode");
	if (input.classList.contains("wingdings-mode")){
		wingdingsBtn.innerHTML = "Good choice :)";
	} else {
		wingdingsBtn.innerHTML = "Why? D:";
	};
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
wingdingsBtn.addEventListener('click', toggleWingdings);