import React, { memo, useEffect, useMemo, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { fill } from '../../getters/getBySearch';
import { fillMarket } from '../../getters/getterBySearchMarket';
import { Tables } from '../Coins/Tables';
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


  return  <>
    <input onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search Market' className='form-control bg-dark text-white border-2 mt-lg-4 my-4 ' />
    <TableMarket market = {data} />
    
    </>
});
