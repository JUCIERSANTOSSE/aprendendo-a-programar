function adicionarTarefa(){
    const item = document.createElement(`li`)

    item.textContent = `Olá`

    const lista = document.querySelector(`#lista`)
    lista.appendChild(item)

}


adicionarTarefa()
adicionarTarefa()
adicionarTarefa()
adicionarTarefa()