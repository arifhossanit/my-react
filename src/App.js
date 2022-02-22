import React from 'react';
import './App.css';
import ClockList from './components/ClockList';
import Bracket from './components/composition/Bracket';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';
import Section from './components/contextapi/Section';
import ThemeContext from './components/contextapi/themeContext';
import Form from './components/Form';
import ClickCounter from './components/hoc/ClickCounter';
import HoverCounter from './components/hoc/HoverCounter';
import ClickCounter2 from './components/renderprops/ClickCounter';
import Counter from './components/renderprops/Counter';
import HoverCounter2 from './components/renderprops/HoverCounter';
// import Text from './components/inheritance/Text';
import Calculator from './components/TemCal/Calculator';

export default class App extends React.Component {
    state ={
        theme:'dark',
        switchTheme: ()=>{
            this.setState(({theme})=>{
                if (theme==='dark') {
                    return {theme:'light'}
                }
                return{theme:'dark'}
            })
        },
    }
    
    render(){
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

                <ThemeContext.Provider value={this.state}>
                    <Section/>
                </ThemeContext.Provider>
            </>
        );
    }
    
}

