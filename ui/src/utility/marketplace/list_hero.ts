import { Transaction } from "@mysten/sui/transactions";

export const listHero = (
  packageId: string,
  heroId: string,
  priceInSui: string,
) => {
  const tx = new Transaction();
  
  // SUI'yi MIST'e çevir (1 SUI = 1,000,000,000 MIST)
  const priceInMist = BigInt(parseFloat(priceInSui) * 1_000_000_000);
  
  tx.moveCall({
    target: `${packageId}::marketplace::list_hero`,
    arguments: [
      tx.object(heroId),
      tx.pure.u64(priceInMist),
    ],
  });

  return tx;
};