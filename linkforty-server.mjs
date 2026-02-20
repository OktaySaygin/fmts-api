import { createServer } from '@linkforty/core';
import { config } from 'dotenv';

config();

const PORT = process.env.LINKFORTY_PORT || 3040;
const HOST = process.env.LINKFORTY_HOST || '0.0.0.0';

async function start() {
    const server = await createServer({
        database: {
            url: process.env.DATABASE_URL,
            pool: {
                min: 2,
                max: 10,
            },
        },
        redis: process.env.REDIS_URL
            ? { url: process.env.REDIS_URL }
            : undefined,
        cors: {
            origin: process.env.CORS_ORIGIN || '*',
        },
        logger: true,
    });

    await server.listen({ port: Number(PORT), host: HOST });
    console.log(`LinkForty server çalışıyor → http://${HOST}:${PORT}`);
}

start().catch((err) => {
    console.error('LinkForty başlatılamadı:', err);
    process.exit(1);
});
