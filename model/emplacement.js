var mongo=require("mongoose"); //hadha bech yasnaalena les tableaux
const Schema=mongo.Schema; // ykhalina f dhnya ma base de donneé
const Emplacement=new Schema
(
{
nom:String,
numero:Number,
statutBateau:String, 
infoBateau:String, 
}
);
module.exports=mongo.model("emplacement",Emplacement)