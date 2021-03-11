import React, {useEffect} from 'react'

const ToolBar = () =>{

    useEffect(() => {
        window.richTextField.document.designMode= "On"
		window.richTextField.document.body.style.overflowWrap="break-word"
		// window.richTextField2.document.designMode= "On"
		// window.richTextField2.document.body.style.overflowWrap="break-word"
	
    } )

	
    var showingSourceCode = false;
    var isInEditMode = true;

    function enableEditMode () {
         window.richTextField.document.designMode = 'On';
    }

    function execCmd (command) {
         window.richTextField.document.execCommand(command, false, null);
    }

    function execCommandWithArg (command, arg) {
        console.log(arg)
         window.richTextField.document.execCommand(command, false, arg);
    }

    function toggleSource () {
        if(showingSourceCode){
             window.richTextField.document.getElementsByTagName('body')[0].innerHTML =  window.richTextField.document.getElementsByTagName('body')[0].textContent;
            showingSourceCode = false;
        }else{
             window.richTextField.document.getElementsByTagName('body')[0].textContent =  window.richTextField.document.getElementsByTagName('body')[0].innerHTML;
            showingSourceCode = true;
        }
    }

    function toggleEdit () {
        if(isInEditMode){
             window.richTextField.document.designMode = 'Off';
            isInEditMode = false;
        }else{
             window.richTextField.document.designMode = 'On';
            isInEditMode = true;
        }
    }

    return(
        <div>
			<button onClick={(event)=>execCmd('bold')}><i className="fa fa-bold"></i></button>
			<button onClick={(event)=>execCmd('italic')}><i className="fa fa-italic"></i></button>
			<button onClick={(event)=>execCmd('underline')}><i className="fa fa-underline"></i></button>
			<button onClick={(event)=>execCmd('strikeThrough')}><i className="fa fa-strikethrough"></i></button>
			<button onClick={(event)=>execCmd('justifyLeft')}><i className="fa fa-align-left"></i></button>
			<button onClick={(event)=>execCmd('justifyCenter')}><i className="fa fa-align-center"></i></button>
			<button onClick={(event)=>execCmd('justifyRight')}><i className="fa fa-align-right"></i></button>
			<button onClick={(event)=>execCmd('justifyFull')}><i className="fa fa-align-justify"></i></button>
			<button onClick={(event)=>execCmd('cut')}><i className="fa fa-cut"></i></button>
			<button onClick={(event)=>execCmd('copy')}><i className="fa fa-copy"></i></button>
			<button onClick={(event)=>execCmd('indent')}><i className="fa fa-indent"></i></button>
			<button onclick={(event)=>execCmd('outdent')}><i className="fa fa-dedent"></i></button>
			<button onClick={(event)=>execCmd('subscript')}><i className="fa fa-subscript"></i></button>
			<button onClick={(event)=>execCmd('superscript')}><i className="fa fa-superscript"></i></button>
			<button onClick={(event)=>execCmd('undo')}><i className="fa fa-undo"></i></button>
			<button onClick={(event)=>execCmd('redo')}><i className="fa fa-repeat"></i></button>
			<button onClick={(event)=>execCmd('insertUnorderedList')}><i className="fa fa-list-ul"></i></button>
			<button onClick={(event)=>execCmd('insertOrderedList')}><i className="fa fa-list-ol"></i></button>
			<button onClick={(event)=>execCmd('insertParagraph')}><i className="fa fa-paragraph"></i></button>
			<select onChange={(event)=>execCommandWithArg('formatBlock', event.target.value)}>
				<option value="H1">H1</option>
				<option value="H2">H2</option>
				<option value="H3">H3</option>
				<option value="H4">H4</option>
				<option value="H5">H5</option>
				<option value="H6">H6</option>
			</select>
			<button onClick={(event)=>execCmd('insertHorizontalRule')}>HR</button>
			<button onClick={(event)=>execCommandWithArg('createLink', prompt('Enter a URL', 'http://'))}><i className="fa fa-link"></i></button>
			<button onClick={(event)=>execCmd('unlink')}><i className="fa fa-unlink"></i></button>
			<button onClick={(event)=>toggleSource()}><i className="fa fa-code"></i></button>
			<button onClick={(event)=>toggleEdit()}>Toggle Edit</button>
			<br />
			Font:
			<select onChange={(event)=>execCommandWithArg('fontName', event)}>
				<option value="Arial">Arial</option>
				<option value="Comic Sans MS">Comic Sans MS</option>
				<option value="Courier">Courier</option>
				<option value="Georgia">Georgia</option>
				<option value="Tahoma">Tahoma</option>
				<option value="Times New Roman">Times New Roman</option>
				<option value="Verdana">Verdana</option>
			</select>
			<select onChange={(event)=>execCommandWithArg('fontSize', event.target.value)}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
			</select>
			Color: <input type="color" onChange={(event)=>execCommandWithArg('foreColor', event.target.value)}/>
			Background: <input type="color"  onChange={(event)=>execCommandWithArg('hiliteColor', event.target.value)}/>
			<button onClick={(event)=>execCommandWithArg('insertImage', prompt('Enter the image URL', ''))}><i className="fa fa-file-image-o"></i></button>
			<button onClick={(event)=>execCmd('selectAll')}>Select All</button>
            </div>

    )


}

export default ToolBar