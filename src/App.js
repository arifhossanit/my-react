import './App.css';
import ClockList from './components/ClockList';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';
import Bracket from './components/composition/Bracket';
import Form from './components/Form';
// import Text from './components/inheritance/Text';
import Calculator from './components/TemCal/Calculator';

function App() {
    const quantities=[1,2,3];
    return (
        <>
         <ClockList quantities={quantities}/>
         <Form />
         <Calculator/>
        <Emoji>
         {({addEmoji})=> (
             <Bracket>
             {({addBracket})=><Text addBracket={addBracket} addEmoji={addEmoji}/> }
             </Bracket>
         )}
         </Emoji>
         {/* <Text/> */}
        </>
    );
}

export default App;
