import { Contract } from '@ethersproject/contracts';
import { JsonRpcSigner } from '@ethersproject/providers';
import sbtABI from './abi/sbt.json';

export const SBT_CONTRACT_ADDRESS = '0x82c02F9c1A511c6ADbac53F1b84475fb0f230142';
export const SBT_CONTRACT_ABI = sbtABI;

export const getSBTContract = (signer: JsonRpcSigner | undefined) => {
  return new Contract(SBT_CONTRACT_ADDRESS, SBT_CONTRACT_ABI, signer);
};
