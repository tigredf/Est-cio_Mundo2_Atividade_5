// teste
const Livro = require('./livro-schema');

const LivroDAO = {
  async obterLivros() {
    try {
      const livros = await Livro.find();
      return livros;
    } catch (error) {
      throw new Error('Erro ao obter livros: ' + error.message);
    }
  },

  async incluir(livro) {
    try {
      const novoLivro = await Livro.create(livro);
      return novoLivro;
    } catch (error) {
      throw new Error('Erro ao incluir livro: ' + error.message);
    }
  },

  async excluir(codigo) {
    try {
      const resultado = await Livro.deleteOne({ _id: codigo });
      return resultado;
    } catch (error) {
      throw new Error('Erro ao excluir livro: ' + error.message);
    }
  },
};

module.exports = LivroDAO;
