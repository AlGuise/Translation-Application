//Global variables and functions

const getId = (id) => document.getElementById(id)
const germanBox = getId('germanPicture')
const spanishBox = getId('spanishPicture')
const frenchBox = getId('frenchPicture') 
const newInput = getId('submitBox')
const newOutput = getId('translatedText')
const inputLabel = (content) => getId('inputLabel').textContent = content
const border = (box, value) => box.style.border = value
const styleWeight = (id, value) => getId(id).style.fontWeight = value
const mouseOver = (pickBox, action, id, value) => pickBox.addEventListener(`${action}`, () => styleWeight(id, value))

// Translation FETCH

const initTranslation = (value, language) => {
    fetch('https://google-translate20.p.rapidapi.com/translate', {
	    'method': 'POST',
        'headers': {
		    'content-type': 'application/x-www-form-urlencoded',
		    'x-rapidapi-host': 'google-translate20.p.rapidapi.com',
		    'x-rapidapi-key': '0d75a2d1bbmsh64caffe9ec26b5fp132771jsnd616764a4269'
	    },
        'body': new URLSearchParams({
		    'text' : `${value}`,
		    'tl' : `${language}`,
		    'sl' : 'en'
	    })
    })
        .then(res => res.json())
        .then(datas => {
            let myNewText = (datas.data.translation)
            newOutput.textContent = myNewText
        })
}

// Translation and Picture Functions 

const clearBorder = () => {
    border(frenchBox, '')
    border(germanBox, '')
    border(spanishBox, '')
    }

const translation = (language, lang, cc) => {
    language.addEventListener('click', (e) => {
        e.preventDefault();
        let textInput = getId('nameInput');
        clearBorder();
        newOutput.textContent = 'Translating...';
        inputLabel(`${lang} Translation:`);
        border(language, 'solid')
        initTranslation(textInput.value, `${cc}`)
    });
}

translation(frenchBox, 'French', 'fr')
translation(spanishBox, 'Spanish', 'es')
translation(germanBox, 'German', 'de')

// Hover Function, **Function created at lines 11-12**

mouseOver(germanBox, 'mouseover', 'germanFont', 'bold')
mouseOver(germanBox, 'mouseout', 'germanFont', '')
mouseOver(spanishBox, 'mouseover', 'spanishFont', 'bold')
mouseOver(spanishBox, 'mouseout', 'spanishFont', '')
mouseOver(frenchBox, 'mouseover', 'frenchFont', 'bold')
mouseOver(frenchBox, 'mouseout', 'frenchFont', '')