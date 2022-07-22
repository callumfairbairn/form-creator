import { Field } from "react-final-form";
import { RemoveFieldButton } from "./RemoveFieldButton";
import { FinalFormArray } from "../types";
import { AddOptionButton } from "./AddOptionButton";
import { FieldArray } from "react-final-form-arrays";

export const REQUIRED = "Required"

export const validateType = (value: string | undefined) => value && value !== "-" ? undefined : REQUIRED
export const requiredTextField = (value: string | undefined) => value ? undefined : REQUIRED

interface CreateFieldProps {
  fields: FinalFormArray
  index: number
  name: string
  errors: Record<string, any> | undefined;
}

export const CreateField = ({ fields, index, name, errors }: CreateFieldProps) => {
  const typeError = errors?.fields?.[index]?.type;
  const labelError = errors?.fields?.[index]?.label;
  const nameError = errors?.fields?.[index]?.name;
  const selectedType = fields.value[index].type;
  const selectedOptions = fields.value[index].options;

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
          <option value="checkbox">checkbox</option>
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
      {selectedType !== "checkbox" && (
        <label className="label font-medium gap-2 grid grid-cols-1 sm:grid-cols-4">
          Placeholder
          <Field
            component="input"
            name={`${name}.placeholder`}
            className="input sm:col-span-3"
          />
        </label>
      )}
      {selectedType === "checkbox" && (
        <FieldArray name="options" initialValue={selectedOptions}>
          {({ fields: options }) => (
            <label className="grid gap-2 p-2 label font-medium">
              Options
              {options.map((optionName) => (
                <Field key={name} name={`${name}.${optionName}`} component="input" className="input ml-4 w-full" />
              ))}
              <AddOptionButton options={options} />
            </label>
          )}
        </FieldArray>
      )}
    </div>
  )
}
