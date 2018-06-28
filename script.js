document.getElementById("countButton").onclick = function () {
    let wordsCounts = {};
    let letterCounts = {};
    var typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    // This changes all the letter to lower case.

    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    words = typedText.split(/\s/);
    // This gets rid of all the characters except letters, spaces, and apostrophes.
    // We will learn more about how to use the replace function in an upcoming lesson.

    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
        // do something for each letter.
    }
    for (letter in letterCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }

    for (let i = 0; i < words.length; i++) {
        currentWord = words[i];
        if (wordsCounts[currentWord] === undefined) {
            wordsCounts[currentWord] = 1;
        } else {
            wordsCounts[currentWord]++;
        }
    }
    for (word in wordsCounts) {
        let span = document.createElement("span");
        let wordContent = document.createTextNode('"' + word + "\": " + wordsCounts[word] + ", ");
        span.appendChild(wordContent);
        document.getElementById("wordsDiv").appendChild(span);
    }
}