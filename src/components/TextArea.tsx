import './TextArea.css';

interface Props {
  text: string;
  keydownMethod: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  changeMethod: (event: Event) => void;
}

const TextArea = ({ text, keydownMethod, changeMethod }: Props) => {
  return (
    <>
      <textarea
        value={text}
        onKeyDown={keydownMethod}
        onChange={(event: React.ChangeEvent) => {
          changeMethod(event as unknown as Event);
        }}
      ></textarea>
    </>
  );
};

export default TextArea;
