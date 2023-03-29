// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as ccxt from 'ccxt';
let binance = new ccxt.binance()

export default async function handler(req, res) {
  let { ask } = await binance.fetchTicker('EUR/USDT')

  res.status(200).json({ price: Number((ask+ 0.001).toFixed(4)) })
}
