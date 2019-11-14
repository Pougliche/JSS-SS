
const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
    console.log ("======================================")
    console.log ("Here is an array full of groundbreaking people :")
    console.log ("======================================")
    console.log (entrepreneurs)
    console.log ("======================================")
    console.log ("which entrepreneur is born in the 70's?")
    console.log ("======================================")
    entrepreneurs.forEach(entrepreneur => {
        if(Number(entrepreneur.year) > 1970 && Number(entrepreneur.year) <= 1979) {
        console.log(`${entrepreneur.first} born in ${entrepreneur.year}`)
    }
});

    console.log ("======================================")
    console.log ("Let's see some names")

    let names = [] ;
    entrepreneurs.forEach(entrepreneur => {
        names.push(` { ${entrepreneur.first} , ${entrepreneur.last} } `);
    });

    console.log(names);
    console.log ("======================================")
    console.log("How old would they be today ?");

    
    entrepreneurs.forEach(entrepreneur => {
        let now = (`${entrepreneur.first} ${entrepreneur.last} would have ${2019-Number(entrepreneur.year)} year today! OK Boomer`)
        console.log(now);
    });

    console.log ("======================================")
    console.log("Let's see their last name by alphabetical order");

    let order = [] ;
    entrepreneurs.forEach(entrepreneur => {
        order.push(`${entrepreneur.last}`);
        order.sort()
    });

    console.log(order)