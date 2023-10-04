# API para Cálculo de Frete
Esta é uma API simples para calcular o custo de frete com base em duas variáveis, valor do produto e estado para entrega.
## Configuração
Certifique-se de ter o Noje.js instalado em seu sistema. Pode realizar o download a partir do site oficial: [Node.js](https://nodejs.org/en)

1- Clone o repositório:
```
git clone https://github.com/YuriCicconi/api-calcular-frete.git
```
2- Acesse o diretório clonado:
```
cd api-calcular-frete
```
3- Inicie o servidor executando o arquivo index.js:
```
node ./API/src/index.js
```

## Utilidade
A API possui 3 endpoints, todos utilizando o método GET.
```
localhost:3000/produtos                              //lista os produtos dentro do banco de dados
localhost:3000/produtos/:idProduto                   //lista detalhes de um determinado produto
localhost:3000/produtos/:idProduto/frete/:cep        //lista os detalhes do produto selecionado junto com o valor do frete para o cep informado
```

## Agradecimento
Esse projeto foi realizado com o objetivo de exercitar o conteúdo passado durante o segundo módulo do curso de Backend da Cubos Academy.
Por isso gostaria de deixar meus agradecimentos à toda equipe da Cubos, em especial aos mestres Guido, Diegod e Juninho!
