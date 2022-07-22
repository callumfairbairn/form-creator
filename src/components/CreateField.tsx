import { Field } from "react-final-form";

interface CreateFieldProps {
  name: string
}

export const CreateField = ({ name }: CreateFieldProps) => {
  return (
    <div className="container mx-auto p-2 m-1 bg-base-300 max-w-2xl rounded">
      <label className="label font-medium gap-2 grid grid-cols-1 sm:grid-cols-4">
        Input type
        <Field
          component="input"
          name={`${name}.type`}
          className="input sm:col-span-3"
        />
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
