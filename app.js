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
            return comparisonArray.length;
        }

        function averageWordLength(averageArray){
        	let sum = 0;
        	let average = 0;

        	for(i=0;i<averageArray.length;i++) {
        		sum += averageArray[i].length;
        	}
        		average = sum / averageArray.length;
        		return average.toFixed(2);

        }
				function putItAllTogether() {
					$('.js-word-count').text(totalWords);
					$('.js-unique-word-count').text(uniqueWords(wordsArray));
					$('.js-average-word-length').text(averageWordLength(wordsArray));
					$('.text-report').removeClass('hidden')
				}

				putItAllTogether();


    });
});
