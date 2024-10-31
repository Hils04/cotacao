// Função para converter Dólar(USD) para Reais(BRL)
async function convertDolarToReal() {
    const dolarValue = document.getElementById('dolar-value').value;
    
    if (!dolarValue) {
        alert("Por favor, insira um valor em Dólar.");
        return;
    }

    try {
        const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
        const data = await response.json();
        const dolarToRealRate = parseFloat(data.USDBRL.bid);
        const result = (dolarValue * dolarToRealRate).toFixed(2);

        document.getElementById('result').innerText = `${dolarValue} dólares é equivalente a ${result} reais.`;
    } catch (error) {
        console.error("Erro ao buscar a cotação USD/BRL:", error);
        alert("Não foi possível obter a cotação no momento.");
    }
}

// Função para converter BRL para USD
async function convertRealToDolar() {
    const realValue = document.getElementById('real-value').value;
    
    if (!realValue) {
        alert("Por favor, insira um valor em Reais.");
        return;
    }

    try {
        const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
        const data = await response.json();
        const dolarToRealRate = parseFloat(data.USDBRL.bid);
        const result = (realValue / dolarToRealRate).toFixed(2);

        document.getElementById('result').innerText = `${realValue} reais é equivalente a ${result} dólares.`;
    } catch (error) {
        console.error("Erro ao buscar a cotação USD/BRL:", error);
        alert("Não foi possível obter a cotação no momento.");
    }

}

function zerarCotacao() {
    document.getElementById('dolar-value').value = '';
    document.getElementById('real-value').value = ''; 
    document.getElementById('result').innerText = '';
}
