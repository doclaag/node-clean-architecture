# Node with TypeScript - TS-Node-dev (preferred)

1. Install TypeScript and other dependencies

```
npm i -D typescript @types/node ts-node-dev rimraf
```

2. Initialize the TypeScript configuration file (You can configure it to your liking)

```
npx tsc --init --outDir dist/ --rootDir src
```

3. Create scripts for dev, build and start ([More about TS-Node-dev here](https://www.npmjs.com/package/ts-node-dev))

```
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```

4. Set up the database

```bash
docker-compose up -d
```
