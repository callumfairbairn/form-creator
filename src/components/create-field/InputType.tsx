import { Field } from "react-final-form";
import { requiredTextField } from "./CreateField";

interface InputTypeProps {
  name: string;
  error: string | undefined
}

export const InputType = ({ name, error }: InputTypeProps) => {
  return (
    <label className="label font-medium gap-2 grid grid-cols-1 sm:grid-cols-4">
      Input type
      <Field
        validate={requiredTextField}
        component="select"
        name={`${name}.type`}
        className={`select w-max ${error && "input-error text-red-300"}`}
      >
        <option hidden>-</option>
        <option value="input">input</option>
        <option value="textarea">textarea</option>
        <option value="checkbox">checkbox</option>
      </Field>
    </label>
  )
}
