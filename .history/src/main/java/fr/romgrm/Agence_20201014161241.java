package fr.romgrm;

import java.util.ArrayList;
//CLASS
public class Agence {
    String ville; 
    ArrayList<Voiture> stock; 


//CONSTRUCTOR
    public Agence(String ville){
        this.ville = ville; 
        this.stock = new ArrayList<Voiture>(); 
    }

    void ajouterVoiture(Voiture voiture){
        this.stock.add(voiture); 
    }

    void afficherStock(){
        for (Voiture voiture : stock) {
            System.out.println(voiture.getChaine()); 
        }
    }

    
 String getChaine(){
    return "Agence de " + this.ville; 
 }   
}
