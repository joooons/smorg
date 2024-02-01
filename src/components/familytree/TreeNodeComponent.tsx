// import Xarrow from 'react-xarrows';
import React from 'react';

import { TreeNode } from './TreeNodeClass';
import './TreeNodeComponent.css';

interface Props {
  node: TreeNode;
  color1?: string;
  color2?: string;
}

// Some color options
// const colors = ['lightgreen', 'lightgreen'];
// const colors = ['rgb(230, 255, 235)', 'rgb(240, 255, 210)'];
// const colors = ['rgb(240, 250, 240)', 'rgb(250, 250, 230)'];
const colors = ['rgb(210, 240, 210)', 'rgb(75, 125, 100)'];

const TreeNodeComponent = ({
  node,
  color1 = colors[0],
  color2 = colors[1],
}: Props) => {
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
            backgroundColor: `${color1}`,
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
              <React.Fragment key={'node-' + child.id}>
                <TreeNodeComponent
                  node={child}
                  color1={color1}
                  color2={color2}
                />
                {/* <Xarrow
                  start={node.id.toString()}
                  end={child.id.toString()}
                  startAnchor='bottom'
                  endAnchor='top'
                  headSize={0}
                  strokeWidth={1}
                  lineColor={color2}
                  path='grid'
                /> */}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeNodeComponent;
