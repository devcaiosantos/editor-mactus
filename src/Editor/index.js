import React, {useEffect} from 'react'
//import IframeResizer from 'iframe-resizer-react'
import './index.css'

const Editor = ()=>{

  useEffect(()=>{

    
    // console.log(iframe[0])
    // // iframe.onload = function(){
    // //   console.log("ONLOAD")
    // //   iframe.style.height = iframe[0].contentWindow.document.body.scrollHeight + 'px';
    // // }

    

  })
  // var iframe = document.getElementsByName("richTextField")
  // const getLenBody = ()=>{
  //   console.log(iframe[0].contentWindow.document.body.height)

  

    return(
    
      <iframe className="Paper" name={"richTextField"}  scrolling="yes"/>
     
     
    
    )
}


export default Editor