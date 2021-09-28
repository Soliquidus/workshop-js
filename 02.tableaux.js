//TP 02 - Les tableaux
let villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

//forEach()
villes.forEach(ville => console.log(ville));

//every()
let lettreADansToutesLesVilles = villes.every(ville => ville.includes('a'));
console.log('lettreADansToutesLesVilles = ' + lettreADansToutesLesVilles);

//some()
let auMoinsUneVilleAvecUnTiret = villes.some(ville => ville.includes('-'));
console.log('auMoinsUneVilleAvecUnTiret = ' + auMoinsUneVilleAvecUnTiret);

//filter()
let villesSansTiretSansEspace = villes.filter(ville => {
    let tiret = ville.includes('-');
    let espace = ville.includes(' ');
    if (tiret || espace) {
        return !ville;
    } else {
        return ville;
    }
})
console.log(('villesSansTiretSansEspace = ' + villesSansTiretSansEspace))

//Chainer les Fonctions
let villesMajusculeSeTerminantParS = [];
villes.filter(ville => {
    let lastChar = ville.substr(ville.length - 1);
    if (lastChar === 's') {
        villesMajusculeSeTerminantParS.push(ville.toUpperCase());
    }
})
console.log('villesMajusculeSeTerminantParS = ' + villesMajusculeSeTerminantParS)



