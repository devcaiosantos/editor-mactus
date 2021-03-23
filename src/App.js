
import React,{ useRef } from 'react'
import CKEditor from './CKEditor'
import Editor from './Editor';
import ToolBar from './Editor/toolbar'
import ReactToPrint from 'react-to-print';

import "./App.css"
const stylePrint= `
@page  {
  margin: 20mm;

  @top-left-corner{
      content:"1";
      background-color:#1a202c;
      color:#fff;
      text-align:center;
    }

  @top-left{
      content:"2";
      background-color:#742a2a;
      color:rgb(255, 255, 255);
      text-align:center;
  }

  @top-center{
      content:"3";
      background-color:#7b341e;
      color:rgb(255, 255, 255);
      text-align:center;
  }

  @top-right{
      content:"4";
      background-color:#744210;
      color:rgb(255, 255, 255);
      text-align:center;
  }

  @top-right-corner{
      content:"5";
      background-color:#22543d;
      color:rgb(255, 255, 255);
      text-align:center;
  }

  @right-top{
      content:"6";
      background-color:#234e52;
      color:rgb(255, 255, 255);
  }

  @right-middle{
      content:"7";
      background-color:#2a4365;
      color:rgb(255, 255, 255);
  }

  @right-bottom{
      content:"8";
      background-color:#3c366b;
      color:rgb(255, 255, 255);
  }

  @bottom-right-corner {
      content:"9";
      background-color:#44337a;
      color:rgb(255, 255, 255);
      text-align:center;
  }

  @bottom-right {
      content:"10";
      background-color:#702459;
      color:rgb(255, 255, 255);
      text-align:center;
  }

  @bottom-center{
      content:"11";
      background-color:#1a202c;
      color:rgb(255, 255, 255);
      text-align:center;
  }

  @bottom-left{
      content:"12";
      background-color:#742a2a;
      color:rgb(255, 255, 255);
      text-align:center;
  }

  @bottom-left-corner{
      content:"13";
      background-color:#7b341e;
      color:rgb(255, 255, 255);
      text-align:center;
  }

  @left-bottom{
      content:"14";
      background-color:#744210;
      color:rgb(255, 255, 255);
  }

  @left-middle{
      content:"15";
      background-color:#22543d;
      color:rgb(255, 255, 255);
  }

  @left-top{
      content:"16";
      background-color:#234e52;
      color:blue;
  }
}


`
// #invisiblePaper{

//   /* padding-top: 71.81102362205px;*/
//   padding-top: 71.81102362205px;
//   padding-left:71.81102362205px; 
//   padding-right:49.88976377953px; 
//   padding-bottom:71.81102362205px;
//   word-wrap: break-word;    
//   overflow: hidden;

// }
function App() {
  const componentRef = useRef();
  return (
    <div className="App">
       {/* <CKEditor/> */}
    <div>
      <ReactToPrint
      trigger={() => <button>Print this out!</button>}
      content={() => componentRef.current}/>
      <ToolBar/>
      <div style={{ display: "none",background: "#FFFFFF"}}>
        <div ref={componentRef} id="invisiblePaper">
          (((((((((((((WASD)))))))))))))
        </div>
    </div>
    <Editor />
     
    </div>
    
     
      
      
    </div>
  );
}

export default App;

 