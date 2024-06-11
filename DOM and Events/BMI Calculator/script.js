const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = Number(document.querySelector('#height').value);
    console.log(height);
    const weight = Number(document.getElementById("weight").value);
    console.log(weight);
    if (height === 0 || weight === 0 || isNaN(height) || isNaN(weight) || height < 0 || weight < 0) {
        document.querySelector('#results').textContent = `Invalid Inputs!`;
    }
    else {
        const results = (weight / (height / 100 * height / 100)).toFixed(2);
        if (results > 24.9) {
            document.querySelector('#results').textContent = `${results},You are overweight!`;
        }
        if (results > 18.6 && results <=24.9) {
            document.querySelector('#results').textContent = `${results},You are in normal range!`;
        }
        if(results<=18.6){
            document.querySelector('#results').textContent = `${results},You are underweight!`;
        }
    }
})