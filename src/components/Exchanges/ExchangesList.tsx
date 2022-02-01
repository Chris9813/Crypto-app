import { useEffect, useMemo, useState } from 'react';
import { Tables } from '../Coins/Tables';
import { TableExchanges } from './TableExchanges';


export const ExchangesList = () => {

    const [search, setsearch] = useState("");
    const [market, setMarket] = useState([]);

    const getData = async() => {
            const url = `https://api.coinlore.net/api/coin/markets/?id=90`
            const resp = await fetch(url);
            const res = await resp.json()
            .then(name => setMarket(name)
                )
    }

    useEffect(() => {
        getData()
    }, []);
        
        console.log(market);
        
        


  return <div className='mt-5'>
  <input onChange={(e) => setsearch(e.target.value)} type='text' placeholder='Search Coin' className='form-control bg-dark text-white border-2 mt-lg-4 my-4 ' />
<div className="row">
<TableExchanges market={market} />
</div>

</div>
};
