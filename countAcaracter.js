
function countAcaracter(){
 let sentence = "Bonjour, chers candidat comment vous allez aujourd'hui";
    let cas = 0;
for(var i = 0; i < sentence.length; i++)
        {
            if(sentence[i] == "a")
            cas++;
        }
        return cas;
}
console.log("Le nombre d'occurrences de 'a' est :" , countAcaracter());

module.exports = countAcaracter;
