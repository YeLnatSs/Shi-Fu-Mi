var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");
var choixOrdi = Math.random();


var comparer = function(choix1,choix2)
{
    if(choix1 == choix2){
        return"Egalité !";
    }else if(choix1 == "pierre" ){
        if(choix2 == "ciseaux" ){
            return "feuille gagne. Vous avez perdu :(" ;
        }else{
            return "pierre gagne";
        }
    }else if(choix1 == "feuille" ){
        if(choix2 == "pierre" ){
            return "feuille gagne";
        }else{
            return "ciseaux gagne. Vous avez perdu :(";
        }
    }else if(choix1 == "ciseaux" ){
        if(choix2== "feuille" ){
            return "ciseaux gagne";
        }else{
            return "pierre gagne. Vous avez perdu :(";
        }
    }
    if(choix1!="pierre" && choix1!="feuille" && choix1!="ciseaux"){
        return "Vous devez choisir entre la pierre, la feuille ou les ciseaux.";
    }
};
comparer(choixUtilisateur,choixOrdi);
console.log(comparer(choixUtilisateur,choixOrdi));
alert(comparer(choixUtilisateur,choixOrdi));
