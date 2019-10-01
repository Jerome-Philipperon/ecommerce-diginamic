export default class Article {
    name : string;
    description : string;
    quantity : number;
    price : number;

    constructor (name : string, description : string, quantity : number, price : number){
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
}