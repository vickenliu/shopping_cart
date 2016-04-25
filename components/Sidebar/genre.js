import React ,{Component} from 'react'
import Genreitem from './genreItem'

export default class Genre extends Component{

  render(){
    let items=[{name:'toys'},{name:'Electronics'}]
    let lists=items.map((item,i)=>{
      return <Genreitem {...item} key={i}/>
    })
    return(
      <ul className='sideBar' className='col-md-2 col-md-offset-1'>
        {lists}
      </ul>
    )
  }
}
