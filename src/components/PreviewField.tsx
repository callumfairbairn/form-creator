import { Field } from "react-final-form";
import { FieldType } from "../types";

interface PreviewFieldProps {
  field: FieldType;
}

export const PreviewField = ({ field }: PreviewFieldProps) => {
  const { label, name, placeholder } = field;
  return (
    <label
      key={name}
      className="label font-medium gap-2 grid grid-cols-1 sm:grid-cols-4"
    >
      {label}
      <Field
        key={name}
        name={name || "undefined"}
        placeholder={placeholder}
        component="input"
        className="input sm:col-span-3"
      />
    </label>
  )
}
