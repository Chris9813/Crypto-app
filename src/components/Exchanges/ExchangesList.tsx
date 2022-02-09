import { useEffect, useMemo, useState } from 'react';
import { Tables } from '../Coins/Tables';
import { TableExchanges } from './TableExchanges';

export const ExchangesList = () => {

    const [search, setsearch] = useState("");
    const [market, setMarket] = useState([]);

    const getData = async() => {
            const url = `https://api.coinlore.net/api/exchanges/`
            const resp = await fetch(url);
            const res = await resp.json()
            .then(name => setMarket(name)
                )
                
    }

    useEffect(() => {
        getData()
    }, []);
    
    let name:never[] = []
    const names2 = Object.entries(market).forEach(([key, value]) => {
      let model = value
      name.push(model)
  });


  return <div className='mt-5'>
  <input onChange={(e) => setsearch(e.target.value)} type='text' placeholder='Search Exchanges' className='form-control bg-dark text-white border-2 mt-lg-4 my-4 ' />
<div className="row">
<TableExchanges market={name} search={search} key={"market"} />
</div>

</div>
};
