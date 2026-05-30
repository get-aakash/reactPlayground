import { ORDER_BURGER } from "./BurgerType";

export function orderBurger(number){
    return {
        type:ORDER_BURGER,
        payload: number
    }
}