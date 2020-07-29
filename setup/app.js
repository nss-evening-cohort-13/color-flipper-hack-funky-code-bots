"use strict"

const colorArraySimple = [
    {
        colorName: 'Flame',
        hexCode: 'E53D00', 
    },

    {
        colorName: 'Middle Yellow',
        hexCode: 'FFE900',
    },

    {
        colorName: 'Baby Powder',
        hexCode: 'FCFFF7'
    },

    {
        colorName: 'Viridian Green',
        hexCode: '21A0A0',
    },

    {
        colorName: 'Skobeloff',
        hexCode: '046865',
    },

    {
        colorName: 'Midnight Green Eagle Green',
        hexCode: '004E64',
    },

    {
        colorName: 'Cerulean Crayola',
        hexCode: '00A5CF',
    },

    {
        colorName: 'Aquamarine',
        hexCode: '9FFFCB',
    },

    {
        colorName: 'Persian Green',
        hexCode: '25A18E',
    },

    {
        colorName: 'Light Green',
        hexCode: '7AE582',
    },

    {
        colorName: 'Tiffany Blue',
        hexCode: '00BFB2',
    },

    {
        colorName: 'Dark Slate Gray',
        hexCode: '1A5E63',
    },
    
    {
        colorName: 'Metallic Seaweed',
        hexCode: '028090',
    },

    {
        colorName: 'Pale Spring Bud',
        hexCode: 'F0F3BD',

    },

    {
        colorName: 'Red Violet Crayola',
        hexCode: 'C64191'
    },
   


];

const colorArrayHex = [
    {
        colorName: 'Honeydew',
        hexCode: 'DFF8EB',
    },

    {
        colorName: 'Heliotrope Gray',
        hexCode: 'A28F9D',

    },

    {
        colorName: 'Nickel',
        hexCode: '74776B',
    },

    {
        colorName: 'Davys Grey',
        hexCode: '5C574F',
    },

    {
        colorName: 'Rifle Green',
        hexCode: '48483A',
    },

    {
        colorName: 'Russian Violet',
        hexCode: '330036',
    },

    {
        colorName: 'Dark Purple',
        hexCode: '38182F',
    },

    {
        colorName: 'Charcoal',
        hexCode: '2F394D',
    },

    {
        colorName: 'Cadet',
        hexCode: '56666B',
    },

    {
        colorName: 'Lemon Meringue',
        hexCode: 'EEE1B3',
    },

    {
        colorName: 'Davys Grey',
        hexCode: '565554',
    },
    
    {
        colorName: 'Blue NCS',
        hexCode: '2E86AB',
    },

    {
        colorName: 'Green Yellow Crayola',
        hexCode: 'F6F5AE',
    },

    {
        colorName: 'Maximum Yellow',
        hexCode: 'F5F749',
    },

    {
        colorName: 'Cinnabar',
        hexCode: 'F24236',
    },

];


const handleButtonClick = () => {

  const colorFlipper = (array) => {
  return array[Math.floor(Math.random() * array.length)].hexCode;
}

  document.querySelector('body').style.backgroundColor = `#${colorFlipper(colorArraySimple)}`;
  }


// const printToDom = (divId, textToPrint) => {
//   const selectedDiv = document.getElementById(divId);
//   selectedDiv.innerHTML = textToPrint;
// }

// const simpleBuilder = () => {
//   let domString = '';

//   for (let i = 0; i < colorArraySimple.length; i++) {
//     domString += `<h1>Background Color: ${colorArraySimple[i].colorName}}</h1>`
//   }

//   printToDom('color-label', domString);
// }


// }
const buttonEvents = () => {
    document.querySelector('#click-btn').addEventListener('click', handleButtonClick)
}

buttonEvents();
