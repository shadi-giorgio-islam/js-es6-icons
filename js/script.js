// Aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti. Prendete i colori da un altro array.
// Stampare poi tutte le icone utilizzando il template literal.
// Stampare quindi nella select tutti i tipi che avete in precedenza selezionato (animal, vegetable, icon).
// Filtrare i risultati in base alla categoria (ricordate di svuotare il container).
// Utilizzate forEach, map e filter e cercate di strutturare tutto con le funzioni.

$( document ).ready(function() {

const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    }
  ];
// Aggiunta colori
const newIcons = icons.map((element) => {
  return {
    ...element,
    color: (element.type == 'animal') ? 'blue' : (element.type == 'vegetable') ? 'orange' : 'violet'
  }
});

newIcons.forEach((element) => {

// aggiunta icone
document.getElementById('icons').innerHTML += `
<div class="${element.type}">
<i class='${element.family} ${element.prefix}${element.name} fa-5x' style='color:${element.color}'></i>
<p>${element.name}</p>
</div>`
});

console.log(newIcons);

// Aggiunta opzioni
const types = getTypes(icons);
console.log(types);
const select = $('#type');
opzioni(types, select);
// funzioni opzioni
function getTypes(array) {
  const types = [];

  array.forEach((element) => {
    if (!types.includes(element.type)) {
      types.push(element.type);
    }
  });
  return types;
}
function opzioni(array, select) {
  array.forEach((element) => {
    select.append(`<option value="${element}">${element}</option>`)
  });

}

// cambio opzione
select.change(function() {
  const selected = $(this).val();
  console.log(selected);
  $('#icons div').hasClass(selected).addClass('active');
});

});
