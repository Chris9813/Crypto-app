import { MarketRow } from './MarketRow';

type TablesArgs = {
    market: never[],
    search: string,
}

type Market = {
    name: string
}

const title = ["#", "Name","Base", "Price USD", "Volume USD"]

export const TableMarket = (({market, search}:TablesArgs) => {

    const fil = market.filter((market:Market) => 
    market.name.toLowerCase().includes(search.toLowerCase())
    )
    console.log(market)
    
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
            fil.map((mark, i) => (
                <MarketRow market={mark}  id={i+1}/> 
            ))
        }

</tbody>
</table>
});
