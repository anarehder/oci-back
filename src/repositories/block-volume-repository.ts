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
    const blockVolume = await prisma2.blockVolume.findMany({
        orderBy: {
            display_name: 'asc',
        }
    });

    return blockVolume;
}


export async function getVolumeBackupListRepository() {
    const backup = await prisma2.volumesBackup.findMany({
        orderBy: {
            displayName: 'asc',
        }
    });

    return backup;
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

export async function getVolumesBackupByTenancyRepository(tenancies: string[]){
    const backup = await prisma2.volumesBackup.findMany({
        where: {
          tenancyName: {
            in: tenancies,
          },
        },
        orderBy: {
          displayName: 'asc',
        },
      });

    return backup;
}

export async function getOrphanByTenancyRepository(tenancies: string[]) {
    const orphan = await prisma2.blockVolume.findMany({
        where: {
            is_orfao: 'Y',
            tenancy_name: {
                in: tenancies,
            },
        },
        orderBy: {
            display_name: 'asc', // ou 'desc' para ordem decrescente
        },
    });

    return orphan;
}