const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  console.log ("======================================")
  console.log("Have every book been rented at least once?")
  console.log ("======================================")

  books.forEach(book => {
    if(Number(book.rented) > 1) {
    console.log("Yes")
    }
});

console.log ("======================================")
console.log ("Which book is the most rented?")
console.log ("======================================")

let arrent = [];
books.forEach(book => {
    arrent.push(`${book.rented}`);
});

let most = Math.max(...arrent)

for (let index = 0; index < books.length; index++) {
    if (books[index].rented === most) {
        console.log(`Most rented book is : ${books[index].title}`);
        break;
    }
};

console.log ("======================================")
console.log ("Which book is the least rented?")
console.log ("======================================")

let arrent2 = [];
books.forEach(book => {
    arrent2.push(`${book.rented}`);
});

let least = Math.min(...arrent)

for (let index = 0; index < books.length; index++) {
    if (books[index].rented === least) {
        console.log(`Least rented book is : ${books[index].title}`);
        break;
    }
};

console.log ("======================================")
console.log ("Which book has ID 873495?")
console.log ("======================================")

let bookid;
    for (let i=1; i < books.length; i++){
    if(books[i].id == 873495){
      bookid = books[i] ;
    }
  }
console.log(bookid);

console.log ("======================================")
console.log ("Which book has ID 133712? We deleted it anyway")
console.log ("======================================")

  let loutre;
  for (let i = 0; i < books.length; i++){
    if (books[i].id == 133712){
      loutre = books.splice(i,1);
    }
  }
  console.log(loutre);

  console.log ("======================================")
  console.log ("Alphabetical order without book 133712")
  console.log ("======================================")

//Trie les livres par ordre alphabétique 
function compare(a,b) {
  if (a.title < b.title)
     return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}

console.log(books.sort(compare));

