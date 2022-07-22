import { Field } from "react-final-form";
import { FieldType } from "../types";

interface PreviewFieldProps {
  field: FieldType;
}

export const PreviewField = ({ field }: PreviewFieldProps) => {
  const { label, name, placeholder, type } = field;

  if (type === undefined || name === undefined) {
    return <div />
  }

  return (
    <label
      className="label font-medium gap-2 grid grid-cols-1 sm:grid-cols-4"
    >
      {label}
      <Field
        name={name}
        placeholder={placeholder}
        component={`${type}`}
        className="input sm:col-span-3"
      />
    </label>
  )
}
