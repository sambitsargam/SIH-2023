import { useState } from 'react';
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  Th,
  Box,
  Container,
  IconButton,
} from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { getSBTContract } from '../../config/sbtContract';
import { FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useEffect } from 'react';
import { CertificateType } from '../../@types';
import { bigTostring } from '../../lib/utils';

const HolderDashboard = () => {
  const [certificates, setCertificates] = useState<CertificateType[]>([]);
  const { account, active, library } = useWeb3React<Web3Provider>();

  const getIssuedTokens = async () => {
    if (!(active && account && library)) {
      return;
    }
    const sbtContract = getSBTContract(library.getSigner());
    const tx = await sbtContract.getIssuedTokens(2);

    if (Array.isArray(tx)) {
      const _formatted = tx.map((cert) => ({
        id: parseInt(bigTostring(cert['issuedAt'])),
        name: cert['certificateName'],
        description: cert['description'],
        issuedAt: bigTostring(cert['issuedAt']),
        status: cert['verificationStatus'],
        uri: cert['uri'],
        username: cert['userName'],
        signature: cert['signature'],
      }));
      setCertificates(_formatted);
    }
  };

  useEffect(() => {
    getIssuedTokens();
    // eslint-disable-next-line
  }, [account]);

  return (
    <Box pt="10">
      <Container maxW="container.xl">
        <SectionTitle title="Holder Dashboard" />

        <TableContainer mt={4} bgGradient={"linear(to-br, primary, secondary)"}>
          <Table mt={16} variant="striped" colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th color="white">Certificate Name</Th>
                <Th color="white">Username</Th>
                <Th color="white">Status</Th>
                <Th color="white">Description</Th>
                <Th color="white">Issued At</Th>
                <Th color="white">Signature</Th>
                <Th color="white">Token URI</Th>
              </Tr>
            </Thead>
            <Tbody fontSize="sm">
              {certificates.map((cert, idx) => (
                <Tr key={idx}>
                  <Td>{cert.name}</Td>
                  <Td>{cert.username}</Td>
                  <Td>{cert.status}</Td>
                  <Td>{cert.description}</Td>
                  <Td>{new Date(+cert.issuedAt * 1000).toLocaleString()}</Td>
                  <Td>{cert.signature}</Td>
                  <Td>
                    <IconButton
                      icon={<FaExternalLinkAlt />}
                      aria-label="Deatils"
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default HolderDashboard;
