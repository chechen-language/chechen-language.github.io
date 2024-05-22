import * as mod from './translit.js';

function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function updateQueryParameter(name, value) {
  const url = new URL(window.location.href);
  url.searchParams.set(name, value);
  window.history.replaceState(null, null, url);
}

function handleTransliteration() {
  const input = document.getElementById('transliteration-input').value;
  const words = input.split(' '); // Split input into words
  const transliteratedWords = words.map(word => mod.apply(word)); // Transliterate each word
  const output = transliteratedWords.join(' '); // Join transliterated words into a single string
  document.getElementById('transliteration-output').textContent = output;
  updateQueryParameter('text', input);
}

document.getElementById('transliterate-button').addEventListener('click', handleTransliteration);

// Update query parameter on input change
document.getElementById('transliteration-input').addEventListener('input', (event) => {
  updateQueryParameter('text', event.target.value);
});

// On page load, check for the query parameter and set the input value if present
document.addEventListener('DOMContentLoaded', () => {
  const inputText = getQueryParameter('text');
  if (inputText) {
    document.getElementById('transliteration-input').value = decodeURIComponent(inputText);
    handleTransliteration(); // Transliterate the pre-filled input
  }
});