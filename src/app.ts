import { envs } from './config';
import { Server } from './presentation';

(() => {
    main();
})();

async function main() {
    //TODO: await the database

    //TODO: Start of our server
    new Server({
        port: envs.PORT
    }).start();
};