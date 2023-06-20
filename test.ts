import {Transaction} from '@emurgo/cardano-serialization-lib-nodejs';
import {readFileSync} from 'fs';

const file = readFileSync('tx.txt', 'utf8');

const parseData = () =>{
    const tx = Transaction.from_bytes(Buffer.from(file, 'hex'));
    console.log(tx);
    setTimeout(parseData, 500);
}

parseData();