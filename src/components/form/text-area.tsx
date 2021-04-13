import {
  FormLabel,
  Text,
  Textarea as CTextarea,
  TextareaProps as CTextareaProps,
} from '@chakra-ui/react'
import React, { forwardRef } from 'react'

export interface SelectProps extends CTextareaProps {
  label?: string
  error?: { message: string }
  isLight?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, SelectProps>(
  ({ label, isLight, error, ...props }, ref) => (
    <FormLabel marginY="6">
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
      {error && <Text color="tomato">{error.message}</Text>}
    </FormLabel>
  ),
)
