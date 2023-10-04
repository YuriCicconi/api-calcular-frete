const produtos = require('../bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground');

const getProdutos = async (req, res) => {
    return await res.status(200).json(produtos);
}

const getProduto = async (req, res) => {
    const { idProduto } = await req.params;

    if (isNaN(idProduto)) return res.status(400).json({ mensagem: 'ID informado não é um número válido.' });

    const produto = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    });

    if (!produto) return res.status(404).json({ mensagem: `Produto com Id: ${idProduto} não encontrado.` });

    return res.status(200).json(produto);
}

const calcularFrete = async (req, res) => {
    const { idProduto, cep } = await req.params;

    let fretePadrao = 0.12;
    const nordeste = ['BA', 'SE', 'AL', 'PE', 'PB'];
    const sudeste = ['SP', 'RJ'];

    if (isNaN(idProduto)) return res.status(400).json({ mensagem: 'ID informado não é um número válido.' });

    const produto = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    });

    if (!produto) return res.status(404).json({ mensagem: `Produto com Id: ${idProduto} não encontrado.` });

    const estado = await getStateFromZipcode(cep);

    if (!estado) return res.status(404).json({ mensagem: `Cep não encontrado.` });
    if (nordeste.includes(estado)) fretePadrao = 0.1;
    if (sudeste.includes(estado)) fretePadrao = 0.15;

    const resultado = {
        produto: produto,
        estado,
        frete: produto.valor * fretePadrao
    }

    return res.status(200).json(resultado);
}


module.exports = { getProdutos, getProduto, calcularFrete }