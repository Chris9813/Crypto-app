import React from 'react';


type CoinsRowArgs = {
    coin: {
        name: string;
        symbol: string;
        price_usd: number;
        percent_change_24h: number;
        volume24: number;
    };
    id: number;
    key?: number;
}

export const CoinsRow = (arg:CoinsRowArgs) => {
    
    const {coin, id} = arg
    console.log(coin.name);

  return   <tr>
  <td>{id}</td>
  <td>
    {coin.name}
  <span className='mx-3 text-muted text-uppercase'>{coin.symbol}</span>
  </td>
  <td>{coin.price_usd}</td>
  <td className={coin.percent_change_24h > 0 ? "text-success" : "text-danger"}>
      {coin.percent_change_24h}
  </td>
  <td>{coin.volume24}</td>
</tr>
};
