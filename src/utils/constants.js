import abi from './certificate.json'


export const contractABI = abi.abi;
export const contractAddress = '0xA807A871156AD3Cb4f43969A970ffc42b5D264d1'

export const admin = {
  "email": "info@sambitsargam.in",
  "password": "12345678"
}


export const shortenAddress = (address) => {
  return `${address?.slice(0, 5)}...${address?.slice(address.length - 4)}`
}