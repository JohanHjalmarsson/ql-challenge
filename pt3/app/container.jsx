import * as React from 'react'
import Cards from 'react-credit-cards'
import Form from './form'
import 'react-credit-cards/es/styles-compiled.css'
import { validateNumber, validateName, validateExpirationDate, validateCvc } from './validation'

export const ids = {
    number: 'number',
    name: 'name',
    month: 'month',
    year: 'year',
    cvc: 'cvc'
}
 
const Container = () => {
    const initCard = {
        [ids.number]: '',
        [ids.name]: '',
        [ids.month]: '',
        [ids.year]: '',
        [ids.cvc]: ''
    }
    const [cardInformation, setCardInformation] = React.useState(initCard)
    const [errors, setErrors] = React.useState({})
    const [focused, setFocused] = React.useState()
    
    const validateCard = () => {
        const {number,name,month,year,cvc} = cardInformation
        const newErrors = {
            errors,
            ...(validateNumber(number) && {[ids.number]: validateNumber(number)}),
            ...(validateName(name) && {[ids.name]: validateName(name)}),
            ...(validateExpirationDate(month, year) && {
                [ids.month]: validateExpirationDate(month, year),
                [ids.year]: validateExpirationDate(month, year),
            }),
            ...(validateCvc(cvc) && {[ids.cvc]: validateCvc(cvc)}),
        }
        return newErrors
    }
    
    const onFormChange = e => {
        const {name, value} = e.target
        setCardInformation({
            ...cardInformation,
            [name]: value
        })  
    }

    const onSubmit = e => {
        e.preventDefault()
        const validated = validateCard()
        if (Object.keys(validated).length === 0) console.log('success')
        else setErrors(validated)
    }

    const onInputFocus = e => {
        setFocused(e.target.name)
    }

    return (
        <div style={{width: '100vw'}}>
            <Cards 
                cvc={cardInformation.cvc}
                expiry={cardInformation.month+cardInformation.year}
                focused={focused}
                name={cardInformation.name}
                number={cardInformation.number}
            />
            <Form 
                values={cardInformation} 
                onFocus={onInputFocus}
                onChange={onFormChange} 
                onSubmit={onSubmit}
                errors={errors}/>
        </div>
    )
}

export default Container