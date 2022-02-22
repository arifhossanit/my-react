
export function ClickCounter3({count, incrementCount}) {
 
    return (
      <div>
          <button type='button' onClick={incrementCount}>Clicked {count} times</button>
      </div>
    )
}

export default ClickCounter3