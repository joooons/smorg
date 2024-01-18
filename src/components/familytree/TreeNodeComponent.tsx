// import React from 'react';

import { TreeNode } from './TreeNodeInterface';

interface Props {
  node: TreeNode;
}

const TreeNodeComponent = ({ node }: Props) => (
  <div>
    <div>
      {node.name}
      {node.spouse && ' & ' + node.spouse}
    </div>
    {node.children && (
      <div style={{ marginLeft: '20px' }}>
        {node.children.map((child) => (
          <TreeNodeComponent key={child.id} node={child} />
        ))}
      </div>
    )}
  </div>
);

export default TreeNodeComponent;
