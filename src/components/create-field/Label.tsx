import { Field } from "react-final-form";
import { requiredTextField } from "./CreateField";
import { SubmitFormOnChange } from "./SubmitFormOnChange";

interface LabelProps {
  name: string;
  error: string | undefined
}

export const Label = ({ name, error }: LabelProps) => {
  const compositeName = `${name}.label`

  return (
    <label className="label font-medium gap-2 grid grid-cols-1 lg:grid-cols-4">
      Label
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
