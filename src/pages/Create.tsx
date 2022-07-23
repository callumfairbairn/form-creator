import { Form } from "react-final-form";
import arrayMutators from 'final-form-arrays';
import { FieldArray } from "react-final-form-arrays";
import { AddFieldButton } from "../components/buttons/AddFieldButton";
import { FormValues } from "../types";
import { CreateField } from "../components/create-field/CreateField";
import { useContext, useState } from "react";
import { FormContext } from "../components/FormContextProvider";

export const Create = () => {
  const [formValues, setFormContext] = useContext(FormContext);
  const [success, setSuccess] = useState(false)
  return (
    <Form
      onSubmit={(formValues: FormValues) => {
        setSuccess(true)
        setFormContext(formValues);
        setTimeout(() => setSuccess(false), 2000)
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
          {success && <div className="toast toast-center toast-middle opacity-50 animate-fade-out" id="success-alert">
            <div
              className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
              role="alert">
              <span className="font-medium">Saved</span>
            </div>
          </div>}
        </form>
      )}
    >
    </Form>
  )
}
