import { prisma2 } from "../config/database";

export async function getComputeInstancesEventsRepository(){
  const eventos = await prisma2.computeEvents.findMany({
    take: 1000,
    select: {
      displayName: true,
      instanceActionType: true,
      eventName: true,
      compartmentName: true,
      eventTime: true,
      lifecycleState: true,
      principalName: true
    }
  });

  const eventosComDescricao = eventos.map(ce => ({
    ...ce,
    descricao_evento: `A instância ${ce.displayName ?? '[sem nome]'} sofreu a ação "${ce.instanceActionType?.toUpperCase() ?? ' - '}" (evento: ${ce.eventName}) no compartimento "${ce.compartmentName}" em ${ce.eventTime.toLocaleString('pt-BR')}. Estado atual: ${ce.lifecycleState ?? '[desconhecido]'} Ação realizada por: ${ce.principalName}`
  }));
  return eventosComDescricao;
}


export async function getJoinComputeInstancesEventsRepository(tenancies: string[]){
  const eventos = await prisma2.computeEvents.findMany({
    take: 1000,
    select: {
      displayName: true,
      instanceActionType: true,
      eventName: true,
      compartmentName: true,
      eventTime: true,
      lifecycleState: true,
      principalName: true
    },
    where: {
      tenancyName: {
        in: tenancies,
      },
    },
  });
  
  const eventosComDescricao = eventos.map(ce => ({
    ...ce,
    descricao_evento: `A instância ${ce.displayName ?? '[sem nome]'} sofreu a ação "${ce.instanceActionType?.toUpperCase() ?? ' - '}" (evento: ${ce.eventName}) no compartimento "${ce.compartmentName}" em ${ce.eventTime ? ce.eventTime.toLocaleString('pt-BR') : "-"}. Estado atual: ${ce.lifecycleState ?? '[desconhecido]'} Ação realizada por: ${ce.principalName}`
  }));
  return eventosComDescricao;
}

export async function getIdentityEventsRepository(){
  const eventos = await prisma2.identityEvents.findMany({
    take: 1000,
  });

//   const eventosComDescricao = eventos.map(ce => ({
//     ...ce,
//     descricao_evento: `A instância ${ce.displayName ?? '[sem nome]'} sofreu a ação "${ce.instanceActionType?.toUpperCase() ?? ' - '}" (evento: ${ce.eventName}) no compartimento "${ce.compartmentName}" em ${ce.eventTime.toLocaleString('pt-BR')}. Estado atual: ${ce.lifecycleState ?? '[desconhecido]'} Ação realizada por: ${ce.principalName}`
//   }));
  return eventos;
}


export async function getJoinIdentityEventsRepository(tenancies: string[]){
  const eventos = await prisma2.identityEvents.findMany({
    take: 1000,
    where: {
      tenancyName: {
        in: tenancies,
      },
    },
  });
//   const eventosComDescricao = eventos.map(ce => ({
//     ...ce,
//     descricao_evento: `A instância ${ce.displayName ?? '[sem nome]'} sofreu a ação "${ce.instanceActionType?.toUpperCase() ?? ' - '}" (evento: ${ce.eventName}) no compartimento "${ce.compartmentName}" em ${ce.eventTime.toLocaleString('pt-BR')}. Estado atual: ${ce.lifecycleState ?? '[desconhecido]'} Ação realizada por: ${ce.principalName}`
//   }));
  return eventos;
}

export async function getNetworkEventsRepository(){
  const eventos = await prisma2.networkEvents.findMany({
    take: 1000,
  });

//   const eventosComDescricao = eventos.map(ce => ({
//     ...ce,
//     descricao_evento: `A instância ${ce.displayName ?? '[sem nome]'} sofreu a ação "${ce.instanceActionType?.toUpperCase() ?? ' - '}" (evento: ${ce.eventName}) no compartimento "${ce.compartmentName}" em ${ce.eventTime.toLocaleString('pt-BR')}. Estado atual: ${ce.lifecycleState ?? '[desconhecido]'} Ação realizada por: ${ce.principalName}`
//   }));
  return eventos;
}


export async function getJoinNetworkEventsRepository(tenancies: string[]){
  const eventos = await prisma2.networkEvents.findMany({
    take: 1000,
    where: {
      tenancyName: {
        in: tenancies,
      },
    },
  });

//   const eventosComDescricao = eventos.map(ce => ({
//     ...ce,
//     descricao_evento: `A instância ${ce.displayName ?? '[sem nome]'} sofreu a ação "${ce.instanceActionType?.toUpperCase() ?? ' - '}" (evento: ${ce.eventName}) no compartimento "${ce.compartmentName}" em ${ce.eventTime.toLocaleString('pt-BR')}. Estado atual: ${ce.lifecycleState ?? '[desconhecido]'} Ação realizada por: ${ce.principalName}`
//   }));
  return eventos;
}