
function isUpper(bot){
    let result = "";
    for (let letter of bot) {
        if (letter === letter.toLowerCase() && (/[a-z]/).test(bot) ){
            result = false;
            break;
            }
        else {
            result = true;
        }
    };  
    return result;
};

while(true){
let bot = ""
bot = prompt("Type your message here");
    console.log(`Gentil_correcteur69 > ${bot}`)
    if (bot === ""){
        console.log("Jean-Eudes > Auriez vous par malheur un soucis de santé mon cher ami?");
    }
    else if (bot.includes("Fortnite"))  {
        console.log("Jean-Eudes > Ma foi, je m'attarderai volontier à quelques flibusteries numériques");
    }
    else if (bot.endsWith("?"))  {
        console.log("Jean-Eudes > La bonne tenue m'interdit de répondre à cette question.");
    }
    else if (isUpper(bot)){
        console.log("Jean-Eudes > Voudriez-vous donc s'il vous plait tempérer vos ardeurs? Ces vociférations embarassent mon bébé caniche.")
    }
    else {
        console.log("Jean-Eudes > Je m'excuse mais je n'en ai cure!");
    }
};

