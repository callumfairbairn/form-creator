import { Field } from "react-final-form";
import { RemoveFieldButton } from "./RemoveFieldButton";
import { FinalFormFields } from "../types";

interface CreateFieldProps {
  fields: FinalFormFields
  index: number
  name: string
}

export const CreateField = ({ fields, index, name }: CreateFieldProps) => {
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
        <Field component="select" name={`${name}.type`} className="select">
          <option value="input">input</option>
        </Field>
      </label>
      <label className="label font-medium gap-2 grid grid-cols-1 sm:grid-cols-4">
        Label
        <Field
          component="input"
          name={`${name}.label`}
          className="input sm:col-span-3"
        />
      </label>
      <label className="label font-medium gap-2 grid grid-cols-1 sm:grid-cols-4">
        Name
        <Field
          component="input"
          name={`${name}.name`}
          className="input sm:col-span-3"
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
