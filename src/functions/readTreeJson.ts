import fs from 'fs';

const readTreeJson = (pathToTree: string): Openam.Tree => {
    const treeJson = fs.readFileSync(pathToTree, 'utf-8');

    const parsed = JSON.parse(treeJson);

    return parsed;
};

export default readTreeJson;
