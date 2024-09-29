export function replaceBracketedWords(paragraph: string, replacements: string[]): string {
    // Regular expression to match words in brackets
    const bracketedWordPattern = /\[(.*?)\]/g;

    // Find all bracketed words
    let index = 0; // To keep track of replacement words

    // Replace function for each match
    const result = paragraph.replace(bracketedWordPattern, (fullMatch, word) => {
        if (index < replacements.length) {
            // If the replacement is the same as the original bracketed word, keep the brackets
            // if (replacements[index] === `[${word}]`) {
            //     return fullMatch;
            // }
            // Otherwise, use the replacement word without brackets
            return replacements[index++];
        } else {
            // If no more replacements, keep the original bracketed word
            return fullMatch;
        }
    });

    return result;
}

export function extractBracketedWords(paragraph: string): string[] {
    // Regular expression to match words inside brackets
    const bracketedWordPattern = /\[(.*?)\]/g;

    // Array to store the extracted words
    const wordsInBrackets = [];

    // Use the exec method to find all matches
    let match;
    while ((match = bracketedWordPattern.exec(paragraph)) !== null) {
        // match[1] contains the word inside the brackets
        wordsInBrackets.push(match[1]);
    }

    return wordsInBrackets;
}
