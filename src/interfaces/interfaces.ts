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
    symbol: string;
    price_usd: number;
    percent_change_24h: number;
    volume24: number;
}

