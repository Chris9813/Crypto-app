import { MarketRow } from '../Market/MarketRow';

type TablesArgs = {
    market: never[]
}

const title = ["#", "Name","udate", "usdt", "Volume USD"]

export const TableExchanges = (({market}:TablesArgs) => {
    
  return <table className="table table-hover text-white table-dark" id="mydatatable2">
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
            market.map((mark, i) => (
                <MarketRow market={mark}  id={i+1}/> 
            ))
        }

</tbody>
</table>
});
