

var input = parseInt(prompt("De quel nombre veux-tu calculer la factorielle ?"));

var result = input;

for(var i = 1; i < input; i++ )
{
  result = i * result;
}
console.log(`Le résultat est : ${result}`);