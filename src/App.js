import './App.css';
import ClockList from './components/ClockList';
import Calculator from './components/TemCal/Calculator';

function App() {
    const quantities=[1,2,3];
    return (
        <>
         <ClockList quantities={quantities}/>
         <Calculator/>
        </>
    );
}

export default App;
