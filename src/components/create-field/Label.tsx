import { Field } from "react-final-form";
import { requiredTextField } from "./CreateField";

interface LabelProps {
  name: string;
  error: string | undefined
}

export const Label = ({ name, error }: LabelProps) => {
  return (
    <label className="label font-medium gap-2 grid grid-cols-1 lg:grid-cols-4">
      Label
      <Field
        validate={requiredTextField}
        component="input"
        name={`${name}.label`}
        placeholder={error}
        className={`input sm:col-span-3 ${error && "input-error placeholder-red-300"}`}
      />
    </label>
  )
}
