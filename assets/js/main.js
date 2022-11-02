/*
Consegna

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

/*
Scompongo esercizio
1- Creazioni variabili
    -Griglia :  mi servirà per mettere i quadrati all'interno
    -DimGriglia : per stabilire la dimensione griglia(Bonus)
    -Play: per aggiungere funzione di start al click
    -array bombe : per inserigli le bombe generate random da una funzione
    -Punti: per stabilire il punteggio
    -PuntiToWin : per stabilire quando si vince

2- Creazione funzioni
    - per creare quadrati
    - per stabilire difficoltà e di conseguenza quanti quadrati generare
    - per stabilire l'inizio
    - per stabilire la fine
    - per generare bombe
    
*/

//Aggiungo variabile griglia e dimensione griglia
const griglia = document.getElementById('griglia');
let grigliaDim = 0;

// Aggiungo pulsante play con function start al click
const play = document.getElementById('play');
// play.addEventListener('click', start);

//Aggiungo variabile punti e array bombe
let arrayBomb = [];
let punti;
let minPuntiToWin;

//Funzione per generare quadrati
function createSquare(num){ // setto un parametro generico che mi servirà per inserire un testo nel div.
    const div = document.createElement('div');
    div.classList.add('square');
    div.innerText = num ; // inserisco il parametro nel testo del div 
    return div;
}

// funzione per generare la griglia e appendere dentro i quadrati usando la funzione createSquare
function generateGrid(){

    for( i = 1; i <= 100; i++ ) {

        let square = createSquare(i);
        square.addEventListener('click', function(){
            this.classList.add('azure');
        })
        griglia.append(square);

    }
}

generateGrid();