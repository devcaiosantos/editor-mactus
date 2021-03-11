
// import CKEditor from './CKEditor'
import Editor from './Editor';
import ToolBar from './Editor/toolbar'

import "./App.css"


function App() {
  return (
    <div className="App">
      
      {/* <CKEditor/> */}
      <ToolBar/>
      <div>
     <Editor/>
      </div>
      
    </div>
  );
}

export default App;
