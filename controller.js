const apikey = '8dcc8477cab2b12f8d028b7d';
const apiurl = `https://v6.exchangerate-api.com/v6/${apikey}/latest/`;
//função para buscar taxa de câmbio da API
async function getExchangeRate(moedaDestino,moedaOrigem){
    try{
        const response = await
        fetch(`${apiurl}${moedaOrigem}`);
        const data = await response.json();

        if(data.result === 'success'){
            return data.conversion_rates[moedaDestino];
        }else{
            throw new Error('erro ao burcar a taxa de câmbio');
        }

    }catch(Error){
        console.error("Erro: ", error);
        return null;
    }
}
document.getElementById('conversorForm').addEventListener('submit', async function(event){
    event.preventDefault();

    const valor = parseFloat(document.getElementById('valor').value);
    const moedaDestino = document.getElementById('moedaDestino').value;
    const moedaOrigem = document.getElementById('moedaOrigem').value;

    //busca a taxa de câmbio da API
    const exchangeRate = await getExchangeRate(moedaDestino, moedaOrigem);

    if(exchangeRate){
        const convertedValue = valor * exchangeRate;
        //exibir resultado
        const conversao = document.getElementById('resultado');
        conversao.textContent = `Resultado: ${convertedValue.toFixed(2)} ${moedaDestino})`
    }else(
        alert('Erro ao buscar a cotação. tente novamente!')
    )
});