import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyTable from "./components/currencyTable";

function App() {
  return (
    <>
      <div className="container">
        <h1 className='text-center mb-4'>Currency Rates</h1>
        <CurrencyTable />
      </div>
    </>
    
  );
}

export default App;
