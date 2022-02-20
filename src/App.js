import './App.css';
import ClockList from './components/ClockList';
import Bracket from './components/composition/Bracket';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';
import Form from './components/Form';
import ClickCounter from './components/hoc/ClickCounter';
import HoverCounter from './components/hoc/HoverCounter';
import ClickCounter2 from './components/renderprops/ClickCounter';
import Counter from './components/renderprops/Counter';
import HoverCounter2 from './components/renderprops/HoverCounter';
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
            <Counter>
                {(count,incrementCount)=>(
                    <ClickCounter2 count={count} incrementCount={incrementCount}/>
                    )}
            </Counter>
            <Counter>
                {(count,incrementCount)=>(
                    <HoverCounter2 count={count} incrementCount={incrementCount}/>
                    )}
            </Counter>
        </>
    );
}

export default App;
