import { useContext } from "react";
import { Field, Form } from "react-final-form";
import { FormContext } from "../components/FormContextProvider";
import { FieldType } from "../types";
import arrayMutators from "final-form-arrays";

export const Preview = () => {
  const [formValues] = useContext(FormContext);

  if (!formValues) {
    return (
      <p className="text-center prose prose-xl font-bold p-5">
        Please add some fields
      </p>
    )
  }

  return (
    <Form
      onSubmit={() => {}}
      mutators={{ ...arrayMutators }}
      className="container mx-auto p-2 m-1 bg-base-300 max-w-2xl rounded"
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {formValues.fields.map(({ label, name, placeholder }: FieldType) => (
            <label key={name}>
              {label}
              <Field key={name} name={name || "undefined"} placeholder={placeholder} component="input" />
            </label>
          ))}
        </form>
      )}
    />
  )
}
