import { ExchangesRow } from './ExchangesRow';
import { Market } from '../../interfaces/interfaces';
import { sortTable } from '../../helpers/short';
import MaterialTable from 'material-table';


interface TablesArgs  {
    market: Market[],
}



const title = ["#", "Name","update", "Volume USD"]

export const TableExchanges = (({market}:TablesArgs) => {
    const columns = [
        {
          title: "Title",
          field: "name",
          filtering: false
        },
        {
          title: "Update",
          field: "udate",
          cellStyle: (cellData:any) => ({
            color: (cellData === "Recently") ? '#008000' : '#FF0000'
          })
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

return <>
<MaterialTable
data={market} 
columns={columns}
title="Exchanges Table"
  options={{
    filtering: true
  }}
  
/>
</>
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
