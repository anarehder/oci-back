import { prisma2 } from "../config/database";

export async function getComputeInstancesEventsRepository() {
  const eventos = await prisma2.computeEvents.findMany({
    take: 1000,
    orderBy: {
      createdAt: 'desc'
    },
    select: {
      id: true,
      eventType: true,
      eventTime: true,
      source: true,
      opcRequestId: true,
      compartmentId: true,
      compartmentName: true,
      eventName: true,
      message: true,
      action: true,
      principalName: true,
      ipAddress: true,
      displayName: true,
      lifecycleState: true,
      shape: true,
      ocpus: true,
      memoryInGbs: true,
      processorDescription: true,
      createdBy: true,
      createdOn: true,
      preserveBootVolume: true,
      createdAt: true,
      instanceActionType: true,
      tenancyName: true,
      isCheck: true,
      ticket: true,
    },
    where: {
      isCheck: null
    }
  });

  return eventos;
}

export async function getJoinComputeInstancesEventsRepository(tenancies: string[]) {
  const eventos = await prisma2.computeEvents.findMany({
    take: 1000,
    where: {
      tenancyName: {
        in: tenancies,
      },
      isCheck: null
    },
    orderBy: {
      eventTime: 'desc'
    },
    select: {
      id: true,
      eventType: true,
      eventTime: true,
      source: true,
      opcRequestId: true,
      compartmentId: true,
      compartmentName: true,
      eventName: true,
      message: true,
      action: true,
      principalName: true,
      ipAddress: true,
      displayName: true,
      lifecycleState: true,
      shape: true,
      ocpus: true,
      memoryInGbs: true,
      processorDescription: true,
      createdBy: true,
      createdOn: true,
      preserveBootVolume: true,
      createdAt: true,
      instanceActionType: true,
      tenancyName: true,
      isCheck: true,
      ticket: true,
    },
  });

  return eventos;
}

export async function getIdentityEventsRepository() {
  const eventos = await prisma2.identityEvents.findMany({
    take: 1000,
    orderBy: {
      eventTime: 'desc'
    },
    select: {
      id: true,
      eventType: true,
      eventTime: true,
      source: true,
      opcRequestId: true,
      // rawEvent: false, // não incluir
      adminResourceName: true,
      adminResourceType: true,
      compartmentName: true,
      principalName: true,
      action: true,
      message: true,
      idcsLastModifiedByName: true,
      idcsLastModifiedByType: true,
      policyName: true,
      statements: true,
      createdAt: true,
      eventName: true,
      tenancyName: true,
      isCheck: true,
      ticket: true,
    },
    where: {
      isCheck: null
    }
  });

  return eventos;
}

export async function getJoinIdentityEventsRepository(tenancies: string[]) {
  const eventos = await prisma2.identityEvents.findMany({
    take: 1000,
    where: {
      tenancyName: {
        in: tenancies,
      },
      isCheck: null
    },
    orderBy: {
      eventTime: 'desc'
    },

    select: {
      id: true,
      eventType: true,
      eventTime: true,
      source: true,
      opcRequestId: true,
      // rawEvent: false, // não incluir
      adminResourceName: true,
      adminResourceType: true,
      compartmentName: true,
      principalName: true,
      action: true,
      message: true,
      idcsLastModifiedByName: true,
      idcsLastModifiedByType: true,
      policyName: true,
      statements: true,
      createdAt: true,
      eventName: true,
      tenancyName: true,
      isCheck: true,
      ticket: true,
    },
  });

  return eventos;
}

export async function getNetworkEventsRepository() {
  const eventos = await prisma2.networkEvents.findMany({
    take: 1000,
    orderBy: {
      eventTime: 'desc'
    },
    where: {
      isCheck: null
    },
    select: {
      id: true,
      eventType: true,
      eventTime: true,
      source: true,
      opcRequestId: true,
      compartmentId: true,
      compartmentName: true,
      eventName: true,
      message: true,
      action: true,
      principalName: true,
      ipAddress: true,
      routeRules: true,
      createdBy: true,
      createdOn: true,
      createdAt: true,
      tenancyName: true,
      isCheck: true,
      ticket: true
      // NÃO incluir rawEvent
    },
  });

  return eventos;
}

export async function getJoinNetworkEventsRepository(tenancies: string[]) {
  const eventos = await prisma2.networkEvents.findMany({
    take: 1000,
    where: {
      tenancyName: {
        in: tenancies,
      },
      isCheck: null
    },
    orderBy: {
      eventTime: 'desc'
    },
    select: {
      id: true,
      eventType: true,
      eventTime: true,
      source: true,
      opcRequestId: true,
      compartmentId: true,
      compartmentName: true,
      eventName: true,
      message: true,
      action: true,
      principalName: true,
      ipAddress: true,
      routeRules: true,
      createdBy: true,
      createdOn: true,
      createdAt: true,
      tenancyName: true,
      isCheck: true,
      ticket: true
      // NÃO incluir rawEvent
    },
  });

  return eventos;
}