import { Market } from '../../interfaces/interfaces';
import { MarketRow } from './MarketRow';



type tablesArgs = {
    market: Market[],
}


const title = ["#", "Name","Base", "Price USD", "Volume USD"]

export const TableMarket = (({market}:tablesArgs) => {

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
                <MarketRow market={mark} key={i} id={i+1}/> 
            ))
        }

</tbody>
</table>
});
