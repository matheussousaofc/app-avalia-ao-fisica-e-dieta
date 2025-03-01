document.getElementById('dobras-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os valores das dobras cutâneas
    const tricipital = parseFloat(document.getElementById('tricipital').value);
    const subescapular = parseFloat(document.getElementById('subescapular').value);
    const peitoral = parseFloat(document.getElementById('peitoral').value);
    const axilar = parseFloat(document.getElementById('axilar').value);
    const suprailiaca = parseFloat(document.getElementById('suprailiaca').value);
    const abdominal = parseFloat(document.getElementById('abdominal').value);
    const coxa = parseFloat(document.getElementById('coxa').value);

    // Somar as dobras
    const somaDobras = tricipital + subescapular + peitoral + axilar + suprailiaca + abdominal + coxa;

    // Fórmula para estimativa de gordura corporal (em %)
    const gorduraCorporal = (0.29288 * somaDobras) - 0.0005 * (somaDobras * somaDobras) + 0.15845;

    // Exibir o resultado
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('gordura-corporal').textContent = `Gordura Corporal Estimada: ${gorduraCorporal.toFixed(2)}%`;

    // Status baseado no valor de gordura corporal
    let status;
    if (gorduraCorporal < 18) {
        status = "Baixo (Abaixo do normal)";
        document.getElementById('status').style.color = "#4CAF50";  // Verde
    } else if (gorduraCorporal >= 18 && gorduraCorporal <= 25) {
        status = "Normal";
        document.getElementById('status').style.color = "#4CAF50";  // Verde
    } else {
        status = "Alto (Acima do normal)";
        document.getElementById('status').style.color = "#f44336";  // Vermelho
    }
    document.getElementById('status').textContent = `Status: ${status}`;
});
