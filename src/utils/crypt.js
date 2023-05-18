import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js';

function getAccessToken () {
 return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDI1MjIzODBhQTEzODA5QTU0OEY4ZTc1ZDgzQTAwMTA3RTQ0YzcxNTgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjkzODMxMDA4OTAsIm5hbWUiOiJkZXN0b3JlIn0.4DrTkEgtnU4ITuxPtEDlCZJKnv0eG_rgxuSuQM1cjYA'
}

function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}
const ipfs = makeStorageClient();
let CryptoJS = require("crypto-js");
let AES = CryptoJS.AES;

async function upload(data) {
	const json = JSON.stringify(data);
	const certkey = getRandomKey();
	const encrypted = encrypt(json, certkey);
	const ipfsHash = await ipfs.put(encrypted);
	return { ipfsHash, certkey };
}

function encrypt(data, key) {
	return AES.encrypt(data, key).toString();
}

function getRandomKey() {
	return (Math.random() + 1).toString(36).substring(3).toUpperCase();
}

function decrypt(data, key) {
	const a = AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
	// console.log(a);
	return a;
}

async function retrieve(ipfshash, key) {
	const data = await ipfs.get(ipfshash);
	return decrypt(data, key);
}
export { upload, retrieve };
