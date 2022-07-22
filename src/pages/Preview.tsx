import { useContext } from "react";
import { FormContext } from "../components/FormContextProvider";
import { FieldType } from "../types";

export const Preview = () => {
  const [formValues] = useContext(FormContext);

  if (!formValues) {
    return (
      <div>Please add some fields</div>
    )
  }

  return (
    <div>
      {formValues.fields.map(({ label, name }: FieldType) => (
        <label key={name}>
          {label}
        </label>
      ))}
    </div>
  )
}
