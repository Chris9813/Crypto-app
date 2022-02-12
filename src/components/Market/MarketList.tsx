import { useEffect, useMemo, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { fillMarket } from '../../getters/getterBySearchMarket';
import { TableMarket } from './TableMarket';


type MarketId =  {
    marketId: string;
  }

export const MarketList = (() => {


    const {marketId}:MarketId = useParams()
    
    const [market, setMarket] = useState([]);
    const [search, setSearch] = useState("");

    const getData = async() => {
            const url = `https://api.coinlore.net/api/coin/markets/?id=${marketId}`
            const resp = await fetch(url);
            const res = await resp.json()
            .then(name => setMarket(name)
                )
    }



    useEffect(() => {
        getData()
    }, []);
    
    
    const args = {target:market, search:search}
    
    const data = useMemo(() => fillMarket(args), [args]); 
    
    if ( !market ) {
      return <Redirect to="/" />;
  }



  return  <div className='container'>
    <TableMarket market = {data} />
    
    </div>
});
