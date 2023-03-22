import { StyledCustomInputLabel } from "./custominputlabel.style";

type Props = {
  text: string;
};

const CustomInputLabel = ({ text = "" }: Props) => {
  return <StyledCustomInputLabel>{text}</StyledCustomInputLabel>;
};

export default CustomInputLabel;
