import Xarrow from 'react-xarrows';
import React from 'react';

import { TreeNode } from './TreeNodeClass';

interface Props {
  node: TreeNode;
  //   color1?: string;
  color2?: string;
}

// Some color options
// const colors = ['lightgreen', 'lightgreen'];
// const colors = ['rgb(230, 255, 235)', 'rgb(240, 255, 210)'];
// const colors = ['rgb(240, 250, 240)', 'rgb(250, 250, 230)'];
const colors = ['rgb(210, 240, 210)', 'rgb(75, 125, 100)'];

const TreeLineComponent = ({ node, color2 = colors[1] }: Props) => {
  return (
    <>
      {node.children && (
        <>
          {node.children.map((child) => (
            <React.Fragment key={'line-' + child.id}>
              <Xarrow
                start={node.id.toString()}
                end={child.id.toString()}
                startAnchor='bottom'
                endAnchor='top'
                headSize={0}
                strokeWidth={1}
                lineColor={color2}
                path='grid' // 'smooth'
              />
              <TreeLineComponent node={child}></TreeLineComponent>
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
};

export default TreeLineComponent;
