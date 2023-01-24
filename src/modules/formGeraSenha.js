import geraSenha from "./geradores";

export default () => {
  enviaSenha.addEventListener("click", (e) => {
    e.preventDefault()
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    quantidade.value,
    addNumeros.checked,
    addMaiusculas.checked,
    addMinusculas.checked,
    addSimbolos.checked
  );
  return senha || "Nada selecionado.";
}

const senhaGerada = document.querySelector(".senha-gerada");
const quantidade = document.querySelector(".qtd-caracteres");
const addNumeros = document.querySelector(".chk-numeros");
const addMaiusculas = document.querySelector(".chk-maiusculas");
const addMinusculas = document.querySelector(".chk-minusculas");
const addSimbolos = document.querySelector(".chk-simbolos");
const enviaSenha = document.querySelector(".btn-enviar");
