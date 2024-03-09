let listToDo = document.querySelector(".list-group")
let addTaskBtn = document.querySelector(".add-task-btn")
let inputValue = document.querySelector(".form-control")
let inputTask = document.createElement("input")

function addTask() {
    let checkBoxDiv = document.createElement("div")
    checkBoxDiv.classList.add("form-check")
    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    checkBox.classList.add("form-check-input")
    checkBoxDiv.appendChild(checkBox)


    let taskLi = document.createElement("li")
    taskLi.classList.add("list-group-item", "d-flex", "justify-content-between", "mt-3", "align-items-center")

    let taskText = document.createElement("p")
    let taskandBtns = document.createElement("div")
    taskandBtns.classList.add("text-btns")
    taskText.classList.add("task-text", "mb-0")
    let text = inputValue.value
    taskText.innerText = text

    listToDo.appendChild(taskLi)

    console.log(inputValue.value);

    let btnCont = document.createElement("div")
    btnCont.classList.add("btn-cont")
    let btnUpdate = document.createElement("button")
    let btnDelete = document.createElement("button")

    btnUpdate.innerHTML = '<i class="fas fa-pen-to-square"></i>'
    btnDelete.innerHTML = '<i class="fas fa-trash"></i>'

    btnUpdate.classList.add("btn", "update-btn")
    btnDelete.classList.add("btn", "del-btn")
    btnDelete.addEventListener("click", () => {
        taskLi.remove()
    })
    btnUpdate.setAttribute("data-bs-toggle", "modal")
    btnUpdate.setAttribute("data-bs-target", "#exampleModal")


    let modalBody = document.querySelector(".modal-body")
    let modal = document.querySelector(".modal")
    modalBody.appendChild(inputTask)

    btnUpdate.addEventListener("click", () => {
        inputTask.setAttribute("type", "text")
        inputTask.classList.add("form-control")
        inputTask.value = text
        let saveChangedTaskBtn = document.querySelector(".modal-footer .btn-dark")
        saveChangedTaskBtn.addEventListener("click", () => {
            let newText=inputTask.value
            taskText.innerText = newText
            modal.style.display = "none"
            text = newText
        })
    })


    btnCont.appendChild(btnUpdate)
    btnCont.appendChild(btnDelete)
    taskandBtns.append(taskText, btnCont)

    taskLi.appendChild(checkBoxDiv)
    taskLi.appendChild(taskandBtns)

    inputValue.value = ""
}

