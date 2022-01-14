import React, { useEffect, useState } from "react";
//import currency row from components.
import CurrencyRow from "./CurrencyRow";

//use API exchange rates for currencies.
const BASE_URL = 'https://v6.exchangerate-api.com/v6/ba701dec95c5352b5df96b50/latest/USD';

//set the state.
function CurrencyConverter() {
    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

//calculate exchange rates.
    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } 
    else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }

//fetch API to add to state.
    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                const firstCurrency = Object.keys(data.conversion_rates)[0]
                setCurrencyOptions([data.base_code, ...Object.keys(data.conversion_rates)])
                setFromCurrency(data.base_code)
                setToCurrency(firstCurrency)
                setExchangeRate(data.conversion_rates[firstCurrency])
            })
    }, [])

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${BASE_URL}?base_code=${fromCurrency}&conversion_rates=${toCurrency}`)
                .then(res => res.json())
                .then(data => setExchangeRate(data.conversion_rates[toCurrency]))
        }
    }, [fromCurrency, toCurrency])

    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }

//return to display the currency rates.    
    return (
        <>
            <h1>Currency Converter</h1>
            <CurrencyRow
                currencyOptions={currencyOptions}
                selectedCurrency={fromCurrency}
                onChangeCurrency={e => setFromCurrency(e.target.value)}
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount}
            />
            <div className="equals">=</div>
            <CurrencyRow
                currencyOptions={currencyOptions}
                selectedCurrency={toCurrency}
                onChangeCurrency={e => setToCurrency(e.target.value)}
                onChangeAmount={handleToAmountChange}
                amount={toAmount}
            />
        </>
    );
}

//export the code to make it available outside this module.
export default CurrencyConverter;