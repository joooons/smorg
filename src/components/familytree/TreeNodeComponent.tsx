// import React from 'react';

import { TreeNode } from './TreeNodeInterface';

import './TreeNodeComponent.css';

interface Props {
  node: TreeNode;
  color?: string;
}

const colors = ['rgb(198, 255, 225)', 'rgb(233, 255, 198)'];

const TreeNodeComponent = ({ node, color = colors[0] }: Props) => {
  const color2 = color == colors[0] ? colors[1] : colors[0];
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        textAlign: 'center',
        verticalAlign: 'top',
        padding: '3px',
        borderRadius: '10px',
        margin: '2px',
        display: 'inline-block',
      }}
    >
      <div>
        {node.name}
        {node.spouse && ' & ' + node.spouse}
      </div>
      <div>
        {node.children && (
          <div>
            {node.children.map((child) => (
              <TreeNodeComponent key={child.id} node={child} color={color2} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeNodeComponent;
