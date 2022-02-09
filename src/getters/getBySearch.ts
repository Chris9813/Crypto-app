import {Coin} from "../interfaces/interfaces"

type getterType = {
    target: Coin[],
    search: string,
}

export const fill = ({target, search}:getterType) => {
    return target.filter((item:Coin) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
    item.symbol.toLowerCase().includes(search.toLowerCase()))

}