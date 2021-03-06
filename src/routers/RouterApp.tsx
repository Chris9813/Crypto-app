import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { CoinsList } from '../components/Coins/CoinsList';
import { CoinsScreen } from '../components/Coins/CoinsScreen';
import { ExchangesList } from '../components/Exchanges/ExchangesList';
import { MarketList } from '../components/Market/MarketList';
import { Navbar } from '../components/ui/NavBar';


export const RouterApp = () => {
  return (
      <>
    <Router>
    <Navbar />
    <div>
        <Switch>
                <Route exact path="/market/:marketId" component={ MarketList } />
                <Route exact path="/coins/:coinId" component={ CoinsScreen } />
                <Route path="/coins" component={ CoinsList } />
                <Route path="/exchanges" component={ExchangesList} />
                <Redirect to="/coins" />
        </Switch>
    </div>
</Router>
</>
  )
};
