import { useContext, useState } from "react";
import { Form } from "react-final-form";
import { FormContext } from "../components/FormContextProvider";
import { FieldType } from "../types";
import arrayMutators from "final-form-arrays";
import { PreviewField } from "../components/PreviewField";

export const Preview = () => {
  const [formValues] = useContext(FormContext);
  const [payload, setPayload] = useState<Record<string, any>>()

  if (!formValues) {
    return (
      <p className="text-center mx-auto prose prose-xl font-bold p-5">
        Please add some fields
      </p>
    )
  }

  return (
    <div>
      <Form
        onSubmit={(formValues) => setPayload(formValues)}
        mutators={{ ...arrayMutators }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="container mx-auto p-2 m-1 bg-base-300 max-w-2xl rounded">
              {formValues.fields.map((field: FieldType, index) => (
                <PreviewField key={`${field.name}-${index}`} field={field} />
              ))}
              <div className="flex justify-end">
                <button type="submit" aria-label="save" className="btn">Save</button>
              </div>
            </div>
          </form>
        )}
      />
      <pre className="container mx-auto max-w-xl">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </div>
  )
}
