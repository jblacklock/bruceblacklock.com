    var slideNumber = 1;
    var questionNumber = 1;
    var answerInput = document.getElementById("answer");
    var nextDiv = document.getElementById("nextDiv");
    var answerDiv = document.getElementById("answerDiv");
    var ImageDiv = document.getElementById("mainImage");
    var RestartDiv = document.getElementById("restartDiv");
    var answerArray = [["658"], ["482"], ["900"], ["1401", "1,401"]];
    var imageArray = ["DS1.png", "DS2.png", "DS3.png", "DS4.png", "DS5.png", "DS6.png", "DS7.png", "DS8.png"];
    var gameOverImage = "DS9.png"
    var incorrectAnswers = 0;
    var slidesWithQuestionsArray = [4, 5, 6, 7];

    function SubmitAnswer(element) {
        if (event.key === 'Enter') {
            CheckAnswer(element.value)
        }
    }

    function nextSlide() {
        answerDiv.style.display = "none";
        nextDiv.style.display = "none";
        restartDiv.style.display = "none";
        ImageDiv.src = imageArray[slideNumber]
        if (slidesWithQuestionsArray.includes(slideNumber + 1)) {
            answerDiv.style.display = "block";
        }
        else {
            if (slideNumber <= imageArray.length - 2) {
                nextDiv.style.display = "block";
            }
            else {
                document.getElementById("homeDiv").style.display = "block";
            }
        }
        slideNumber++;
    }


    function CheckAnswer(answer) {
        if (answerArray[questionNumber - 1].includes(answer)) {
            questionNumber++;
            answerInput.value = '';
            nextSlide();
            correct.play();
            return;
        }
        else {
            wrong.play();
            var img = document.createElement("img");
            img.src = "Xes.png";
            img.style.width = "50px";
            img.style.height = "50px";
            var src = document.getElementById("Xsection");
            src.appendChild(img);
            incorrectAnswers++;
            console.log(incorrectAnswers);
            if (incorrectAnswers > 2) {
                questionNumber = 1;
                incorrectAnswers = 0;
                slideNumber = 0;
                answerInput.value = '';
                ImageDiv.src = gameOverImage;
                answerDiv.style.display = "none";
                nextDiv.style.display = "none";
                RestartDiv.style.display = "block";
                return;
            }
        }
    }

    function restart() {
        document.getElementById("Xsection").innerHTML = "";
    }
