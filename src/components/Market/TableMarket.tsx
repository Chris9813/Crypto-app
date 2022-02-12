import MaterialTable from 'material-table';
import { Market } from '../../interfaces/interfaces';



type tablesArgs = {
    market: Market[],
}

export const TableMarket = (({market}:tablesArgs) => {
    const columns = [
        {
          title: "Title",
          field: "name",
          filtering: false,
          
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
