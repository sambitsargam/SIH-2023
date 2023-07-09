import abi from './certificate.json'


export const contractABI = abi.abi;
export const contractAddress = '0xac99583ee8ae7bfcda7d43657f6a4c0c0da7e0b8'

export const admin = {
  "email": "info@sambitsargam.in",
  "password": "12345678"
}


export const shortenAddress = (address) => {
  return `${address?.slice(0, 5)}...${address?.slice(address.length - 4)}`
}