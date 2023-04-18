import { Button, useBoolean, useToast } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { getSBTContract } from '../../config/sbtContract';

type PropsType = {
  id: number;
  refetch: () => void;
};

const Verify = ({ id, refetch }: PropsType) => {
  const [isLoading, setLoading] = useBoolean(false);
  const toast = useToast();
  const { account, active, library } = useWeb3React<Web3Provider>();

  // Verify Hanlder
  const handleRevoke = async () => {
    if (!(active && account && library)) {
      return;
    }
    try {
      setLoading.on();
      const sbtContract = getSBTContract(library.getSigner());
      const tx = await sbtContract.verify(id);
      const res = await tx?.wait();
      if (res?.status === 1) {
        refetch();
        toast({
          title: 'Success!',
          description: 'Verified successfully!',
          status: 'success',
        });
      }
    } catch (err: any) {
      toast({
        title: 'Error!',
        description: err?.reason || err?.message,
        status: 'error',
        isClosable: true,
      });
      console.log(err);
    } finally {
      setLoading.off();
    }
  };

  console.log({ id });

  return (
    <Button onClick={handleRevoke} isLoading={isLoading}>
      Verify
    </Button>
  );
};

export default Verify;
