// Tabela ASCII

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function geraSimbolos() {
  return String.fromCharCode(randomNumber(33, 48));
}

function geraNumeros() {
  return String.fromCharCode(randomNumber(48, 58));
}

function geraLetrasMinusculas() {
  return String.fromCharCode(randomNumber(97, 123));
}

function geraLetrasMaiusculas() {
  return String.fromCharCode(randomNumber(65, 91));
}

export default function geraSenha(
  qtd,
  numeros,
  maiusculas,
  minusculas,
  simbolos
) {
  const arraySenha = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    maiusculas && arraySenha.push(geraLetrasMaiusculas());
    minusculas && arraySenha.push(geraLetrasMinusculas());
    numeros && arraySenha.push(geraNumeros());
    simbolos && arraySenha.push(geraSimbolos());
  }
  return arraySenha.join("").slice(0, qtd);
}
