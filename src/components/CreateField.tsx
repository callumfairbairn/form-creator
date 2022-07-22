import { Field } from "react-final-form";
import { RemoveFieldButton } from "./RemoveFieldButton";
import { FinalFormFields } from "../types";

export const REQUIRED = "Required"

export const validateType = (value: string | undefined) => value && value !== "-" ? undefined : REQUIRED
export const requiredTextField = (value: string | undefined) => value ? undefined : REQUIRED

interface CreateFieldProps {
  fields: FinalFormFields
  index: number
  name: string
  errors: Record<string, any> | undefined;
}

export const CreateField = ({ fields, index, name, errors }: CreateFieldProps) => {
  const typeError = errors?.fields?.[index]?.type;
  const labelError = errors?.fields?.[index]?.label;
  const nameError = errors?.fields?.[index]?.name;

  return (
    <div className="container mx-auto p-2 m-1 bg-base-300 max-w-2xl rounded">
      <div className="flex justify-between">
        <h3 className="prose prose-xl font-bold pl-1">
          Field {index + 1}
        </h3>
        <RemoveFieldButton index={index} fields={fields} />
      </div>
      <label className="label font-medium gap-2 grid grid-cols-1 sm:grid-cols-4">
        Input type
        <Field
          validate={requiredTextField}
          component="select"
          name={`${name}.type`}
          className={`select ${typeError && "input-error text-red-300"}`}
        >
          <option hidden>-</option>
          <option value="input">input</option>
          <option value="textarea">textarea</option>
        </Field>
      </label>
      <label className="label font-medium gap-2 grid grid-cols-1 sm:grid-cols-4">
        Label
        <Field
          validate={requiredTextField}
          component="input"
          name={`${name}.label`}
          placeholder={labelError}
          className={`input sm:col-span-3 ${labelError && "input-error placeholder-red-300"}`}
        />
      </label>
      <label className="label font-medium gap-2 grid grid-cols-1 sm:grid-cols-4">
        Name
        <Field
          validate={requiredTextField}
          component="input"
          name={`${name}.name`}
          placeholder={nameError}
          className={`input sm:col-span-3 ${nameError && "input-error placeholder-red-300"}`}
        />
      </label>
      <label className="label font-medium gap-2 grid grid-cols-1 sm:grid-cols-4">
        <div>
          Placeholder
        </div>
        <Field
          component="input"
          name={`${name}.placeholder`}
          className="input sm:col-span-3"
        />
      </label>
    </div>
  )
}
