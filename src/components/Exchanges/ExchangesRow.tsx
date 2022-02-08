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
    const {name, Update, usdt, volume_usd, url} = arg.args
    

  return   <tr>
  <td>{arg.id}</td>
  <td>

  <a style={{textDecoration: "none"}} className='mx-3 text-uppercase' target="_blank" href={url}>{name}</a>
  </td>
  <td>{Update}</td>
  <td>
      {volume_usd}
  </td>

</tr>


};