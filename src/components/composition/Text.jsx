export default function Text ({ addEmoji, addBracket }){
    const text = "react compositon";
    return <div> {addEmoji || addBracket ? addBracket(addEmoji(text, ':emoji')) : text} </div>
}