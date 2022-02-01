type MarketRowArgs = {
    args: {
        name: string;
        Update: string;
        url: string;
        usdt: number;
        volume_usd: number;
    };
    id?: number;
}

export const ExchangesRow = (arg:MarketRowArgs) => {
    
    const {name, Update, usdt, volume_usd} = arg.args
    

  return   <tr>
  <td>{arg.id}</td>
  <td>

    {

    }

  <span className='mx-3 text-uppercase'>{name}</span>
  </td>
  <td>{Update}</td>
  <td>
      {volume_usd}
  </td>

</tr>


};