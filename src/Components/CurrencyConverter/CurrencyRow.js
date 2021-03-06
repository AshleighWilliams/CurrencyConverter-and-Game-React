import React from 'react'

//use props to pass currency rate.
export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props;
    //return currency rate.
    return (
        <div>
            <input className="input" type="number" value={amount} onChange={onChangeAmount} />
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}