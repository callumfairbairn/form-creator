import { Field } from "react-final-form";
import { FieldType } from "../types";

interface PreviewFieldProps {
  field: FieldType;
}

export const PreviewField = ({ field }: PreviewFieldProps) => {
  const { label, name, placeholder, type, options } = field;

  if (type === undefined || name === undefined) {
    return <div />
  }

  // I could refactor this into CheckboxPreview
  if (type === "checkbox") {
    return (
      <div>
        <label className="label">{label}</label>
        {options?.map((option) => (
          <label
            key={option}
            className="label font-medium gap-2 ml-4 justify-start"
          >
            <Field
              name={name}
              component="input"
              type="checkbox"
              value={option}
              className="checkbox bg-base-100"
            />
            {option}
          </label>
        ))}
      </div>
    )
  }

  // I could refactor this into SelectPreview
  if (type === "select") {
    return (
      <div>
        <label className="label font-medium gap-2 grid grid-cols-1 lg:grid-cols-4">{label}
          <Field
            name={name}
            component="select"
            className="select sm:col-span-3"
          >
            <option hidden>-</option>
            {options?.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </Field>
        </label>
      </div>
    )
  }

  // I could refactor this into TextboxPreview
  return (
    <label
      className="label font-medium gap-2 grid grid-cols-1 lg:grid-cols-4"
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
