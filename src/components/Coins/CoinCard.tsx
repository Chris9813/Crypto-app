import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Coin } from '../../interfaces/interfaces';
import { MarketList } from '../Market/MarketList';


type itemArgs = {
    item: Coin;
    key: number;
}




export const CoinCard = ({item}:itemArgs) => {

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
    
    

    
  return <>
        <div className="card mb-3 ms-3 animate__animated animate__fadeIn mt-5" style={ { maxWidth: 540 } }>
                <div className="row no-gutters">
    
                    <div className="container">
                        
                        <div className="card-body">
                            <h5 className="card-title"> { item.name } </h5>
                            <p className="card-text"> <b>Price USD: </b>   {item.price_usd} </p>
                            <p className="card-text"> <b>Price BTC: </b>   {item.price_btc} </p>
                            <p className="card-text"> <b>Volumen 24h: </b> {item.volume24} </p>
                            <p className="card-text"> <b>Csupply:</b>  {item.csupply} </p>
                            <p className="card-text"> <b>Market Cap Usd:</b> {item.volume24} </p>
                            <p className= "card-text" > <b>Percent Change 1h:</b> <small className={item.percent_change_1h > 0 ? " text-success" : "text-danger"}>{item.percent_change_1h} %</small>  </p>
                            <p className="card-text"> <b>Percent Change 7d:</b> <small className={item.percent_change_7d > 0 ? " text-success" : "text-danger"}>{item.percent_change_7d} %</small>   </p>
                            <p className="card-text"> <b>Percent Change 24h:</b> <small className={item.percent_change_24h > 0 ? " text-success" : "text-danger"}>{item.percent_change_24h} %</small>  </p>
                            <p className="card-text">
                                <small className="text-muted"> { item.symbol } </small>
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="mt-5" style={ { maxWidth: 540 } } >
                
                {
        <Link className='text-decoration-none' to={ `../market/${item.id}` }>
            <h4>Markets</h4>
        </Link>
    }
            </div>
            </div>
            
  </>
};
