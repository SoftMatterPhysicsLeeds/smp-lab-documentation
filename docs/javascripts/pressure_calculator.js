
function convertPressure() {
    const pressure = parseFloat(document.getElementById('pressure').value);
    const area = parseFloat(document.getElementById('area').value);
    if (isNaN(pressure)) {
        document.getElementById('result').innerHTML = 'Please enter a valid number';
        return;
    }

    if (isNaN(area)) {
        document.getElementById('result').innerHTML = 'Please enter a valid number';
        return;
    }

    // Conversion factors
    const psi = ((pressure * area) / 80) * 145.038;
    const tons_per_4squareinch = (psi / 2239)*4
    

    document.getElementById('result').innerHTML = `
                <strong>Pressure to set:</strong><br>
                ${psi.toFixed(2)} psi<br>
                ${tons_per_4squareinch.toFixed(2)} tons per 4inch<sup>2</sup><br>
                
            `;
}
