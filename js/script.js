// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Seleziono il wrapper dove inserire il set di numeri generati
const numbWrapper = document.querySelector('.numbers')

// Creo un set di appoggio dove verranno inseriti i numeri generati
const numbListSet = new Set();

// Creo un array di appoggio per i numeri scritti dall'utente
const numbToWriteList = [];

// Genero numeri da 1 a 20 fino a quando non sono 5 totali
while (numbListSet.size < 5) {
    const randomNumb = Math.floor(Math.random() * 21);

    // Aggiungo i numeri generati al set
    numbListSet.add(randomNumb);
}