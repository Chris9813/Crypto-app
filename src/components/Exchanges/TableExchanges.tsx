
import MaterialTable from 'material-table';
import { makeStyles } from "@material-ui/core/styles";
import { ExchangesRow } from './ExchangesRow';

type TablesArgs = {
    market: never[],
    search: string
}

type nameType = {
    market: {
        clave: 0
    }
}

const title = ["#", "Name","update", "Volume USD"]

export const TableExchanges = ((arg:TablesArgs) => {
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
    const {market} = arg;
      console.log(market)
      /*
      let name:any = []
      const names2 = Object.entries(market).forEach(([key, value]) => {
        let model = {
            value
        }
        name.push(model)
    });
    console.log(name)
    */
return <>
    <MaterialTable
    data={market} 
    columns={columns}
    />
    </>
})

/*<table className="table table-hover text-white table-dark" id="mydatatable2">
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
            names.filter((item:any) => item.name.includes((arg.search))).map((item:any, i:number) => {
                return <ExchangesRow args={item} id={i} /> 
            })
        }
    </tbody>
</table>
});
*/
