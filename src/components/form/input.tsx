import {
  FormLabel,
  Input as CInput,
  InputProps as CInputProps,
  Text,
} from '@chakra-ui/react'
import React, { forwardRef } from 'react'

export interface InputProps extends CInputProps {
  label?: string
  error?: { message: string }
  isLight?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, isLight, error, ...props }, ref) => (
    <FormLabel marginY="6">
      {label}
      <CInput
        ref={ref}
        borderColor={!!error ? 'tomato' : isLight ? 'black' : 'white'}
        _hover={{ borderColor: isLight ? 'primary.500' : 'purple.500' }}
        _focus={{
          borderColor: isLight ? 'primary.500' : 'purple.500',
          borderWidth: '2px',
        }}
        required
        {...props}
      />
      {error && <Text color="tomato">{error.message}</Text>}
    </FormLabel>
  ),
)
