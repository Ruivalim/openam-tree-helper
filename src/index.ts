import readTreeJson from './functions/readTreeJson';
import validateTree from './functions/validateTree';

const treeData = readTreeJson('./data/root-tmna-native/AuthTree/OneAppSDKLogin.json');
const validate = validateTree(treeData);

console.log(validate);
