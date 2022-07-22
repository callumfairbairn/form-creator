import { useContext } from "react";
import { Form } from "react-final-form";
import { FormContext } from "../components/FormContextProvider";
import { FieldType } from "../types";
import arrayMutators from "final-form-arrays";
import { PreviewField } from "../components/PreviewField";

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
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="container mx-auto p-2 m-1 bg-base-300 max-w-2xl rounded">
            {formValues.fields.map((field: FieldType) => (
              <PreviewField key={field.name} field={field} />
            ))}
          </div>
        </form>
      )}
    />
  )
}
