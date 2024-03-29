import './TreeTextArea.css';

interface Props {
  text: string;
  keydownMethod: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  changeMethod: (event: Event) => void;
}

const TreeTextArea = ({ text, keydownMethod, changeMethod }: Props) => {
  return (
    <>
      <textarea
        className='tr-textarea'
        style={{ fontSize: '12px' }}
        value={text}
        onKeyDown={keydownMethod}
        onChange={(event: React.ChangeEvent) => {
          changeMethod(event as unknown as Event);
        }}
      ></textarea>
    </>
  );
};

export default TreeTextArea;
