// TP 01 - Les fonctions
console.log("01 - Fonctions");

//Variables de base
let nombre1 = 10;
let nombre2 = 20;

//Fonctions
const additionner = (nb1, nb2) => nb1 + nb2;
const soustraction = (nb1, nb2) => nb1 - nb2;
const multiplication = (nb1, nb2) => nb1 * nb2;

//Variable de type fonction
const somme = (nb1, nb2) => additionner(nb1, nb2);

//Résultats
let resultat1 = additionner(nombre1, nombre2);
console.log('resultat1 = ' + resultat1);
let resultat2 = somme(nombre1, nombre2);
console.log('resultat2 = ' + resultat2);
let resultat3 = multiplication(nombre1, nombre2);
console.log('resultat3 = ' + resultat3);

//Fonction comme élément du 1er ordre
const afficherOperation = (nomOperation, nb1, nb2) => {
    switch (nomOperation) {
        case 'Somme':
            let resAddition = additionner(nb1, nb2);
            console.log('Additionner(' + nb1 + ',' + nb2 + ') = ' + resAddition)
            break;
        case 'Multiplication':
            let resMultiplication = multiplication(nb1, nb2);
            console.log('Multiplication(' + nb1 + ',' + nb2 + ') = ' + resMultiplication)
            break;
        case 'Soustraction':
            let resSoustraction = soustraction(nb1, nb2);
            console.log('Soustraction(' + nb1 + ',' + nb2 + ') = ' + resSoustraction)
            break;
        default :
            console.log('Opération non reconnue !')
    }
};

//Opérations
afficherOperation('Somme', 20, 40)
afficherOperation('Multiplication', 10, 20)
afficherOperation('Soustraction', 15, 5)



