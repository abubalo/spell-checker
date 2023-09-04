import fs from "fs";

interface ReadFile {
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

  private calculateLevenshteinDistance(word1: string, word2: string): number {
    const m = word1.length;
    const n = word2.length;
    const dp: number[][] = [];

    for (let i = 0; i <= m; i++) {
      dp[i] = [];
      for (let j = 0; j <= n; j++) {
        if (i === 0) {
          dp[i][j] = j;
        } else if (j === 0) {
          dp[i][j] = i;
        } else if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
      }
    }

    return dp[m][n];
  }

  suggestCorrections(inputWord: string): string[] {
    const candidates = this.generateCandidates(inputWord);
    const bestCandidates: string[] = [];
    let minDistance = Infinity;

    for (const candidate of candidates) {
      const distance = this.calculateLevenshteinDistance(inputWord, candidate);
      if (distance < minDistance) {
        minDistance = distance;
        bestCandidates.length = 0; // Clear the previous best candidates
      }
      if (distance === minDistance) {
        bestCandidates.push(candidate);
      }
    }

    return bestCandidates;
  }

  spellCheckFile(filePath: string): void {
    try {
      const content = fs.readFileSync(filePath, "utf-8");
      const words = this.tokenize(content);
      const misspelledWords: string[] = [];

      for (const word of words) {
        const normalizedWord = this.normalizeWord(word);
        if (!this.wordFrequency.has(normalizedWord)) {
          const suggestedCorrections = this.suggestCorrections(normalizedWord);
          misspelledWords.push(word + " => " + suggestedCorrections.join(", "));
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


