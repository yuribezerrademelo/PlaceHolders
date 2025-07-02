const box = document.querySelector("#box");
const ic = document.querySelector("#btni");
const adicionar = document.querySelector("#novatarefa");
const lista = document.getElementById("lista");
const modal = document.querySelector("#boxremover");
const botaosim = document.querySelector("#botaosim");
const botaonao = document.querySelector("#botaonao");
let itemParaRemover = null;

const togglebox = () => box.classList.toggle("show");

[novatarefa, btni].forEach(el => {
	el.addEventListener("click", togglebox)
});

function adicionartarefa() {
	const tarefaadicionada = document.querySelector("#tarefa").value;

	if (tarefaadicionada.trim() === "") {
		alert("Digite uma tarefa.");
		return;
	}

	const novali = document.createElement("li");
	const botaolixeira = document.createElement("button");

	novali.id = "novoitemlista";
	botaolixeira.classList.add("botao-remover");

	botaolixeira.innerHTML = '<i class="fa-solid fa-trash"></i>';
	novali.textContent = tarefaadicionada;

	novali.appendChild(botaolixeira);
	lista.appendChild(novali);

	const togglenovali = (event) => {
		if (!event.target.closest("button")) {
			novali.classList.toggle("confirmar");
		}
	};

	function mostrarmodal() {
		modal.classList.add("show");
	}

	function escondermodal() {
		modal.classList.remove("show");
	}

	botaolixeira.addEventListener("click", () => {
		itemParaRemover = novali;
		mostrarmodal();
	});

	botaosim.addEventListener("click", () => {
		if (itemParaRemover) {
			itemParaRemover.remove();
			itemParaRemover = null;
			escondermodal();
		}
	});

	botaonao.addEventListener("click", escondermodal);

	novali.addEventListener("click", togglenovali);

	document.querySelector("#tarefa").value = "";
}

