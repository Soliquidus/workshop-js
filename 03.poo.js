// TP03 - Programmation orientée objet

//Fonction constructeur
//Objet Personne
function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    Personne.prototype.age = 'NON RENSEIGNE';

    //Fonctions
    this.getNomComplet = () => String([nom, prenom, pseudo])

    this.afficherPersonne = () => {
        console.log(this.nom);
        console.log(this.prenom);
        console.log(this.pseudo);
        console.log(this.getNomComplet());
    }

    this.getInitiales = () => {
        let nom = this.nom.charAt(0);
        let prenom = this.prenom.charAt(0);
        return String([prenom, nom]).replace(',', '')
    }
}

//Objet client
function Client (prenom, nom, pseudo, numeroClient) {
    Personne.call(this, prenom, nom, pseudo);
    this.numeroClient = numeroClient;

    this.getInfos = () => String([this.numeroClient, this.nom, this.prenom])

}

//Creation des objets
let jules = new Personne('LEMAIRE', 'Jules', 'jules77');
console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet())
let paul = new Personne('LEMAIRE', 'Paul', 'paul44');
paul.afficherPersonne();

//Modifier un objet
jules.pseudo = 'jules44';
console.log(jules.getNomComplet());

//Ajouter une propriété à Personne
console.log(jules.age);
console.log(jules.age = 30);

//Ajouter une méthode à Personne
console.log(jules.getInitiales());

//Objet sans constructeur
let robert = {
    prenom: 'Robert',
    nom: 'LEPREFET',
    pseudo: 'robert77',
    getNomComplet: function () {
        return console.log(String([this.nom, this.prenom, this.pseudo]))
    },
    afficherPersonne: function () {
        console.log(this.nom);
        console.log(this.prenom);
        console.log(this.pseudo);
        this.getNomComplet();
    }
}
robert.afficherPersonne()

//Héritage via une fonction constructeur
let steve = new Client('Steve', 'LUCAS', 'steve44', 'A01');
steve.afficherPersonne();
console.log(steve.numeroClient)
console.log(steve.getInfos())






