import { Field } from "react-final-form";
import { FieldType } from "../types";

interface PreviewFieldProps {
  field: FieldType;
}

export const PreviewField = ({ field }: PreviewFieldProps) => {
  const { label, name, placeholder } = field;
  return (
    <label key={name}>
      {label}
      <Field key={name} name={name || "undefined"} placeholder={placeholder} component="input" />
    </label>
  )
}
