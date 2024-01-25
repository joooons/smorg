// import React from 'react';
import Xarrow from 'react-xarrows';

import { TreeNode } from './TreeNodeInterface';
import './TreeNodeComponent.css';

interface Props {
  treeId?: string;
  node: TreeNode;
  color?: string;
}

const colors = ['lightgreen', 'lightgreen'];
// const colors = ['rgb(230, 255, 235)', 'rgb(240, 255, 210)'];
// const colors = ['rgb(240, 250, 240)', 'rgb(250, 250, 230)'];

const TreeNodeComponent = ({ treeId, node, color = colors[0] }: Props) => {
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
              <>
                <TreeNodeComponent
                  // treeId={'tree-' + child.id.toString()}
                  key={child.id}
                  node={child}
                  color={color2}
                />
                <Xarrow
                  start={node.id.toString()}
                  end={child.id.toString()}
                  strokeWidth={1}
                  lineColor={'red'}
                  path='grid'
                />
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeNodeComponent;
