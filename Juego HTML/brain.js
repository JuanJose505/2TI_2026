const inputNombre = document.querySelector("#nombre");
const botonEmpezarPrincipiante = document.querySelector("#btn-empezar-principiante");
const botonEmpezarMedio = document.querySelector("#btn-empezar-medio");
const botonEmpezarAvanzado = document.querySelector("#btn-empezar-avanzado");
const pantallaMenu = document.querySelector("#pantalla-menu");
const pantallaQuiz = document.querySelector("#pantalla-quiz");
const textoPregunta = document.querySelector("#texto-pregunta");
let preguntasActuales = []
let jugador = ""


botonEmpezarPrincipiante.addEventListener("click", function () {
    jugador = inputNombre.value.trim();
    if (jugador == ""){
        return;
    }
    pantallaMenu.classList.add("oculto");
    pantallaQuiz.classList.remove("oculto");
    preguntasActuales = preguntasPrincipiante
    mostrarPregunta()

});

botonEmpezarMedio.addEventListener("click", function () {
    jugador = inputNombre.value.trim();
    if (jugador == ""){
        return;
    }
    pantallaMenu.classList.add("oculto");
    pantallaQuiz.classList.remove("oculto");
    preguntasActuales = preguntasMedio
    mostrarPregunta()
});


botonEmpezarAvanzado.addEventListener("click", function () {
    jugador = inputNombre.value.trim();
    if (jugador == ""){
        return;
    }
    pantallaMenu.classList.add("oculto");
    pantallaQuiz.classList.remove("oculto");
    preguntasActuales = preguntasAvanzado
    mostrarPregunta()
});






const preguntasPrincipiante = [

{texto: "What does 'apple' mean?", nivel: "principiante"},
{texto: "Choose the correct sentence: She ___ happy.", nivel: "principiante"},
{texto: "How do you say 'perro' in English?", nivel: "principiante"},
{texto: "Complete: I ___ a student.", nivel: "principiante"},
{texto: "What is the opposite of 'big'?", nivel: "principiante"},
{texto: "Translate: 'Good morning.'", nivel: "principiante"},
{texto: "Complete: They ___ my friends.", nivel: "principiante"},
{texto: "What is the plural of 'book'?", nivel: "principiante"},
{texto: "Maria is my sister. ___ is nice.", nivel: "principiante"},
{texto: "What does 'house' mean?", nivel: "principiante"},
{texto: "Complete: This is ___ orange.", nivel: "principiante"},
{texto: "How do you say 'gracias' in English?", nivel: "principiante"},
{texto: "Which one is a color?", nivel: "principiante"},
{texto: "Complete: He ___ twelve years old.", nivel: "principiante"},
{texto: "Translate: 'I have a cat.'", nivel: "principiante"}

]

const preguntasMedio = [

{texto: "She ___ to school every day.", nivel: "medio"},
{texto: "Choose the correct negative sentence: I ___ like coffee.", nivel: "medio"},
{texto: "What does 'usually' mean?", nivel: "medio"},
{texto: "Complete: ___ you play football?", nivel: "medio"},
{texto: "Translate: 'Where do you live?'", nivel: "medio"},
{texto: "Complete: There ___ two chairs in the room.", nivel: "medio"},
{texto: "Choose the correct question: ___ he work here?", nivel: "medio"},
{texto: "What is the past of 'go'?", nivel: "medio"},
{texto: "Complete: My birthday is ___ July.", nivel: "medio"},
{texto: "Translate: 'She is studying English now.'", nivel: "medio"},
{texto: "Complete: Yesterday, we ___ a movie.", nivel: "medio"},
{texto: "Which word means 'rápido'?", nivel: "medio"},
{texto: "Complete: There isn't ___ milk in the fridge.", nivel: "medio"},
{texto: "Choose the correct comparative of 'tall'.", nivel: "medio"},
{texto: "Complete: I am interested ___ music.", nivel: "medio"}



]


const preguntasAvanzado = [

{texto: "Complete: If it rains, we ___ at home.", nivel: "avanzado"},
{texto: "What is the past participle of 'eat'?", nivel: "avanzado"},
{texto: "Complete: I have lived here ___ 2022.", nivel: "avanzado"},
{texto: "Choose the correct sentence: She ___ her homework.", nivel: "avanzado"},
{texto: "Translate: 'You should study more.'", nivel: "avanzado"},
{texto: "Complete: This test is ___ than the last one.", nivel: "avanzado"},
{texto: "Complete: I ___ swim when I was five.", nivel: "avanzado"},
{texto: "Complete: She was sleeping when I ___ home.", nivel: "avanzado"},
{texto: "What does 'although' mean?", nivel: "avanzado"},
{texto: "Complete: If I had more time, I ___ another language.", nivel: "avanzado"},
{texto: "Choose the correct passive sentence.", nivel: "avanzado"},
{texto: "Complete: He is good ___ solving problems.", nivel: "avanzado"},
{texto: "Translate: 'I have never visited London.'", nivel: "avanzado"},
{texto: "Complete: By the time we arrived, the movie ___.", nivel: "avanzado"},
{texto: "Change to reported speech: He said, 'I am tired.'", nivel: "avanzado"},
{texto: "Complete: You ___ wear a seat belt in a car.", nivel: "avanzado"},
{texto: "Choose the correct sentence using 'despite'.", nivel: "avanzado"},
{texto: "Complete: Neither John nor his friends ___ ready.", nivel: "avanzado"},
{texto: "Emma missed the bus, so she walked to school and arrived ten minutes late. Why was Emma late?", nivel: "avanzado"},
{texto: "Complete: If she had studied harder, she ___ the exam.", nivel: "avanzado"}


]



function mostrarPregunta(){
    textoPregunta.textContent = preguntasActuales[0].texto;
}