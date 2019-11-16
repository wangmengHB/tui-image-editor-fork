import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ImageEditor from './image-editor';
import ICON_A from './svg/icon-a.svg';
import ICON_B from './svg/icon-b.svg';
import ICON_C from './svg/icon-c.svg';
import ICON_D from './svg/icon-d.svg';



const whiteTheme = {
  'common.bi.image': 'https://uicdn.toast.com/toastui/img/tui-image-editor-bi.png',
  'common.bisize.width': '251px',
  'common.bisize.height': '21px',
  'common.backgroundImage': './img/bg.png',
  'common.backgroundColor': '#fff',
  'common.border': '1px solid #c1c1c1',

  // header
  'header.backgroundImage': 'none',
  'header.backgroundColor': 'transparent',
  'header.border': '0px',

  // load button
  'loadButton.backgroundColor': '#fff',
  'loadButton.border': '1px solid #ddd',
  'loadButton.color': '#222',
  'loadButton.fontFamily': '\'Noto Sans\', sans-serif',
  'loadButton.fontSize': '12px',

  // download button
  'downloadButton.backgroundColor': '#fdba3b',
  'downloadButton.border': '1px solid #fdba3b',
  'downloadButton.color': '#fff',
  'downloadButton.fontFamily': '\'Noto Sans\', sans-serif',
  'downloadButton.fontSize': '12px',

  // main icons
  'menu.normalIcon.path': ICON_D, // '../dist/svg/icon-d.svg',
  'menu.normalIcon.name': 'icon-d',
  'menu.activeIcon.path': ICON_B,// '../dist/svg/icon-b.svg',
  'menu.activeIcon.name': 'icon-b',
  'menu.disabledIcon.path': ICON_A, // '../dist/svg/icon-a.svg',
  'menu.disabledIcon.name': 'icon-a',
  'menu.hoverIcon.path': ICON_C,// '../dist/svg/icon-c.svg',
  'menu.hoverIcon.name': 'icon-c',
  'menu.iconSize.width': '24px',
  'menu.iconSize.height': '24px',

  // submenu primary color
  'submenu.backgroundColor': 'transparent',
  'submenu.partition.color': '#e5e5e5',

  // submenu icons
  'submenu.normalIcon.path': ICON_D, //'../dist/svg/icon-d.svg',
  'submenu.normalIcon.name': 'icon-d',
  'submenu.activeIcon.path': ICON_D, // '../dist/svg/icon-b.svg',
  'submenu.activeIcon.name': 'icon-b',
  'submenu.iconSize.width': '32px',
  'submenu.iconSize.height': '32px',

  // submenu labels
  'submenu.normalLabel.color': '#858585',
  'submenu.normalLabel.fontWeight': 'normal',
  'submenu.activeLabel.color': '#000',
  'submenu.activeLabel.fontWeight': 'normal',

  // checkbox style
  'checkbox.border': '1px solid #ccc',
  'checkbox.backgroundColor': '#fff',

  // rango style
  'range.pointer.color': '#333',
  'range.bar.color': '#ccc',
  'range.subbar.color': '#606060',

  'range.disabledPointer.color': '#d3d3d3',
  'range.disabledBar.color': 'rgba(85,85,85,0.06)',
  'range.disabledSubbar.color': 'rgba(51,51,51,0.2)',

  'range.value.color': '#000',
  'range.value.fontWeight': 'normal',
  'range.value.fontSize': '11px',
  'range.value.border': '0',
  'range.value.backgroundColor': '#f5f5f5',
  'range.title.color': '#000',
  'range.title.fontWeight': 'lighter',

  // colorpicker style
  'colorpicker.button.border': '0px',
  'colorpicker.title.color': '#000'
};


export default class Demo extends React.Component {

  editor = null;

  componentDidMount() {
    const root = this.refs.ykImageEditor;
    if (!root) {
      return;
    }

    this.editor = new ImageEditor(root, {
        uiOptions: {
            loadImage: {
              path: 'img/sampleImage2.png',
              name: 'SampleImage'
            },
            theme: whiteTheme, 
            initMenu: 'filter',
            menuBarPosition: 'bottom'
        },
        cssMaxWidth: 700,
        cssMaxHeight: 900,
    });

    window.onresize = function() {
      if (this.editor) {
        this.editor.ui.resizeEditor();
      }
      
    }


  }

  render () {
    return <div ref="ykImageEditor" />
  }

}



const root = document.createElement('div');
root.style.height = '700px';

document.body.appendChild(root);
ReactDOM.render(<Demo />, root);