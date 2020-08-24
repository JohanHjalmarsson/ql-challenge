import {
    validateCvc,
    validateExpirationDate,
    validateName,
    validateNumber
} from '../app/validation'

test('Wrong cvc input length should return error message', () => {
    expect(validateCvc('5')).toBe('CVC must be 3 or 4 digits')
})

test('CVC input should only accept numbers', () => {
    expect(validateCvc('hejsan')).toBe('CVC must only contain numbers')
})

test('Card number should contain 16 numbers', () => {
    expect(validateNumber('1234')).toBe('Card number is not long enough')
})



