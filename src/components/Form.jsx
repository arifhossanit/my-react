import React, { Component } from 'react'

export class Form extends Component {
    state ={
        title:"jsx",
        text: "text field value",
        framework:"vue",
        ischeck:true
    }
    handelChange=(e)=>{
      // this.setState({
      //   [e.target.name] :e.target.value
      // })
      if (e.target.type==="text") {
        this.setState({
            title:e.target.value
        })
      }else if (e.target.type==="textarea"){
          this.setState({
            text:e.target.value
        })
      }else if (e.target.type==="select-one"){
        this.setState({
          framework:e.target.value
      })
    }else if (e.target.type==="checkbox"){
          this.setState({
            ischeck:e.target.checkbox
        })
      }
    }
  render() {
      const{title, text, framework, ischeck}=this.state
    return (
      <div>
          <form action="">
              <input type="text" name="title" id="" placeholder='Your name' value={title} onChange={this.handelChange} />
              <textarea name="text" id="" cols="30" rows="10" value={text} onChange={this.handelChange}/>
              <select name="framework" value={framework} onChange={this.handelChange}>
                <option value="react">react</option>
                <option value="vue">vue</option>
                <option value="angular">angular</option>
              </select>
              <input type="checkbox" name="ischeck" checked={ischeck} onChange={this.handelChange} />
              <input type="submit" value="Submit"/>
          </form>
          <p>{text}</p>
      </div>
    )
  }
}

export default Form