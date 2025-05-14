import { prisma2 } from "../config/database";

export async function getOrphanBVRepository() {
    const orphan = await prisma2.blockVolume.findMany({
        where: {
            is_orfao: 'Y'
        },
        orderBy: {
            display_name: 'asc', // ou 'desc' para ordem decrescente
        },
    });

    return orphan;
}

export async function getBlockVolumeListRepository() {
    const orphan = await prisma2.blockVolume.findMany({
        orderBy: {
            display_name: 'asc',
        }
    });

    return orphan;
}

export async function getBlockVolumesByTenancyRepository(tenancies: string[]){
    const blockVolumes = await prisma2.blockVolume.findMany({
        where: {
          tenancy_name: {
            in: tenancies,
          },
        },
        orderBy: {
          display_name: 'asc',
        },
      });

    return blockVolumes;
}