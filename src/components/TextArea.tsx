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
        onKeyDown={keydownMethod}
        onChange={(event: React.ChangeEvent) => {
          changeMethod(event as unknown as Event);
        }}
      >
        {text}
      </textarea>
    </>
  );
};

export default TextArea;
