const startButton = document.querySelector('button.start');
const prevButton = document.querySelector('button.carousel-control-prev');
const nextButton = document.querySelector('button.carousel-control-next');
const controlButtons = document.querySelectorAll('button[data-bs-target="#carousel-for-questions"]');


nextButton.style.display = 'none';
prevButton.style.display = 'none';

for (const button of controlButtons) {
    button.setAttribute('disabled', '');
}

startButton.addEventListener('click', function () {
    for (const button of controlButtons) {
        button.removeAttribute('disabled');
    }
    nextButton.click();
    prevButton.style.display = 'inline-block';
    nextButton.style.display = 'inline-block';
});

const finishButton = document.querySelector('button.finish');
let score = 0;
const answers = ['no', 'no', 'question-3-option-3', 'no', 'noom', '91', 'question-7-option-2', 'god', 'apple', 'table'];
const unlikelyPossibility = 'It is very unlikely that you have dyslexia.';
const strongPossibility = 'A score above 4 indicates a strong possibility that you have dyslexia but the results of the screening test will need to be confirmed by a chartered psychologist who will use regulated tests and their clinical judgement to confirm a diagnosis.'


finishButton.addEventListener('click', function () {
    const radioButtons = document.querySelectorAll('.carousel-item input[type="radio"]');
    const inputAnswers = [];
    score = 0;
    for (const button of radioButtons) {
        if (button.checked) {
            inputAnswers.push(button.value);
        }
    }
    for (let i = 0; i < answers.length; ++i) {
        if (answers[i] !== inputAnswers[i]) score++;
    }
});


const openPopupButton = document.querySelector('button.finish');
const closePopupButton = document.querySelector('button.btn-success');
const overlay = document.getElementById('overlay');

openPopupButton.addEventListener('click', () => {
    const popup = document.querySelector('div.popup');
    const popupHeading = document.querySelector('div.popup h3');
    popupHeading.innerText = `Based on your answers to the given questions, you score ${score} points.`;
    if (score > 4)
        popupHeading.nextElementSibling.innerText = strongPossibility;
    else
        popupHeading.nextElementSibling.innerText = unlikelyPossibility;
    popup.classList.add('active');
    overlay.classList.add('active');
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
});

closePopupButton.addEventListener('click', () => {
    const popup = document.querySelector('div.popup');
    popup.classList.remove('active');
    overlay.classList.remove('active');
    prevButton.style.display = 'inline-block';
});
