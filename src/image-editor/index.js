import './polyfill';
import ImageEditor from './imageEditor';
import './style/index.less';
// import './style/tui-image-editor.css';

// commands
import './command/addIcon';
import './command/addImageObject';
import './command/addObject';
import './command/addShape';
import './command/addText';
import './command/applyFilter';
import './command/changeIconColor';
import './command/changeShape';
import './command/changeText';
import './command/changeTextStyle';
import './command/clearObjects';
import './command/flip';
import './command/loadImage';
import './command/removeFilter';
import './command/removeObject';
import './command/resizeCanvasDimension';
import './command/rotate';
import './command/setObjectProperties';
import './command/setObjectPosition';


export default ImageEditor;
