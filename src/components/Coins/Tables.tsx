import MaterialTable from 'material-table';
import { useHistory } from 'react-router-dom';
import { fill } from '../../getters/getBySearch';
import { Coin } from '../../interfaces/interfaces';
import { CoinsRow } from './CoinsRow';



type TablesArgs = {
    coins: Coin[]
}



export const Tables = (({coins}: TablesArgs) => {
    const history = useHistory()
    const columns = [
        {
          title: "Title",
          field: "name",
          filtering: false
        },
        {
          title: "Price",
          field: "price_usd",
        },
        {
            title: "Percent Change 24h %",
            field: "percent_change_24h",
            cellStyle: (cellData:any) => ({
              color: (cellData > 0) ? '#008000' : '#FF0000'
            })
        },
        {
            title: "24h Volume",
            field: "volume24",
        },
      ];
    const handleClick = (rowData:any) => {
      console.log(rowData)
        history.push(`./coins/${rowData.name}`)
    }
  return <div className='mb-3'>
    <MaterialTable
    data={coins} 
    columns={columns}
    title="Coins Table"
    actions={[
        {
          icon: "search",
          tooltip: "More Info",
          onClick: (evento, rowData) => handleClick(rowData) // ,
        },
      ]}
      options={{
        actionsColumnIndex: -1,
        filtering: true,

      }}
      
    />
    </div>
});

/*

    <table className="table table-hover text-white table-dark" id="mydatatable">
        <thead>
            <tr>
                {
                    title.map((title, i) => (
                        <td onClick={(e) => console.log(e)} key={i}>{title}</td>
                    ))
                }
            </tr>
        </thead>
        <tbody>
        
        {
            coins.map((coin,i) => (
                <CoinsRow coin={coin} key={i} id={i+1} /> 
            ))
        }

        </tbody>
    </table>

*/