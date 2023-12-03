async function setAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    const adviceID = advice.slip.id;
    const adviceText = advice.slip.advice;
    document.querySelector(".advice-id").textContent = adviceID;
    document.querySelector(".advice-text").textContent = adviceText;
}

setAdvice()

document.querySelector(".re-roll").addEventListener("click", setAdvice);