import { failureNode, successNode } from 'src/common/constants';

interface validateTreeReturn {
    nodesWithoutConnections: Openam.TreeNode[];
    nodesThatLeadToSuccess: Openam.TreeNode[];
    nodesThatLeadToFailure: Openam.TreeNode[];
}

const validateTree = (tree: Openam.Tree): validateTreeReturn => {
    const { nodes } = tree.data;
    const nodeList = Object.keys(nodes);

    const nodesWithoutConnections: Openam.TreeNode[] = [];
    const nodesThatLeadToFailure: Openam.TreeNode[] = [];
    const nodesThatLeadToSuccess: Openam.TreeNode[] = [];

    nodeList.forEach(node => {
        const connections = Object.keys(nodes[node].connections);
        connections.forEach(connection => {
            if (nodes[node].connections[connection] === successNode) {
                nodesThatLeadToSuccess.push(nodes[node]);
            }
            if (nodes[node].connections[connection] === failureNode) {
                nodesThatLeadToFailure.push(nodes[node]);
            }
            if (!nodeList.includes(nodes[node].connections[connection])) {
                if (![successNode, failureNode].includes(nodes[node].connections[connection])) {
                    nodesWithoutConnections.push(nodes[node]);
                }
            }
        });
    });

    return {
        nodesWithoutConnections,
        nodesThatLeadToSuccess,
        nodesThatLeadToFailure,
    };
};

export default validateTree;
