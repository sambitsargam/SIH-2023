import { FormControl, Flex, FormLabel, Input } from '@chakra-ui/react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

type PropsType = {
  type?: 'text' | 'email' | 'number' | 'password';
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
  [key: string]: any;
};

const FormInput = (props: PropsType) => {
  const { type, label, placeholder, register, error, ...rest } = props;

  return (
    <FormControl py={4} alignItems="center" experimental_spaceX={2} isInvalid={!!error}>
      <Flex alignItems="center">
        <FormLabel w={48} htmlFor="to" whiteSpace="nowrap">
          {label}:
        </FormLabel>
        <Input
          bg="transparent"
          borderWidth={1}
          borderColor="gray.400"
          _hover={{
            backgroundColor: 'transparent',
          }}
          w="full"
          variant="filled"
          placeholder={placeholder}
          {...register}
          {...rest}
        />
      </Flex>
    </FormControl>
  );
};

export default FormInput;
