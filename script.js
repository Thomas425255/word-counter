// Function to count words
function countWords(text) {
    return text.split(/\s+/).filter(Boolean).length;
}

// Function to count sentences
function countSentences(text) {
    return text.split(/[.!?]/).filter(Boolean).length;
}

// Function to count lines
function countLines(text) {
    return text.split("\n").length;
}

// Function to find the longest word
function findLongestWord(text) {
    let words = text.split(/\s+/).filter(Boolean);
    let longest = words.reduce((a, b) => a.length > b.length ? a : b, "");
    return longest;
}

// Function to calculate average word length
function averageWordLength(text) {
    let words = text.split(/\s+/).filter(Boolean);
    let totalLength = words.reduce((sum, word) => sum + word.length, 0);
    return words.length > 0 ? (totalLength / words.length).toFixed(2) : 0;
}

// Update results dynamically
function updateResults() {
    let inputText = document.getElementById('inputText').value;

    // Update counters
    document.getElementById('wordCountResult').textContent = countWords(inputText);
    document.getElementById('sentenceCountResult').textContent = countSentences(inputText);
    document.getElementById('lineCountResult').textContent = countLines(inputText);
    document.getElementById('longestWordResult').textContent = findLongestWord(inputText);
    document.getElementById('averageWordLength').textContent = averageWordLength(inputText);
}

// Event listeners for buttons
document.getElementById('wordCountBtn').addEventListener('click', updateResults);
document.getElementById('sentenceCountBtn').addEventListener('click', updateResults);
document.getElementById('lineCountBtn').addEventListener('click', updateResults);

// Real-time count updates as the user types
document.getElementById('inputText').addEventListener('input', updateResults);

// Reset functionality
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('wordCountResult').textContent = '0';
    document.getElementById('sentenceCountResult').textContent = '0';
    document.getElementById('lineCountResult').textContent = '0';
    document.getElementById('longestWordResult').textContent = 'N/A';
    document.getElementById('averageWordLength').textContent = '0';
}); document.