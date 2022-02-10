import { useEffect, useMemo, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { CoinCard } from './CoinCard';


type CoinId =  {
  coinId: string;
}
type Coin =  {
  name: string;
}

export const CoinsScreen = ({history}:any) => {


  const {coinId}:CoinId = useParams()

  const [state, setstate] = useState([])
    
    const getData = async(start=0) => {
        try {
            const url = `https://api.coinlore.net/api/tickers/?start=${start}&limit=100`
            const resp = await fetch(url);
            const {data} = await resp.json();
            setstate(data)
        } catch (error) {
            console.log(error);
        }
    
    }

    const coin = useMemo(() => state.filter((item:Coin) => item.name === coinId), [state]); 
    
    console.log(coin);
    
    
        useEffect(() => {
            getData()
        }, [])
    //(() => getHeroById( heroeId ), [ heroeId ]);
    

    if ( !state ) {
        return <Redirect to="/" />;
    }
  
    const handleReturn = () => {

      if( history.length <=2 ) {
          history.push('/');
      } else {
          history.goBack();
      }

  }
  

  return (
    <div className="mt-1">
        <div className='d-flex justify-content-center'>
        {
        coin.map((item, i) => {
            return <CoinCard item={item} key={i} />
        })
        }
        </div>
        <div className='d-flex justify-content-center'>
            <button
            onClick={handleReturn}
                className="btn btn-outline-info my-4 "
                
            >
                Return
            </button>  
        </div>
    </div>
)
};

/*



*/
