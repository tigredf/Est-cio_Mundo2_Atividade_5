import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Editora1' },
  { codEditora: 2, nome: 'Editora2' },
  { codEditora: 3, nome: 'Editora3' }
];

export class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editoraEncontrada = editoras.find(editora => editora.codEditora === codEditora);
    return editoraEncontrada ? editoraEncontrada.nome : '';
  }
}