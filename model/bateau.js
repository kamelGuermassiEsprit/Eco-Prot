var mongo=require("mongoose"); //hadha bech yasnaalena les tableaux
const Schema=mongo.Schema; // ykhalina f dhnya ma base de donneé
const Bateau=new Schema
(
{
type:String,
matricule:String,
numero:Number,
Longueur:Number, 
Largeur :Number, 
}
);
module.exports=mongo.model("bateau",Bateau)