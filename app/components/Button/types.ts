export type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "filled" | "outlined" | "text";
  className?: string;
};
