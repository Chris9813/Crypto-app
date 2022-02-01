import { MarketRow } from './MarketRow';

type TablesArgs = {
    market: never[]
}

const title = ["#", "Name","Base", "Price USD", "Volume USD"]

export const TableMarket = ({market}:TablesArgs) => {
    console.log(market);
    
  return <table className="table table-hover text-white table-dark" id="mydatatable">
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
};
