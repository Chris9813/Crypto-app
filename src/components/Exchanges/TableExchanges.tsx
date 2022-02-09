import { ExchangesRow } from './ExchangesRow';
import { Market } from '../../interfaces/interfaces';


interface TablesArgs  {
    market: Market[],
}



const title = ["#", "Name","update", "Volume USD"]

export const TableExchanges = (({market}:TablesArgs) => {


return <table className="table table-hover text-white table-dark" id="mydatatable2">
<thead>
    <tr>
            {
            title.map((title) => (
                <td key={title}>{title}</td>
                ))
            }
        </tr>
        </thead>
    <tbody>
        {
            market.map((item:Market, i:number) => {
                return <ExchangesRow args={item} key={i} id={i+1} /> 
            })
        }
    </tbody>
</table>
});



/*
    const columns = [
        {
          title: "Title",
          field: "name",
        },
        {
          title: "Update",
          field: "udate",
        },
        {
            title: "USDT",
            field: "usdt",
        },
        {
            title: "Volumen",
            field: "volume_usd",
        },
      ];

<>
    <MaterialTable
    data={market} 
    columns={columns}
    actions={[
        {
          icon: "edit",
          tooltip: "Edit Item",
          onClick: (evento, rowData) => redirectPage(rowData) // ,
        },
      ]}
    
      
    />
    </>
*/
