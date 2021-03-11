// import React from 'react'
// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import './editor.css'

// const Editor = () =>{


   
    
//     return(
//         <div>
           

// <div className="document-editor">
//     <div className="document-editor__toolbar"></div>
//     <div className="document-editor__editable-container">
//         <div className="document-editor__editable">
//         <CKEditor
//               onReady={ editor => {
//                   console.log( 'Editor is ready to use!', editor );
//                   window.editor = editor;

//                   // Add these two lines to properly position the toolbar
//                   const toolbarContainer = document.querySelector( '.document-editor__toolbar' );
//                   toolbarContainer.appendChild( editor.ui.view.toolbar.element );
//               } }
//               onChange={ ( event, editor ) => console.log( { event, editor } ) }
//               editor={ DecoupledEditor }
//               data="<p>Hello from CKEditor 5's DecoupledEditor!</p>"
//               onBlur={ ( event, editor ) => {
//                      console.log( 'Blur.', editor );
//               } }
//               onFocus={ ( event, editor ) => {
//                      console.log( 'Focus.', editor );
//               } }
//             />
//         </div>
//     </div>
// </div>

//         </div>

        
//     )


// }

// export default Editor;