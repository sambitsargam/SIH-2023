import { Box, Button, Container, Flex, useBoolean, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { getSBTContract } from '../../config/sbtContract';
import FormInput from '../../components/FormInputs/FormInput';
import TextareaInput from '../../components/FormInputs/TextareaInput';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

type formDataType = {
  to: string;
  certificateName: string;
  username: string;
  description: string;
  signature: string;
  tokenURI: string;
};

const IssueNewCertificate = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formDataType>();
  const [isLoading, setLoading] = useBoolean(false);
  const toast = useToast();
  const { account, active, library } = useWeb3React<Web3Provider>();

  const onSubmit = async (data: formDataType) => {
    const { to, certificateName, username, description, signature, tokenURI } = data;

    if (!(active && account && library)) {
      toast({
        title: 'Error!',
        description: 'Please connect your wallet!',
        status: 'error',
      });
      return;
    }

    try {
      const sbtContract = getSBTContract(library.getSigner());
      const utcTimestamp = Math.floor(new Date().getTime() / 1000);

      setLoading.on();
      const tx = await sbtContract.safeMint(
        to,
        certificateName,
        username,
        description,
        utcTimestamp,
        signature,
        tokenURI
      );
      const res = await tx?.wait();

      if (res?.status === 1) {
        reset();
        toast({
          title: 'Success!',
          description: 'Certificate issued successfully!',
          status: 'success',
        });
      }
    } catch (err: any) {
      toast({
        title: 'Error!',
        description: err?.reason,
        status: 'error',
        isClosable: true,
      });
    } finally {
      setLoading.off();
    }
  };

  return (
    <Box pt="10">
      <Container maxW="container.xl">
        <SectionTitle title="Issue New Certificate" />
        <Box as="form" onSubmit={handleSubmit(onSubmit)} maxW="4xl" pt={24}>
          <FormInput
            label="To"
            placeholder="Enter to address"
            register={register('to', { required: true })}
            error={errors?.to}
          />
          <FormInput
            label="Certificate Name"
            placeholder="Enter certificate name"
            register={register('certificateName', { required: true })}
            error={errors?.certificateName}
          />
          <FormInput
            label="Username"
            placeholder="Enter username"
            register={register('username', { required: true })}
            error={errors?.username}
          />

          <TextareaInput
            label="Description"
            placeholder="Enter description"
            register={register('description', { required: true })}
            error={errors?.description}
          />
          <FormInput
            label="Signature"
            placeholder="Enter signature"
            register={register('signature', { required: true })}
            error={errors?.signature}
          />
          <FormInput
            label="Token URI"
            placeholder="Enter token uri"
            register={register('tokenURI', { required: true })}
            error={errors?.tokenURI}
          />

          <Flex justifyContent="end" justify="end" alignItems="center">
            <Button type="submit" isLoading={isLoading}>
              Issue Certificate
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default IssueNewCertificate;
