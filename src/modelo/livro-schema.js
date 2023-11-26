const banco = require('./conexao');

const LivroSchema = new banco.Schema({
  // Defina a estrutura do seu esquema aqui
  // Exemplo: title: { type: String, required: true },
  codigo: number,
  codEditora: number,
  titulo: string,
  resumo: string,
  autores: string[],
});

const Livro = banco.model('Livro', LivroSchema);

module.exports = Livro;
