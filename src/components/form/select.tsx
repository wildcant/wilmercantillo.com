import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select as CSelect,
  SelectProps as CSelectProps,
} from '@chakra-ui/react'
import React, { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

export interface SelectProps extends CSelectProps {
  label?: string
  error?: FieldError
  isLight?: boolean
  options: string[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, isLight, options, error, ...props }, ref) => (
    <FormControl marginBottom="4" isInvalid={!!error}>
      <FormLabel marginY="0px">
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
        >
          <option value=""></option>
          {options.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </CSelect>
      </FormLabel>
      {error && (
        <FormErrorMessage marginTop="0px">{error.message}</FormErrorMessage>
      )}
    </FormControl>
  ),
)
