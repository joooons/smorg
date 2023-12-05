interface Props {
  username: string;
  updateName: (event: Event) => void;
}

const Input = ({ username, updateName }: Props) => {
  return (
    <>
      <div className='input-group mb-3'>
        <input
          type='text'
          value={username}
          className='form-control'
          placeholder='Enter an idea'
          aria-label='Enter an idea'
          aria-describedby='basic-addon1'
          onChange={(ev) => updateName(ev)}
        />
      </div>
    </>
  );
};

export default Input;
