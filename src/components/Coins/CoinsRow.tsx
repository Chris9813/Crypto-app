import { Coin } from "../../interfaces/interfaces";




type CoinsRowArgs = {
    coin: Coin,
    id: number;
    key?: number;
}

export const CoinsRow = (arg:CoinsRowArgs) => {
    
    const {coin, id} = arg

  return   <tr>
  <td>{id}</td>
  <td>

    
    <a href={ `./coins/${coin.name}` } style={{textDecoration: "none"}}>
        {coin.name}
    </a>
    

  <span className='mx-3 text-muted text-uppercase'>{coin.symbol}</span>
  </td>
  <td>{coin.price_usd}</td>
  <td className={coin.percent_change_24h > 0 ? "text-success" : "text-danger"}>
      {coin.percent_change_24h} %
  </td>
  <td>{coin.volume24}</td>
</tr>
};
