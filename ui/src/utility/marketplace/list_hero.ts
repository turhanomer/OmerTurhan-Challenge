import { Transaction } from "@mysten/sui/transactions";

export const listHero = (
  packageId: string,
  heroId: string,
  priceInSui: string,
) => {
  const tx = new Transaction();
  
  const priceInMist = Math.floor(parseFloat(priceInSui) * 1_000_000_000);
  
  tx.moveCall({
    target: `${packageId}::marketplace::list_hero`,
    arguments: [
      tx.object(heroId),
      tx.pure.u64(priceInMist),
    ],
  });

  return tx;
};