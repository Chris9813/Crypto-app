import React from 'react';
import { Market } from '../../interfaces/interfaces';


type MarketRowArgs = {
    market: Market
    id?: number;
}

export const MarketRow = (arg:MarketRowArgs) => {
    
    const {market, id} = arg
    
    const {name, base, price_usd, volume_usd} = market

  return   <tr>
  <td>{id}</td>
  <td>
  <span className='mx-3 text-uppercase'>{name}</span>
  </td>
  <td>{base}</td>
  <td className="text-success">
      {price_usd}
  </td>
  <td>
      {volume_usd}
  </td>

</tr>
};