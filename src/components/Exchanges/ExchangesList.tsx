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
  return <div className='my-4'>
<div className="container">
<TableExchanges market={data} />
</div>

</div>
};
