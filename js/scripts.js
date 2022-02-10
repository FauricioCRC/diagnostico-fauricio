const createButton = document.getElementById("createButton");
const form = document.getElementById("form");
const tableBody = document.getElementById("tbody");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
});

const inputs = document.getElementsByClassName("form__input");
const agregarUsuario = () => {
  tableBody.insertAdjacentHTML(
    "beforeend",
    `
        <tr>
            <td class="table__cell">${inputs[0].value}</td>
            <td class="table__cell">${inputs[1].value}</td>
            <td class="table__cell">${inputs[2].value}</td>
            <td class="table__cell">${inputs[3].value}</td>
            <td class="table__cell">${inputs[4].value}</td>
            <td class="table__cell">${inputs[5].value}</td>
            <td class="table__cell"><button class="form__button table__button" type="button">Eliminar</button><button class="form__button table__button" type="button">Actualizar</button></td>
        </tr>
    `
  );
};
createButton.addEventListener("click", () => {
  agregarUsuario();
});

const modificar = document.getElementById("modificar");
const modificarAcceptButton = document.getElementById("modificar-acceptButton");
tbody.addEventListener("click", (ev) => {
  if (ev.target.textContent === "Eliminar") {
    ev.target.parentNode.parentNode.remove();
  } else if (ev.target.textContent === "Actualizar") {
    modificar.classList.add("active");
    for (let i = 6; i < 12; i++){
      inputs[i].value = inputs[i - 6].value;
    }
  }
});

modificarAcceptButton.addEventListener("click", () => {
  modificar.classList.remove("active");
  inputs[0].value = inputs[6].value;
  inputs[1].value = inputs[7].value;
  inputs[2].value = inputs[8].value;
  inputs[3].value = inputs[9].value;
  inputs[4].value = inputs[10].value;
  inputs[5].value = inputs[11].value;
});
