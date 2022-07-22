import { Form } from "react-final-form"
import arrayMutators from 'final-form-arrays'
import { FieldArray } from "react-final-form-arrays";
import { AddFieldButton } from "../components/AddFieldButton";
import { Field } from "../types";

export const Create = () => {
  return (
    <Form
      onSubmit={() => {}}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FieldArray<Field> name="fields">
            {({ fields }) => (
              <div>
                {fields.map((name) => (
                  <div key={name}>
                    Input type
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
