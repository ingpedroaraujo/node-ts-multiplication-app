import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

// console.log(yarg);

const base: number = yarg.b;
const limit: number = yarg.l;
let outputTableRow : string = '';

const headerTable: string = `
===============================
      Tabla del ${base}
===============================\n
`;


for (let i = 1; i <= yarg.l; i++) {
   outputTableRow += `${base} x ${i} = ${base * i}\n`;
}

const outputTable = headerTable + outputTableRow;

if(yarg.s) console.log(outputTable);


const dirPath: string = 'tables';

fs.mkdirSync(dirPath, { recursive: true });

fs.writeFileSync(`${dirPath}/tabla-${base}.txt`, outputTable );

console.log('File created!');







