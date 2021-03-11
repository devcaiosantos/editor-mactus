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
    <>
      	<iframe className="Paper" name={"richTextField"}    scrolling="no" ></iframe>

        {/* <button onClick={(event)=>getLenBody()}>BODY LEN</button> */}
		    {/* <IframeResizer className="Paper" name={"richTextField"}  autoResize={true} false onChange={(event)=>console.log(event.target.value)} onLoad={(event=>console.log("ONLOAD"))}   scrolling="no" ></IframeResizer> */}
        {/* <IframeResizer
        name={"richTextField"}
        autoResize={true}
        log
        src="http://anotherdomain.com/iframe.html"
        style={{ width: '300px', minWidth: '100%'}}
/> */}
        {/* <iframe  scrolling="no" className="Paper" name="richTextField2" ></iframe> */}
    </>
    )
}


export default Editor