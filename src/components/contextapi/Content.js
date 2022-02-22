import React, { useContext } from 'react';
import Counter3 from './Counter3';
import HoverCounter3 from './HoverCounter3';
import ThemeContext from './themeContext';

// export default function Content() {
//   return (
//     <div>
//         <h1>This is a content</h1>
//         <Counter3>
//                 {(count,incrementCount)=>(
//                     <ThemeContext.Consumer>
//                         {({theme, switchTheme})=>(
//                             <HoverCounter3 
//                             count={count} 
//                             incrementCount={incrementCount} 
//                             theme={theme}
//                             switchTheme={switchTheme}
//                             />
//                         )}
//                     </ThemeContext.Consumer>
                    
//                     )}
//             </Counter3>
//     </div>
//   )
// }


// **********use context api in class contextType

// export default class Content extends React.Component {
//  static contextType=ThemeContext;
 
//   render(){
//     const {theme, switchTheme}= this.context;
//     return (
//       <div>
//           <h1>This is a content</h1>
//           <Counter3>
//                   {(count,incrementCount)=>(
//                               <HoverCounter3 
//                               count={count} 
//                               incrementCount={incrementCount} 
//                               theme={theme}
//                               switchTheme={switchTheme}
//                               />
                      
//                       )}
//               </Counter3>
//       </div>
//     )
//   }
// }

// alternative way of staic keyword
// Content.contextType =ThemeContext;


// ***************use context api by hook**********
export default function Content() {
  const contest = useContext(ThemeContext);
  
  const {theme, switchTheme}= contest;
  return (
    <div>
        <h1>This is a content</h1>
        <Counter3>
                {(count,incrementCount)=>(
                            <HoverCounter3 
                            count={count} 
                            incrementCount={incrementCount} 
                            theme={theme}
                            switchTheme={switchTheme}
                            />
                    
                    )}
            </Counter3>
    </div>
  )
}