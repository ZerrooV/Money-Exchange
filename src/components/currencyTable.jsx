import { useState, useEffect } from 'react';
import axios from 'axios';

function CurrencyTable() {
  const [rates, setRates] = useState({});
  const currencies = ['CAD', 'IDR', 'JPY', 'CHF', 'EUR', 'GBP','AGLD','MXN','FJD','SCR','CDF','BBD','HNL'];
  const api_key = "fae064b62cba4687ac94a6616e37df25";

  useEffect(() => {
    axios.get(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${api_key}`)
      .then(response => {
        setRates(response.data.rates);
      })
      .catch(error => console.error("There is something wrong", error));
  }, []);

  return (
    <>
        <table className="table table-striped table-dark">
        <thead> 
            <tr>
            <th scope="col">Currency</th>
            <th scope="col">We Buy</th>
            <th scope="col">Exchange Rate</th>
            <th scope="col">We Sell</th>
            </tr>
        </thead>
        <tbody>
            {
            currencies.map((currency) => (
                <tr key={currency}>
                <td className='fw-semibold'>{currency}</td>
                <td className='text-success'>{(rates[currency] * 1.05).toFixed(5)}</td> 
                <td>{rates[currency]}</td> 
                <td className='text-danger'>{(rates[currency] * 0.95).toFixed(5)}</td> 
                </tr>
            ))
            }
        </tbody>
        </table>
        <p className='text-center fw-semibold mb-0 mt-2'>Rates are based from 1 USD</p>
        <p className='text-center fw-semibold'>This application uses API from <a href="https://currencyfreaks.com">https://currencyfreaks.com</a></p>
    </>
    
  );
}

export default CurrencyTable;
