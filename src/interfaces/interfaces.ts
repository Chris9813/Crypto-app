export interface Market  {
    name: string; 
    udate: string;
    url: string; 
    usdt: number; 
    volume_usd: number
    base: string; 
    price_usd: number
}

export interface Coin  {
    name: string;
    price_usd: number;
    price_btc: number;
    volume24: number;
    csupply: number;
    percent_change_1h: number;
    percent_change_7d: number;
    percent_change_24h: number;
    symbol: string;
    id: number;
}

