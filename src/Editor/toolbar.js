import React, {useEffect,useState} from 'react'

const iframe = document.getElementsByName("richTextField")[0]
//A4: 297x217 mm
//Oficio 2: 330x216 mm
//Oficio: 356x216 mm
// Carta: 279x216 mm
//Oficio 9: 315x215 mm

const ToolBar = () =>{

	const[content, setContent] = useState();
	const[numberPage,setNumberPages] = useState();
	const[paperHeight,setPaperHeight] =useState()

	
	//iframe.style.height = `${909.05}px`
    useEffect(() => {
		//Torna o IFrame Editável
        window.richTextField.document.designMode= "On"

		//Estilizando
		window.richTextField.document.body.style.overflowWrap="break-word"
		window.richTextField.document.body.style.margin = "0px"
		
		//Pega todos os clicks
		window.richTextField.document.body.addEventListener('keyup', handlePagination);
		
		
    } )

	


	function printFrame(classe) {
		
		var frm = document.getElementsByName("richTextField")[0].contentWindow
		frm.focus();// focus on contentWindow is needed on some ie versions
		frm.print();
		return false;
}
	
	function handlePagination(e) {
		
		const iframe = document.getElementsByName("richTextField")[0]
		if(iframe.style.height==""){
			console.log("iframe.style.height==''")
			iframe.style.height= "1137.52px"
		}
		 
		
		
		//iframe.style.height = `${Number(iframe.contentWindow.document.body.scrollHeight+71.81102362205)}px`
		if (Number(iframe.contentWindow.document.body.scrollHeight + 145.52)> Number(iframe.style.height.split("px")[0])) {
			console.log(`<<<<<<<<<<<< ${Number(iframe.contentWindow.document.body.scrollHeight + 145.52), Number(iframe.style.height.split("px")[0])}  >>>>>>>>>>>>>>>>>`)
		iframe.style.height = `${iframe.contentWindow.document.body.scrollHeight+ 145.52}px`
		 }
		 console.log(iframe.style.height+"_ _ _"+Number(iframe.contentWindow.document.body.scrollHeight+145.52))

		// // if( 847 < iframe.contentWindow.document.body.scrollHeight ){
		// // 		iframe.style.height = `${iframe.contentWindow.document.body.scrollHeight+ 65.75}px`
		// // 		//setPaperHeight(iframe.contentWindow.document.body.scrollHeight)
		// // // } 
	//}
}

	
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
        <div class = "topBar">
			<button onClick={(event)=>printFrame('Paper')}>Preview</button>
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