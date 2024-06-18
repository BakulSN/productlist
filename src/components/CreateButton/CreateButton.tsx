import { Button, ButtonText } from './CreateButton.styles';

interface CreateButtonProps {
  onClick: () => void;
}

const CreateButton = ({ onClick }: CreateButtonProps) => {
  return (
    <Button onClick={onClick}>
      <ButtonText>+</ButtonText>
    </Button>
  );
};
export default CreateButton;
