import React ,{Component} from 'react'
import ListItem from './listItem'

export default class Lists extends Component{

  render(){
    let items=[{name:'Hello',bio:'something to tell'},{name:'Cuba',bio:'something to hide'}]
    let lists=items.map((item,i)=>{
      return <ListItem {...item} key={i} addMe={this.props.handleClick}/>
    })
    return(
      <div className='sideBar col-md-5 col-md-offset-2'>
        {lists}
      </div>
    )
  }
}
