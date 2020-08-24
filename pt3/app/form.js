import * as React from 'react'
import { ids } from './container'
import './form.css'


const Form = ({
    onSubmit, 
    onChange,
    onFocus, 
    values, 
    errors}) => {

    const getMonthOptions = () => {
        const options = []
        for (let i=1;i<13;i++) {
            const val = i<10 ? `0${i}` : i
            options.push(
                <option key={i} value={val}>{val}</option>
            )
        }
        return options
    }

    const getYearOptions = () => {
        const options = []
        const thisYear = new Date().getFullYear()
        for (let i=0;i<10;i++) {
            options.push(
                <option key={i} value={thisYear+i}>{thisYear+i}</option>
            )
        }
        return options
    }

    return (
        <div className="form_container">
            <form onSubmit={onSubmit}>
                <label>
                    <input  
                        className="input wide_input"
                        type="text"
                        name={ids.name}
                        placeholder="Card holders name"
                        value={values.name}
                        onFocus={onFocus}
                        onChange={onChange}
                    /> 
                    <p className={'errors'}>{errors.name && errors.name}</p>
                </label>
                <label>
                    <input  
                        className="input wide_input"
                        type="text"
                        maxLength="16"
                        name={ids.number}
                        placeholder="Card number"
                        value={values.number}
                        onFocus={onFocus}
                        onChange={onChange}
                    /> 
                    <p className={'errors'}>{errors.number && errors.number}</p>
                </label>
                <div className="form_bottom">
                    <label>
                        <select
                            className="input select"
                            name={ids.month}
                            defaultValue='Month'
                            onFocus={onFocus}
                            onChange={onChange}>
                            <option value="Month" disabled>Month</option>
                            {getMonthOptions().map(option => option)}
                        </select>
                    </label>
                    <label>
                        <select
                            className="input select"
                            name={ids.year}
                            defaultValue="Year"
                            onFocus={onFocus}
                            onChange={onChange}>
                            <option value="Year" disabled>Year</option>
                            {getYearOptions().map(option => option)}
                        </select>
                    <p className={'errors'}>{errors.month && errors.year}</p>
                    </label>
                    <label>
                        <input  
                            className="input"
                            minLength={3}
                            maxLength={4}
                            name={ids.cvc}
                            placeholder="CVC"
                            onFocus={onFocus}
                            value={values.cvc}
                            onChange={onChange}
                        />
                        <p className={'errors'}>{errors.number && errors.number}</p>
                    </label>
                </div>
                <button 
                    onClick={onSubmit} 
                    className="form_button" 
                    type="submit">
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default Form