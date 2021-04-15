import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as CTextarea,
  TextareaProps as CTextareaProps,
} from '@chakra-ui/react'
import React, { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

export interface SelectProps extends CTextareaProps {
  label?: string
  error?: FieldError
  isLight?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, SelectProps>(
  ({ label, isLight, error, ...props }, ref) => (
    <FormControl marginBottom="4" isInvalid={!!error}>
      <FormLabel marginY="0px">
        {label}
        <CTextarea
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
      </FormLabel>
      {error && (
        <FormErrorMessage marginTop="0px">{error.message}</FormErrorMessage>
      )}
    </FormControl>
  ),
)
