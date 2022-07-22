import { Field, Form } from "react-final-form"
import arrayMutators from 'final-form-arrays'
import { FieldArray } from "react-final-form-arrays";
import { AddFieldButton } from "../components/AddFieldButton";
import { FieldType } from "../types";

export const Create = () => {
  return (
    <Form
      onSubmit={() => {}}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FieldArray<FieldType> name="fields">
            {({ fields }) => (
              <div>
                {fields.map((name) => (
                  <div key={name} className="container mx-auto p-2 m-1 bg-base-300 max-w-2xl rounded">
                    <label className="label font-medium flex justify-start gap-2">
                      Input type
                      <Field
                        component="input"
                        name={`${name}.label`}
                        className="input"
                      />
                    </label>
                  </div>
                ))}
                <AddFieldButton fields={fields} />
              </div>
            )}
          </FieldArray>
        </form>
      )}
    >
    </Form>
  )
}
