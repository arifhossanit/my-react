
export function HoverCounter3({count, incrementCount, theme, switchTheme}) {
  const style= theme === 'dark' ?{backgroundColor: 'black', color: 'white'} : null;
    return (
      <div>
          <h1 onMouseOver={incrementCount} style={style}>Hovered {count} times</h1>
          <button type="button" onClick={switchTheme}>Change theme</button>
      </div>
    )
}

export default HoverCounter3;
