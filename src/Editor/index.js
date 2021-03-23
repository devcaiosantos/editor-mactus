import React, {useEffect} from 'react'
//import IframeResizer from 'iframe-resizer-react'
import './index.css'

class Editor extends React.PureComponent{

  
  // var iframe = document.getElementsByName("richTextField")
  // const getLenBody = ()=>{
  //   console.log(iframe[0].contentWindow.document.body.height)

  
render(){
  return(
    
    <iframe className="Paper" name={"richTextField"}  scrolling="no"/>
   
   
  
  )
  }
    
}


export default Editor