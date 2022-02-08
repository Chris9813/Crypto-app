import React, { memo, useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Tables } from '../Coins/Tables';
import { TableMarket } from './TableMarket';


type Mark = {
    market: never[]
}

type MarkItem = {
    base: string;
    name: string;
    price_usd: number;
    volume_usd: number;
}

type MarketId =  {
    marketId: string;
  }

  type MarkName = {
      name: string
  }

export const MarketList = (({history}:any) => {


    const {marketId}:MarketId = useParams()
    console.log(marketId);
    
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
    

    if ( !market ) {
        return <Redirect to="/" />;
    }
    console.log(market)
    
    


  return  <>
    <input onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search Market' className='form-control bg-dark text-white border-2 mt-lg-4 my-4 ' />
    <TableMarket market = {market} search={search} />
    
    </>
});
