import { Input } from "@mantine/core";
import { FC, ReactNode } from "react";

type CustomInputProps = {
  className?: string;
  icon?: ReactNode | string;
  variant?: string;
  placeholder?: string;
  radius?: string;
  rightSection?: string;
  disabled?: boolean;
  invalid?: boolean;
  component?: string;
  type?: string;
  form?: any;
  name?: string;
  error?: any;
};

const SmpInput: FC<CustomInputProps> = ({
  className,
  icon,
  placeholder,
  rightSection,
  disabled,
  invalid,
  type,
}) => {
  return (
    <Input
      type={type}
      className={className}
      icon={icon}
      placeholder={placeholder}
      disabled={disabled}
      invalid={invalid}
      rightSection={rightSection}
    />
  );
};

export default SmpInput;
