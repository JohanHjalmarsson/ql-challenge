import {
    validateCvc,
    validateName,
    validateNumber
} from '../app/validation'

test('Wrong cvc input length should return error message', () => {
    expect(validateCvc('5')).not.toBeNull()
})

test('CVC input should only accept numbers', () => {
    expect(validateCvc('hejsan')).not.toBeNull()
})

test('Card number should contain 16 numbers', () => {
    expect(validateNumber('1234')).not.toBeNull()
})

test('validateNumber should return null if no errors', () => {
    expect(validateNumber('1234123412341234')).toBeNull()
})

test('Name should only include letters', () => {
    expect(validateName('Johan Hjalmarsson')).toBeNull()
})



