// const SIMILAR_BTN = document.getElementById("");
// const ANTONYMS_BTN = document.getElementById("");
// const SYNONYMS_BTN = document.getElementById("");
// const DEFINITION = document.getElementById("");
const SEARCH_BTN = document.getElementById("search_btn");
const INPUT_FIELD = document.getElementById("input");

// Search Filter Options
const SIMILAR_TO = "similarTo";
const ANTONYMS = "antonyms";
const SYNONYMS = "synonyms";
const DEFINITION = "definitions";

// Not Recommended to hard code the api "key account"
const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";

const ul = document.createElement("ul");
const WORD_INFO = document.createElement("li");

const searchSimilar = async () => {
  try {
    const response = await fetch(`${API_URL}`);

    const data = await response.json();
    WORD_INFO.innerHTML = data.definition;

    console.log(WORD_INFO);
  } catch (error) {
    console.log(error);
  }
};

SEARCH_BTN.onclick = searchSimilar;
