# Conversor de Moedas
* Este é um projeto simples de conversor de moedas que permite ao usuário converter valores entre diferentes moedas, como Real (BRL), Dólar (USD) e Euro (EUR). Utiliza HTML, CSS e JavaScript para criar uma interface intuitiva e uma API para obter taxas de câmbio em tempo real.

# Funcionalidades
* Conversão de moedas: Permite a conversão de valores entre Real, Dólar e Euro.
* Taxas de câmbio em tempo real: A integração com a API ExchangeRate-API garante taxas de câmbio atualizadas.
* Validação de entrada e tratamento de erros: Garante que o usuário seja informado caso ocorra algum problema ao obter as taxas.
* Interface responsiva: Interface adaptável, desenvolvida em HTML5 e CSS3, para uma experiência amigável em diferentes dispositivos.

## HTML (index.html)
Este arquivo contém o formulário de conversão:

* Campos de entrada: Um campo de entrada numérica para o valor a ser convertido.
* Seleção de moedas: Listas suspensas para selecionar a moeda de origem e destino.
* Botão de conversão: Botão que ativa o cálculo.
* Campo de resultado: Um elemento div para exibir o valor convertido.
## O JavaScript implementa:

* Função de obtenção de taxa de câmbio: A função getExchangeRate(moedaDestino, moedaOrigem) realiza uma chamada assíncrona à API para buscar a taxa de câmbio entre as moedas selecionadas.
* Função de conversão e exibição do resultado: Após a conversão, o valor convertido é exibido para o usuário.
* Tratamento de erros: Caso ocorra um erro na requisição à API, o usuário recebe uma mensagem de erro.

## Exemplo de Conversão
* Conversão de R$ 10,00 para USD: O resultado será exibido como o valor equivalente em dólares.
* Conversão de € 20,00 para BRL: O valor em reais será mostrado.
### Observações
* O projeto usa a versão gratuita da API, o que pode impor um limite de requisições diárias.
* A chave de API fornecida no código é um exemplo; substitua-a pela sua própria chave para o projeto funcionar corretamente.
## autores 
* cristian