import React from 'react';


type MarketRowArgs = {
    market: {
        name: string;
        base: string;
        price_usd: number;
        volume_usd: number;
    };
    id?: number;
}

export const MarketRow = (arg:MarketRowArgs) => {
    
    const {market, id} = arg
    console.log(arg);
    
    const {name, base, price_usd, volume_usd} = market

  return   <tr>
  <td>{id}</td>
  <td>

    {

    }

  <span className='mx-3 text-uppercase'>{name}</span>
  </td>
  <td>{base}</td>
  <td>
      {price_usd}
  </td>
  <td>
      {volume_usd}
  </td>

</tr>
};