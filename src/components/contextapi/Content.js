import Counter3 from './Counter3'
import HoverCounter3 from './HoverCounter3'
import ThemeContext from './themeContext'

export default function Content() {
  return (
    <div>
        <h1>This is a content</h1>
        <Counter3>
                {(count,incrementCount)=>(
                    <ThemeContext.Consumer>
                        {({theme, switchTheme})=>(
                            <HoverCounter3 
                            count={count} 
                            incrementCount={incrementCount} 
                            theme={theme}
                            switchTheme={switchTheme}
                            />
                        )}
                    </ThemeContext.Consumer>
                    
                    )}
            </Counter3>
    </div>
  )
}
