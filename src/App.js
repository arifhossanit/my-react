import './App.css';
import ClickCounter from './components/clickcounter/ClickCounter';
import HoverCounter from './components/clickcounter/HoverCounter';
import ClockList from './components/ClockList';
import Bracket from './components/composition/Bracket';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';
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
         <ClickCounter/>
         <HoverCounter/>
        </>
    );
}

export default App;
