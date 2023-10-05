import { colors, fontStyle, fontWeight } from '../../styles/theme';

interface Props {
  text?: string;
  width?: number;

  textStyles?: {
    textColor?: keyof typeof colors;
    fontStyle?: keyof typeof fontStyle;
    fontWeight?: keyof typeof fontWeight;
  }
};

interface ButtonProps extends Props {
  buttonStyles: {
    backgroundColor: keyof typeof colors;
    borderColor: keyof typeof colors;
  };

  onClick?: () => void;
  type?: any;
  loading?: boolean;
  disabled?: boolean;
};

export type { ButtonProps };
