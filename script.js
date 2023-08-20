const inputText = document.querySelector("#text-input");
const suggestionContainer = document.querySelector(".container"); // Corrected typo in class name

const dictionary = {}; // Changed from async function since it's not asynchronous

// Example dictionary of correct words
const correctWords = ["example", "dictionary", "correct", "words"];

for (const word of correctWords) {
    dictionary[word.toLowerCase()] = true;
}
console.log(dictionary);

const isInDictionary = (word) => {
    return !!dictionary[word.toLowerCase()]; // Simplified dictionary check
};

inputText.addEventListener("input", (e) => {
    const text = inputText.value;
    const words = text.split(/\s+/);

    suggestionContainer.innerHTML = ""; // Clear previous suggestions

    for (const word of words) {
        const trimmedWord = word.trim();
        
        if (!trimmedWord) {
            continue; // Skip empty words
        }

        const isWordInDictionary = isInDictionary(trimmedWord);

        if (!isWordInDictionary) {
            const suggestion = getSuggestion(trimmedWord);
            suggestionContainer.innerHTML += `<span class="suggestion">${suggestion}</span>`;
        }
    }
});

const getSuggestion = (word) => {
    // TODO: Implement your suggestion logic here
    return "suggested"; // TODO:  Replace with actual suggestion logic
};
