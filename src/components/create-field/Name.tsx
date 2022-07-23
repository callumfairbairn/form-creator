import { Field } from "react-final-form";
import { requiredTextField } from "./CreateField";

interface NameProps {
  name: string;
  error: string | undefined
}

export const Name = ({ name, error }: NameProps) => {
  return (
    <label className="label font-medium gap-2 grid grid-cols-1 lg:grid-cols-4">
      Name
      <Field
        validate={requiredTextField}
        component="input"
        name={`${name}.name`}
        placeholder={error}
        className={`input sm:col-span-3 ${error && "input-error placeholder-red-300"}`}
      />
    </label>
  )
}
