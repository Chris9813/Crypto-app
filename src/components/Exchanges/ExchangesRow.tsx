import { Market } from "../../interfaces/interfaces";


type MarketRowArgs = {
    args: Market
    id?: number;
}


export const ExchangesRow = ({args, id}:MarketRowArgs) => {

    const {name, udate, usdt, volume_usd, url} = args
    

  return   <tr>
  <td>{id}</td>
  <td>

  <a style={{textDecoration: "none"}} className='mx-3 text-uppercase' target="_blank" href={url}>{name}</a>
  </td>
  <td className={udate === "Recently" ? "text-success" : "text-danger"}>{udate}</td>
  <td>
      {volume_usd}
  </td>

</tr>


};