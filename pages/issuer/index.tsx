import Link from 'next/link';
import { useState } from 'react'; 
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  Flex,
  Th,
  Box,
  Container,
  Select,
  Button,
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
import Revoke from '../../components/Revoke/Revoke';

const IssuerDashboard = () => {
  const [certificates, setCertificates] = useState<CertificateType[]>([]);
  const { account, active, library } = useWeb3React<Web3Provider>();

  const getIssuedTokens = async () => {
    if (!(active && account && library)) {
      return;
    }
    try {
      const sbtContract = getSBTContract(library.getSigner());
      const tx = await sbtContract.getIssuedTokens(0);
      console.log(tx);

      if (Array.isArray(tx)) {
        const _formatted = tx.map((cert) => ({
          id: parseInt(bigTostring(cert['id'])),
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
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIssuedTokens();
    // eslint-disable-next-line
  }, [account]);

  return (
    <Box pt="10">
      <Container maxW="container.xl">
        <SectionTitle title="Issuer Dashboard" />

        <TableContainer mt={4} bgGradient={'linear(to-br, primary, secondary)'}>
          <Flex justifyContent="end" justify="end" alignItems="center" experimental_spaceX={6}>
            <Link href="/issuer/issue-new-certificate">
              <a>
                <Button size="sm">Issue New Certificate</Button>
              </a>
            </Link>
            <Select maxW="8rem" size="sm" rounded="md">
              <option
                style={{
                  color: 'white',
                  backgroundColor: '#182A43',
                }}
              >
                All
              </option>
              <option
                style={{
                  color: 'white',
                  backgroundColor: '#182A43',
                }}
              >
                Approved
              </option>
              <option
                style={{
                  color: 'white',
                  backgroundColor: '#182A43',
                }}
              >
                Revoked
              </option>
            </Select>
          </Flex>
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
                <Th color="white">Action</Th>
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
                    <IconButton icon={<FaExternalLinkAlt />} aria-label="Deatils" />
                  </Td>
                  <Td>
                    <Revoke id={cert.id} refetch={getIssuedTokens} />
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

export default IssuerDashboard;
