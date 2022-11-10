// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

// Inizializzo istanza vue
const app = new Vue(
    {
        el: '#root',
        data: {
            message: 'Ciao a tuttiii',
            img: 'https://picsum.photos/200/300'
        }
    }
);