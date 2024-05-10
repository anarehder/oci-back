import { getPriceRepository } from "../repositories";

export async function getPriceService() {
    const response = await getPriceRepository();
    response.items.forEach((item: { currencyCodeLocalizations: any[]; }) => {
        item.currencyCodeLocalizations = item.currencyCodeLocalizations.filter(localization => localization.currencyCode === "BRL");
      });
    return response.items;
}