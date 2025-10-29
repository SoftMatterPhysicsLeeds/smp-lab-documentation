function convertPressure() {
  const pressure = parseFloat(document.getElementById("pressure").value);
  const area = parseFloat(document.getElementById("area").value);
  if (isNaN(pressure)) {
    document.getElementById("result").innerHTML = "Please enter a valid number";
    return;
  }

  if (isNaN(area)) {
    document.getElementById("result").innerHTML = "Please enter a valid number";
    return;
  }

  // Conversion factors
  const psi = ((pressure * area) / 81.03) * 145.038;
  const tons = (psi * (81.03 / 6.4516)) / 2240;

  document.getElementById("result").innerHTML = `
                <strong>Pressure to set:</strong><br>
                ${psi.toFixed(2)} psi (right hand dial)<br>
                ${tons.toFixed(2)} ton (left hand dial)</sup><br>

            `;
}
