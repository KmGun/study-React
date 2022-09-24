const BASE_URL = `https://api.coinpaprika.com/v1`;
type coinId = string | undefined;


export function fetchCoins(){
	return fetch(`${BASE_URL}/coins`).then(res=>res.json())
}


export function fetchCoinInfo(coinId : coinId){
	return fetch(`${BASE_URL}/coins/${coinId}`).then(res=>res.json())
}

export function fetchCoinHistory(coinId : coinId){
	return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`).then(res => res.json())
}