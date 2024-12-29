import { yarg as argv } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";
import { SaveFile } from './domain/use-cases/save-file.use-case';

// console.log(process.argv);

// console.log(argv);

( async() => {
     
      await main();
     
})();

async function main(){

      // console.log(argv);
      const { b:base, l:limit, s:showTable, n:fileName, d:fileDestination } = argv;
     ServerApp.run({base, limit, showTable, fileName, fileDestination});

}