import { fill } from '../../getters/getBySearch';
import { Coin } from '../../interfaces/interfaces';
import { CoinsRow } from './CoinsRow';



type TablesArgs = {
    coins: Coin[]
}

const title = ["#", "Coin","Price", "Percent Change 24h", "24h Volume"]


export const Tables = (({coins}: TablesArgs) => {


    
  return <>
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
  </>;
});
