import app, { init } from "./app";

const defaultPort = 4001;
const fallbackPort = 4006;

async function startServer(port: number) {
  try {
    await init(); // inicialização de serviços, banco de dados, etc.

    const server = app.listen(port, () => {
          /* eslint-disable-next-line no-console */
          console.log(`Server is listening on port ${port}.`);
        });

    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE' && port === port) {
        console.warn(`⚠️ Porta ${port} em uso. Tentando a porta ${fallbackPort}...`);
        startServer(fallbackPort);
      } else {
        console.error('❌ Erro ao iniciar o servidor:', err);
      }
    });

  } catch (err) {
    console.error('❌ Erro durante a inicialização:', err);
  }
}

startServer(defaultPort);