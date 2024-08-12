const opciones = ['🗞️', '🪨', '✂️'];

function jueguito(opcionUsuario) {
    const randomIndex = Math.floor(Math.random() * opciones.length);
    const opcionIA = opciones[randomIndex];

    let resultado;
    if (opcionUsuario === opcionIA) {
        resultado = "Empate";
    } else if (
        (opcionUsuario === '🗞️' && opcionIA === '🪨') ||
        (opcionUsuario === '🪨' && opcionIA === '✂️') ||
        (opcionUsuario === '✂️' && opcionIA === '🗞️')
    ) {
        resultado = "Ganaste";
    } else {
        resultado = "Perdiste";
    }
    alert(`Usuario: ${opcionUsuario} | IA: ${opcionIA} | Resultado: ${resultado}`);
}