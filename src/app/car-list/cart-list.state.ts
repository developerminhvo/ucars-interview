import { ICar } from "../shared/data-access";

export interface ICarList {
    carList: ICar[],
    filter: ICar[],
    keysearch: string
}