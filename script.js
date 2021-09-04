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
const API_URL = "";
const API_KEY = "ffedebd68bmshb2009720c590987p1410f7jsneadd98150c2a";
const API_HOST = "wordsapiv1.p.rapidapi.com";

const ul = document.createElement("ul");
const WORD_INFO = document.createElement("li");

const searchSimilar = async () => {
  try {
    const respose = await fetch(
      "https://wordsapiv1.p.mashape.com/words/lovely"
    );

    const data = await Response.json();
    WORD_INFO.innerHTML = data.definition;

    console.log(WORD_INFO);
  } catch (error) {
    console.log(error);
  }
};

SEARCH_BTN.onclick = searchSimilar;
