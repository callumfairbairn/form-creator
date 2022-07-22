import { Form } from "react-final-form";
import arrayMutators from 'final-form-arrays';
import { FieldArray } from "react-final-form-arrays";
import { AddFieldButton } from "../components/AddFieldButton";
import { FormValues } from "../types";
import { CreateField } from "../components/create-field/CreateField";
import { useContext } from "react";
import { FormContext } from "../components/FormContextProvider";

export const Create = () => {
  const [formValues, setFormContext] = useContext(FormContext);
  return (
    <Form
      onSubmit={(formValues: FormValues) => {
        setFormContext(formValues);
      }}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          <FieldArray name="fields" initialValue={formValues?.fields}>
            {({ fields }) => (
              <div>
                {fields.map((name, index) =>
                  <CreateField key={name} fields={fields} index={index} name={name} errors={errors} />
                )}
                <div className="max-w-2xl mx-auto">
                  <AddFieldButton fields={fields} />
                </div>
              </div>
            )}
          </FieldArray>
          <div className="flex justify-end max-w-2xl mx-auto">
            <button type="submit" aria-label="save" className="btn">Save</button>
          </div>
        </form>
      )}
    >
    </Form>
  )
}
