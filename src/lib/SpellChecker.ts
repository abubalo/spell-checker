import fs from "fs";

interface ReadFile{
  spellCheckFile(filePath: string): void;
}

export default class SpellChecker implements ReadFile {
    private wordFrequency: Map<string, number>;
  
    constructor(referenceCorpus: string[]) {
      this.wordFrequency = new Map<string, number>();
      this.buildWordFrequency(referenceCorpus);
    }
  
    private buildWordFrequency(referenceCorpus: string[]): void {
      for (const sentence of referenceCorpus) {
        const words = this.tokenize(sentence);
        for (const word of words) {
          const normalizedWord = this.normalizeWord(word);
          const count = this.wordFrequency.get(normalizedWord) || 0;
          this.wordFrequency.set(normalizedWord, count + 1);
        }
      }
    }
  
    private tokenize(sentence: string): string[] {
      return sentence.toLowerCase().split(/\s+/);
    }
  
    private normalizeWord(word: string): string {
      return word.toLowerCase().replace(/[^a-z]/g, "");
    }
  
    private generateCandidates(word: string): string[] {
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const candidates: string[] = [];
  
      for (let i = 0; i < word.length; i++) {
        candidates.push(word.slice(0, i) + word.slice(i + 1)); // Deletion
        for (const char of alphabet) {
          candidates.push(word.slice(0, i) + char + word.slice(i)); // Insertion
          candidates.push(word.slice(0, i) + char + word.slice(i + 1)); // Substitution
          candidates.push(word.slice(0, i) + word.slice(i + 1) + char); // Transposition
        }
      }
  
      return candidates;
    }
  
    private getProbability(word: string): number {
      const totalCount = Array.from(this.wordFrequency.values()).reduce((sum, count) => sum + count, 0);
      const wordCount = this.wordFrequency.get(word) || 0;
      return wordCount / totalCount;
    }
  
    suggestCorrection(inputWord: string): string {
      const candidates = this.generateCandidates(inputWord);
      let bestCandidate = inputWord;
      let maxProbability = 0;
  
      for (const candidate of candidates) {
        const probability = this.getProbability(candidate);
        if (probability > maxProbability) {
          maxProbability = probability;
          bestCandidate = candidate;
        }
      }
  
      return bestCandidate;
    }

    spellCheckFile(filePath: string): void {
      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const words = this.tokenize(content);
        const misspelledWords: string[] = [];
  
        for (const word of words) {
          const normalizedWord = this.normalizeWord(word);
          if (!this.wordFrequency.has(normalizedWord)) {
            misspelledWords.push(word);
          }
        }
  
        if (misspelledWords.length === 0) {
          console.log("No misspelled words found.");
        } else {
          console.log("Misspelled words:");
          console.log(misspelledWords);
        }
      } catch (error) {
        console.error("Error reading the file:", error);
      }
    }
  }
  
  
  
  