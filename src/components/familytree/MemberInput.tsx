import React, { ReactNode, useState } from 'react';
import './MemberInput.css';

interface Props {
  val: string;
  addMember?: (event: Event) => void;
  updateMember: (event: Event) => void;
}

const MemberInput = ({ val, updateMember }: Props) => {
  return (
    <>
      <div className='member-input m-1 px-1'>
        <input
          onChange={updateMember}
          //   placeholder={val}
          value={val}
        ></input>
      </div>
    </>
  );
};

export default MemberInput;
