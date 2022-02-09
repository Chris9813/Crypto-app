import { useEffect, useMemo, useState } from 'react';
import { fill } from '../../getters/getBySearch';
import { Tables } from './Tables';



export const CoinsList = () => {

    const [coins, setCoins] = useState([]);
    const [search, setsearch] = useState("");

    const getData = async(start=0) => {
        try {
            const url = `https://api.coinlore.net/api/tickers/?start=${start}&limit=100`
            const resp = await fetch(url);
            const {data} = await resp.json();
            setCoins(data)
        } catch (error) {
            console.log(error);
        }
    }
    
    
    useEffect(() => {
            getData()
        }, [])

    const args = {target:coins, search:search}
    
    const data = useMemo(() => fill(args), [args]);


  return <div className='mt-5'>
  <input onChange={(e) => setsearch(e.target.value)} type='text' placeholder='Search Coin' className='form-control bg-dark text-white border-2 mt-lg-4 my-4 ' />
<div className="row">
  <Tables coins={data} />
</div>

</div>
};
