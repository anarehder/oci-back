import { prisma2 } from "../config/database";
import { getPriceRepository } from "../repositories";

export async function getPriceService() {
    const response = await getPriceRepository();
    response.items.forEach((item: { currencyCodeLocalizations: any[]; }) => {
        item.currencyCodeLocalizations = item.currencyCodeLocalizations.filter(localization => localization.currencyCode === "BRL");
      });
    return response.items;
}

export async function getSubscriptionDetailsRepository(tenancies: string[]) {
  const agora = new Date();
  const subscriptions = await prisma2.subscriptionDetails.findMany({
        where: {
          tenancy_name: {
            in: tenancies,
          },
          time_end: {
            gte: agora,
          }
        },
        orderBy: {
          tenancy_name: 'asc',
        }
      })
    return subscriptions;
}