package fr.romgrm;

public class Agence {
    static Agence agenceNantes; 
    String nom; 
    String nomDuCommercial; 
    Adresse adresse; 
}

Agence(String nom, String nomDuCommercial){
    this.nom= nom; 
    this.nomDuCommercial = nomDuCommercial; 

}

//Ajouter une adresse à l'agence en recuperant la class Adresse

void ajouterAdresse(Adresse adresse){
    this.adresse = adresse; 
}

// Créer l'agence de Nantes 

static void creerAgenceNantes(){
    Adresse adresse = new Adresse("Rue du Taillis", 44000, "Nantes"); 
    agenceNantes.ajouterAdresse(adresse);
}