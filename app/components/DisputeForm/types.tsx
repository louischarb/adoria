export type inputType = "text" | "date" | "camera" | "select";

export type valueType = string | null;

export type InputWrapperPropsType = {
  children: object;
  title: string;
  icon: string;
  value: valueType;
  input: inputType;
  onPress?: () => void;
};
