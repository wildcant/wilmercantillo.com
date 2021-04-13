import {
  FormLabel,
  Select as CSelect,
  SelectProps as CSelectProps,
  Text,
} from '@chakra-ui/react'
import React, { forwardRef } from 'react'

export interface SelectProps extends CSelectProps {
  label?: string
  error?: { message: string }
  isLight?: boolean
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, isLight, error, ...props }, ref) => (
    <FormLabel marginY="6">
      {label}
      <CSelect
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
