import React from 'react';
import { CoinsRow } from './CoinsRow';

type TablesArgs = {
    coins: never[]
    search: string;
}

type Coin = {
    name: string;
    symbol: string;
}

const title = ["#", "Coin","Price", "Percent Change 24h", "24h Volume"]


export const Tables = ({coins, search}: TablesArgs) => {

    console.log(coins);
    const fil = coins.filter((coin:Coin) => 
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
    )
    
  return <>
    <table className="table table-hover text-white table-dark" id="mydatatable">
        <thead>
            <tr>
                {
                    title.map((title, i) => (
                        <td key={i}>{title}</td>
                    ))
                }
            </tr>
        </thead>
        <tbody>
        
        {
            fil.map((coin,i) => (
                <CoinsRow coin={coin} key={i} id={i+1} /> 
            ))
        }

        </tbody>
    </table>
  </>;
};
