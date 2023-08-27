import SpellChecker from "../src/lib/SpellChecker"


// Example usage
const referenceCorpus = [
    "the quick brown fox jumps over the lazy dog",
    "apple banana cherry",
    // Add more sentences to the reference corpus
  ];
  
  const spellChecker = new SpellChecker(referenceCorpus);
  
  const userInput = "aple"; // Misspelled word
  const suggestedCorrection = spellChecker.suggestCorrection(userInput);
  console.log(`Suggested correction: ${suggestedCorrection}`);