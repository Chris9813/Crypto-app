import { useEffect, useMemo, useState } from 'react';
import { fillMarket } from '../../getters/getterBySearchMarket';
import { Market } from '../../interfaces/interfaces';
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

    let name:Market[] = []
    const names2 = Object.entries(market).forEach(([key, value]) => {
      let model = value
      name.push(model)
  });

  const args = {target: name, search:search}
  const data = useMemo(() => fillMarket(args),[args]);
  return <div className='mt-5'>
  <input onChange={(e) => setsearch(e.target.value)} type='text' placeholder='Search Exchanges' className='form-control bg-dark text-white border-2 mt-lg-4 my-4 ' />
<div className="row">
<TableExchanges market={data} />
</div>

</div>
};
