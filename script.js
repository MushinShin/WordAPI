// const SIMILAR_BTN = document.getElementById("");
// const ANTONYMS_BTN = document.getElementById("");
// const SYNONYMS_BTN = document.getElementById("");
// const DEFINITION = document.getElementById("");
const SEARCH_BTN = document.getElementById("search_btn");
const INPUT_FIELD = document.getElementById("input");
const DISPLAY = document.getElementById("display");

// Not recomended to hard code the URL
const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const ul = document.createElement("ul");

const searchSimilar = async () => {
  try {
    const response = await fetch(`${API_URL}${INPUT_FIELD.value}`);

    const data = await response.json();

    // Meanings is an array
    // Object destructuring
    // const { meanings: meaningArray } = data[0];
    const meaningArray = [...data[0].meanings];
    meaningArray.forEach((meaning, i) => {
      const { definitions } = meaning;
      const { definition } = definitions[0];
      //   Creates dinamically li elements inside of the ul
      const WORD_INFO = document.createElement("li");
      WORD_INFO.innerHTML = definition;
      ul.appendChild(WORD_INFO);
    });

    ul.className = "def_Display";
    DISPLAY.appendChild(ul);
  } catch (error) {
    console.log(error);
  }
};

// Handles if the user presses enter when searching
const handleEnter = (event) => {
  if (event.which === 13) searchSimilar();
};

SEARCH_BTN.onclick = searchSimilar;
input.onkeyup = handleEnter;

// meaningArray.map((meaning) => {
// return {meaning.}
// })
