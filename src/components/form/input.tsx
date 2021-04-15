import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as CInput,
  InputProps as CInputProps,
} from '@chakra-ui/react'
import React, { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

export interface InputProps extends CInputProps {
  label?: string
  error?: FieldError
  isLight?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, isLight, error, ...props }, ref) => (
    <FormControl marginBottom="4" isInvalid={!!error}>
      <FormLabel marginY="0px">
        {label}
        <CInput
          ref={ref}
          borderColor={!!error ? 'tomato' : isLight ? 'black' : 'white'}
          _hover={{ borderColor: isLight ? 'primary.500' : 'purple.500' }}
          _focus={{
            borderColor: isLight ? 'primary.500' : 'purple.500',
            borderWidth: '2px',
          }}
          {...props}
        />
      </FormLabel>
      {error && (
        <FormErrorMessage marginTop="0px">{error.message}</FormErrorMessage>
      )}
    </FormControl>
  ),
)
