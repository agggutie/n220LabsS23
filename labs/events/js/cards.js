    function displayAnswer(event) {
        const button = event.target;
        const answer = button.dataset.answer;

        const answerDiv = document.getElementById('answer');
            answerDiv.textContent = answer;
        }
