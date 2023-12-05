import Button from './Button';
import './Input.css';

interface Props {
  myEntry: string;
  myMethod: (event: Event) => void;
}

const Input = ({ myEntry, myMethod }: Props) => {
  return (
    <>
      <div className='input-group mb-3'>
        <input
          type='text'
          value={myEntry}
          className='form-control'
          placeholder='Write something'
          aria-label='Write something'
          aria-describedby='basic-addon1'
          onChange={(ev: React.ChangeEvent) => {
            const thing = ev as unknown;
            const event = thing as Event;
            myMethod(event);
          }}
        />
      </div>
    </>
  );
};

export default Input;
