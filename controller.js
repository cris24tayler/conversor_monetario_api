const apikey = '8dcc8477cab2b12f8d028b7d';
const apiurl = `https://v6.exchangerate-api.com/v6/${apikey}/latest/`;
//função para buscar taxa de câmbio da API
async function getExchangeRate(moedaOrigem,moedaDestino){
    try{
        const response = await
        fetch(`${apiurl}${moedaDestino}`);
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