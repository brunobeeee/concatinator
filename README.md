# concatinator
Concatenate multiple files into one and display the output on a webserver `localhost:1234`.

## Getting started

### Docker Dev Environment
The `compose-dev.yaml` is written to create a Docker Dev Environment using the desktop client. For this go to `Dev Environments -> Create` and provide the URL to this repository. Now Docker sets up the container which you can then open in VSCode. The directory where all the repository content gets loaded in is `/com.docker.devenvironment.code`.

### Starting the App
To load all `npm` packages run:
```
npm install
```

To run the app run the following command:
```
npm run dev
```

This starts a [Parcel Dev Server](https://parceljs.org/features/development/), as well as the concatenation of the files provided in `IO/input/`. The concatenation is running through [npm-watch](https://www.npmjs.com/package/npm-watch) and runs everytime a file changes.

You can also run the individual parts standalone. See the `package.json` file under `scripts`.

#### Parcel dev server
```
npx parcel
```

#### Concatenation through npm-watch
```
npm run concat:watch
```

#### Concatenation standalone
```
npm run concat
```

