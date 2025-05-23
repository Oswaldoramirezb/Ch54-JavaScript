const vueltasAleatorias = (min = 1, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;
const numDeVueltas = (number) => {
    const miPromesa = new Promise((fncCallBackResolve, fncCallBackReject) => {
        console.log("el numero de vueltas es: " + number);
        if (number <= 2) {
            fncCallBackResolve({ mensaje: "ñomi ñomi, me comi mi elote", vueltas: vueltasAleatorias() });
        } else {
            fncCallBackReject({ error: 404, descripcion: "upss se me cayo el elote" });
        }
    });
    return miPromesa;
}