import { Field } from "react-final-form";
import { requiredTextField } from "./CreateField";
import { SubmitFormOnChange } from "./SubmitFormOnChange";

interface NameProps {
  name: string;
  error: string | undefined
}

export const Name = ({ name, error }: NameProps) => {
  const compositeName = `${name}.name`

  return (
    <label className="label font-medium gap-2 grid grid-cols-1 lg:grid-cols-4">
      Name
      <Field
        validate={requiredTextField}
        component="input"
        name={compositeName}
        placeholder={error}
        className={`input sm:col-span-3 ${error && "input-error placeholder-red-300"}`}
      />
      <SubmitFormOnChange name={compositeName} />
    </label>
  )
}
