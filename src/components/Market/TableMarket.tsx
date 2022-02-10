import MaterialTable from 'material-table';
import { Market } from '../../interfaces/interfaces';
import { MarketRow } from './MarketRow';



type tablesArgs = {
    market: Market[],
}


const title = ["#", "Name","Base", "Price USD", "Volume USD"]

export const TableMarket = (({market}:tablesArgs) => {
    console.log(market)
    const columns = [
        {
          title: "Title",
          field: "name",
          filtering: false
        },
        {
          title: "Base",
          field: "base",
        },
        {
            title: "Price",
            field: "price_usd",
            cellStyle: (cellData:any) => ({
              color: '#008000'
            })
        },
        {
            title: "24h Volume",
            field: "volume_usd",
        },
      ];

  return <div className='my-4'>
  <MaterialTable
  data={market} 
  columns={columns}
  title="Market Table"
    options={{
      actionsColumnIndex: -1,
      filtering: true
    }}
    
  />
  </div>
});
