// import React from 'react';

import { TreeNode } from './TreeNodeInterface';
import { SteppedLineTo } from 'react-lineto';

import './TreeNodeComponent.css';

interface Props {
  node: TreeNode;
  color?: string;
}

const colors = ['lightgreen', 'lightgreen'];
// const colors = ['rgb(230, 255, 235)', 'rgb(240, 255, 210)'];
// const colors = ['rgb(240, 250, 240)', 'rgb(250, 250, 230)'];

const TreeNodeComponent = ({ node, color = colors[0] }: Props) => {
  const color2 = color == colors[0] ? colors[1] : colors[0];
  return (
    <div
      style={{
        textAlign: 'center',
        verticalAlign: 'top',
        margin: '2px',
        display: 'inline-block',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          className={node.id.toString()}
          style={{
            backgroundColor: `${color}`,
            padding: '0px 5px 0px 5px',
            borderRadius: '5px',
          }}
        >
          {node.name}
          {node.spouse && ' & ' + node.spouse}
        </div>
      </div>

      <div className='blank-space'></div>
      <div>
        {node.children && (
          <div>
            {node.children.map((child) => (
              <TreeNodeComponent key={child.id} node={child} color={color2} />
            ))}
          </div>
        )}
        {node.children && (
          <div>
            {node.children.map((child) => (
              <SteppedLineTo
                key={child.id}
                from={node.id.toString()}
                to={child.id.toString()}
                borderColor='black'
                borderWidth={2}
                fromAnchor='bottom center'
                toAnchor='top center'
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeNodeComponent;
