# TypeScript Spell Checker

This project implements Peter Norvig's well-known statistical spell-checking algorithm using TypeScript. The algorithm leverages probability-based language models to provide accurate suggestions for correcting misspelled words. By analyzing a reference corpus of text, the algorithm identifies potential corrections that are more likely to be correct in the given context.

## How the Algorithm Works

The algorithm's core idea is to calculate the probability of a given word being correctly spelled, based on its proximity to other words in a reference corpus. The steps include:

1. **Building the Reference Corpus**: A diverse and representative set of text sentences is used as a reference corpus. The algorithm tokenizes and processes this corpus to build a frequency distribution of words.

2. **Generating Candidate Corrections**: For each misspelled word, a set of candidate corrections is generated. These candidates result from simple edit operations like insertion, deletion, substitution, and transposition of characters in the original word.

3. **Calculating Probabilities**: Each candidate correction's probability is calculated by considering its occurrence frequency in the reference corpus. The higher the probability, the more likely the correction is to be correct in the given context.

4. **Selecting the Best Correction**: The algorithm suggests the candidate correction with the highest probability as the recommended correction for the misspelled word.
## Features

- Efficient spell checking using Peter Norvig's algorithm
- Generates suggestions for misspelled words
- Customizable reference corpus for improved accuracy
- Simple and educational TypeScript codebase

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/abubalo/typescript-spell-checker.git
```
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
Customization
Adjust the referenceCorpus array in index.ts to use your own sentences. A larger and diverse reference corpus leads to better suggestions.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

> This implementation is based on the algorithm described in Peter Norvig's article "[How to Write a Spelling Corrector.](http://norvig.com/spell-correct.html)"