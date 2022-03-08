export interface TreeNode {
    displayName: string;
    nodeType: string;
    connections: Record<string, string>;
}

export interface Tree {
    metadata: {
        realm: string;
        amsterVersion: string;
        entityType: string;
        entityId: string;
    };
    data: {
        _id: string;
        nodes: Record<string, TreeNode>;
        entryNodeId: string;
    };
}

export as namespace Openam;
