function createGame (playerOne, hour, playerTwo) {
    return `
        <li>
            <img src="./assets/img/bandeiras-dos-países/icon-${playerOne}.svg" alt="Bandeira da ${playerOne}">
            <strong>${hour}</strong>
            <img src="./assets/img/bandeiras-dos-países/icon-${playerTwo}.svg" alt="Bandeira do ${playerTwo}">
        </li>
    `
}

let delay = -0.3
function createCard (date, day, games) {
    delay = delay + 0.3
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML = 
        createCard("24/11", "quinta", createGame("switzerland", "10:00", "cameroon") + createGame("portugal", "13:00", "ghana") + createGame("brazil", "16:00", "serbia")) 
        + 
        createCard("28/11", "segunda", createGame("south-korea", "10:00", "ghana")+ createGame("brazil", "13:00", "switzerland")+ createGame("portugal", "16:00", "uruguay")) 
        +
        createCard("02/12", "sexta", createGame("ghana", "10:00", "uruguay")+ createGame("brazil", "13:00", "cameroon")+ createGame("portugal", "16:00", "south-korea"))

