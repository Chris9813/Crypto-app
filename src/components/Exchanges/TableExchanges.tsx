import { MarketRow } from '../Market/MarketRow';
import { ExchangesRow } from './ExchangesRow';

type TablesArgs = {
    market: {
        name: string;
        udate: string;
        volume_usd: number;
    }
}

type nameType = {
    market: {
        clave: 0
    }
}

const title = ["#", "Name","update", "Volume USD"]

export const TableExchanges = ((arg:any) => {
    let names = []
    let claves = Object.keys(arg.market); // claves = ["nombre", "color", "macho", "edad"]
    for(let i=0; i< claves.length; i++){
    let clave:string = claves[i];
    names.push({name: arg.market[clave].name,
                Update: arg.market[clave].udate,
                volume_usd: arg.market[clave].volume_usd,
    })
    }
    console.log(arg.market);
    
    
    
    

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
            names.map((item:any, i:any) => {
                return <ExchangesRow args={item} id={i+1} /> 
            })
                
            
        }

</tbody>
</table>
});
