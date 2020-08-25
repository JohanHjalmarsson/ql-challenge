export const validateName = (name) => {
    let error = null
    let isLettersOnly = /^[a-zA-Z\s]*$/.test(name)
    if (!isLettersOnly) error = 'Card holder name must only containt letters'
    return error
}

export const validateNumber = (number) => {
    let error = null
    let isNumbersOnly = /^\d+$/.test(number);
    if (!isNumbersOnly) error = 'Card number must only contain numbers'
    if (number.length !== 16) error = 'Card number is not long enough'
    return error
}

export const validateExpirationDate = (month, year) => {
    let error = null
    const today = new Date().now
    const expirationDate = new Date()
    expirationDate.year = year
    expirationDate.month = month
    if (expirationDate < today) error = 'Card has expired'
    return error
}

export const validateCvc = cvc => {
    let error = null
    let isNumbersOnly = /^\d+$/.test(cvc);
    if (!isNumbersOnly) error = 'CVC must only contain numbers'
    else if (cvc.length < 3 || cvc.length > 4) error = 'CVC must be 3 or 4 digits'
    return error
}
