import { DiscountOffers } from 'src/app/Models/discount-offers';
export class Store {

  constructor(public name:string,
    public branches:string[],
    public logo:string,public dtype:DiscountOffers){

    }
}
