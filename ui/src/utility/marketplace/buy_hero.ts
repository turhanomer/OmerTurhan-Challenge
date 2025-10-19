import { Transaction } from "@mysten/sui/transactions";

export const buyHero = (packageId: string, listHeroId: string, priceInSui: string) => {
  const tx = new Transaction();
  
  // SUI'yi MIST'e çevir (1 SUI = 1,000,000,000 MIST)
  const priceInMist = BigInt(parseFloat(priceInSui) * 1_000_000_000);
  
  // Coin'i böl (split) - ödeme için tam miktarı ayır
  const [paymentCoin] = tx.splitCoins(tx.gas, [priceInMist]);
  
  tx.moveCall({
    target: `${packageId}::marketplace::buy_hero`,
    arguments: [
      tx.object(listHeroId),
      paymentCoin,
    ],
  });

  return tx;
};