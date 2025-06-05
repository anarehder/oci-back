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
          time_end: 'asc',
        }
      })
    return subscriptions;
}

export async function getCommitDetailsRepository(tenancies: string[]) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const amanha = new Date();
  amanha.setHours(0, 0, 0, 0);
  amanha.setDate(amanha.getDate() + 1);
  
  const subscriptions = await prisma2.subscriptionCommit.findMany({
    where: {
      tenancy_name: {
        in: tenancies,
      },
      updated: {
        gte: hoje,
        lt: amanha,
      }
    },
    orderBy: {
      time_ended_commit: 'asc',
    }
  })
  return subscriptions;
}