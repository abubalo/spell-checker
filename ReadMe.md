# TypeScript Spell Checker

This project implements Peter Norvig's well-known statistical spell-checking algorithm using TypeScript. The algorithm leverages probability-based language models to provide accurate suggestions for correcting misspelled words. By analyzing a reference corpus of text, the algorithm identifies potential corrections that are more likely to be correct in the given context.

## How the Algorithm Works

This spell-checking algorithm is based on the Levenshtein distance (edit distance) algorithm, which calculates the similarity between two words by measuring the number of single-character edits required to transform one word into another. The steps include:

1. **Building the Reference Corpus**: A diverse and representative set of text sentences is used as a reference corpus. The algorithm tokenizes and processes this corpus to build a frequency distribution of words.

2. **Generating Candidate Corrections**: For each misspelled word, a set of candidate corrections is generated. These candidates result from applying edit operations like insertion, deletion, substitution, and transposition of characters in the original word.

3. **Calculating Probabilities**: Each candidate correction's probability is calculated by considering its occurrence frequency in the reference corpus. The algorithm suggests multiple corrections, ordered by their similarity and frequency.

4. **Selecting the Best Corrections**: The algorithm provides a list of candidate corrections for the misspelled word, sorted by their similarity and frequency in the reference corpus. Users can choose from these suggestions to correct the word effectively.

With this approach, the spell checker offers multiple correction suggestions, making it more versatile in handling misspelled words.

## Features

- Efficient spell-checking using the Levenshtein distance (edit distance) algorithm
- Generates multiple suggestions for misspelled words, sorted by similarity and frequency
- Customizable reference corpus for improved accuracy
- Simple and educational TypeScript codebase

## Usage

After running the project, provide a misspelled word as input. The spell checker will suggest a list of corrections based on the reference corpus. These suggestions are ordered by their similarity to the misspelled word and their frequency in the reference corpus. Users can choose from these suggestions to correct the word effectively.

To use the spell checker:

1. Run the project:

   ```bash
   yarn start
   ```
2. Input a misspelled word when prompted.

3. Review the list of suggested corrections in the console and choose the most appropriate one.

## Customization
You can customize the spell checker by adjusting the referenceCorpus array in the index.ts file to include your own sentences. A larger and more diverse reference corpus leads to better suggestions. The spell checker will adapt to your custom reference corpus and continue to provide accurate correction suggestions based on your data.

- ****
## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/abubalo/typescript-spell-checker.git
````

## Install dependencies:

```bash
cd typescript-spell-checker
yarn install
```

Customize the referenceCorpus array in index.ts with your own sentences.

Build and run the project:

```bash
yarn start
```

## Usage

After running the project, provide a misspelled word as input.
The spell checker will suggest a correction based on the reference corpus.
The corrected word will be displayed in the console.

## Customization

Adjust the referenceCorpus array in index.ts to use your own sentences. A larger and more diverse reference corpus leads to better suggestions.

## Future Improvements

As we continue to develop this TypeScript Spell Checker project, there are several key areas I'm eager to enhance:

- [ ] **Contextual Spell Checking**:
   - I aim to make the spell checker even smarter by incorporating advanced techniques to understand the context in which words are used. This will help us distinguish between words like "there" and "their," which are correct in different contexts.

- [ ] **Auto-Correction**:
   - To provide a seamless writing experience, I plan to introduce auto-correction capabilities. This feature will automatically fix common grammatical errors, such as verb conjugation issues, ensuring that the text is always correct.

<!-- - [ ] **Advanced Language Models**:
   - I'm excited to integrate cutting-edge language models like GPT-3 and BERT into the spell checker. These models will enable us to analyze the surrounding text and provide corrections that are not just accurate but also contextually relevant. -->

<!-- - [ ] **Customization and Feedback**:
   - User feedback is invaluable, and I want to implement a feedback loop to continuously improve the spell checker's accuracy. Additionally, I aim to allow users to customize the spell checker's behavior according to their writing style and preferences. -->

- [ ] **Enhanced User Interface**:
   - A user-friendly interface is essential, so I plan to create a more intuitive and interactive user experience. This will simplify the process of inputting and reviewing corrections.

<!-- - [ ] **Integration with Existing Tools**:
   - To make the spell checker more accessible, I'm considering integrating it into popular text editors, word processors, and writing platforms. This way, users can benefit from real-time correction suggestions while working in their preferred environments. -->

## License

[MIT](/LICENSE)

