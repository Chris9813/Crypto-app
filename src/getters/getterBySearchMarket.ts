import {Market} from "../interfaces/interfaces"

type getterType = {
    target: Market[],
    search: string,
}

export const fillMarket = ({target, search}:getterType) => {
    return target.filter((item:Market) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
}