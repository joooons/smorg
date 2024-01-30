import Xarrow from 'react-xarrows';
import React from 'react';

import { TreeNode } from './TreeNodeClass';
import './TreeNodeComponent.css';

interface Props {
  node: TreeNode;
  color?: string;
}

// const colors = ['lightgreen', 'lightgreen'];
const colors = ['rgb(230, 255, 235)', 'rgb(240, 255, 210)'];
// const colors = ['rgb(240, 250, 240)', 'rgb(250, 250, 230)'];

const TreeNodeComponent = ({ node, color = colors[0] }: Props) => {
  const color2 = color == colors[0] ? colors[1] : colors[0];

  return (
    <div
      style={{
        textAlign: 'center',
        verticalAlign: 'top',
        padding: '3px',
        borderRadius: '5px',
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
          id={node.id.toString()}
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
              <React.Fragment key={child.id}>
                <TreeNodeComponent node={child} color={color2} />
                <Xarrow
                  start={node.id.toString()}
                  end={child.id.toString()}
                  startAnchor='bottom'
                  endAnchor='top'
                  headSize={0}
                  strokeWidth={3}
                  lineColor={color}
                  path='grid'
                />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeNodeComponent;
