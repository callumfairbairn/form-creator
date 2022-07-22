import { Form } from "react-final-form";
import arrayMutators from 'final-form-arrays';
import { FieldArray } from "react-final-form-arrays";
import { AddFieldButton } from "../components/AddFieldButton";
import { FieldType } from "../types";
import { CreateField } from "../components/CreateField";

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
                {fields.map((name, index) =>
                  <CreateField key={name} fields={fields} index={index} name={name} />
                )}
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
