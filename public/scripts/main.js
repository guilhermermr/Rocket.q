import Modal from './modal.js'

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");  

//Pegar todos os botões que existem com a calss check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button =>  {
    //adicionar a escuta
    button.addEventListener("click", hundleClick)
});


// Quando o botão delete for clicado ele abre o modal
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => hundleClick(event, false))
});

function hundleClick(event, check = true){
    event.preventDefault();
    const text = check ? "Marcar como lida" : "Excluir";
    const slug = check ? "check" : "delete";
    const roomId = document.querySelector("#room-id").dataset.id;
    const questionId = event.target.dataset.id;
    const form = document.querySelector(".modal form");
    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`;
    modalDescription.innerHTML = check ? `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?` : `Tem certeza que seja excluir ${text.toLocaleLowerCase()}?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`;
    check? modalButton.classList.remove("red") : modalButton.classList.add("red");

    //Abrir modal
    modal.open();
}