// your code here!

$(document).ready(function() {
    $('.js-form').submit(function(event) {
        event.preventDefault();
        let userInput = $('#user-text').val();
        let onlyWords = userInput.toLowerCase().replace(/[^\w\s]/g, "");
        let wordsArray = onlyWords.split(' ')
        let totalWords = wordsArray.length;

        function uniqueWords(comparedArray) {
            let comparisonArray = []
            for (i = 0; i < comparedArray.length; i++) {
                if (!comparisonArray.includes(comparedArray[i])) {
                    comparisonArray.push(comparedArray[i]);
                }
            }
            console.log(comparisonArray);
        }
				uniqueWords(wordsArray);

    });
});
