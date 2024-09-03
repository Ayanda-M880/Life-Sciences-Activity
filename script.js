let score = 0;

function identifyPlant(plantName) {
    let feedback = document.getElementById("feedback");
    
    if (plantName === 'Aloe Vera' || plantName === 'Mint') {
        score += 10;
        feedback.innerHTML = `Correct! You identified ${plantName}. Your score is now ${score}.`;
    } else {
        feedback.innerHTML = `Incorrect. ${plantName} is not the correct plant. Your score remains at ${score}.`;
    }
    
    if (score >= 20) {
        feedback.innerHTML += "<br>Congratulations! You've earned the Medicinal Plant Expert badge!";
    }
}
