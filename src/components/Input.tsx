import './Input.css';

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
          placeholder='Write something'
          aria-label='Write something'
          aria-describedby='basic-addon1'
          onChange={(ev: React.ChangeEvent) => {
            const thing = ev as unknown;
            const event = thing as Event;
            updateName(event);
          }}
        />
      </div>
    </>
  );
};

export default Input;
