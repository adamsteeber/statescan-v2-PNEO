import { assetBfkk } from "./asset-bfkk-20";
import { assetBill } from "./asset-bill-223";
import { assetChrawnna } from "./asset-chrawnna-567";
import { assetPolarisDAO } from "./asset-polarisdao-16";
import { assetRMRK } from "./asset-rmrk-8";
import { assetUSDt } from "./asset-usdt-1984";
import { assetPNEO } from "./asset-pneo-222";

export const statemineAssetInfo = {
  [assetBfkk.id]: assetBfkk.data,
  [assetRMRK.id]: assetRMRK.data,
  [assetBill.id]: assetBill.data,
  [assetChrawnna.id]: assetChrawnna.data,
  [assetPolarisDAO.id]: assetPolarisDAO.data,
  [assetUSDt.id]: assetUSDt.data,
  [assetPNEO.id]: assetPNEO.data,
};
