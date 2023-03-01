import { BtnContainer } from './FeedbackOptions.styled';
export function FeedbackOptions({ positive, negative, neutral }) {
  return (
    <>
      <BtnContainer>
        <button name="good" onClick={positive}>
          Good
        </button>
        <button name="neutral" onClick={neutral}>
          Neutral
        </button>
        <button name="bad" onClick={negative}>
          Bad
        </button>
      </BtnContainer>
    </>
  );
}
