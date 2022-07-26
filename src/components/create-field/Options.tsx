import { Field } from "react-final-form";
import { AddOptionButton } from "../buttons/AddOptionButton";
import { FieldArray } from "react-final-form-arrays";
import { RemoveOptionButton } from "../buttons/RemoveOptionButton";
import { SubmitFormOnChange } from "./SubmitFormOnChange";

const inputTypesRequiringOptions = ["checkbox", "select"]

interface OptionsProps {
  name: string;
  selectedType: string | undefined;
  selectedOptions: string[] | undefined;
  error: string | undefined;
}

export const Options = ({ name, selectedType, selectedOptions, error }: OptionsProps) => {
  if (!selectedType || !inputTypesRequiringOptions.includes(selectedType)) {
    return null
  }

  const compositeName = `${name}.options`

  return (
    <div>
      <FieldArray
        name={compositeName}
        initialValue={selectedOptions}
      >
        {({ fields: options }) => (
          <label className="grid label font-medium">
            Options
            {options.map((optionName, optionIndex) => (
              <label key={`${optionName}`} className="label p-1 ml-4">
                <div hidden>
                  Option {optionIndex + 1}
                </div>
                <Field
                  name={`${optionName}`}
                  component="input"
                  validate={(option) => option ? undefined : "Required"}
                  placeholder={error}
                  className={`input w-full ${error && "input-error placeholder-red-300"}`}
                />
                <RemoveOptionButton options={options} index={optionIndex}/>
              </label>
            ))}
            <AddOptionButton options={options}/>
          </label>
          )}
      </FieldArray>
      <SubmitFormOnChange name={compositeName} />
    </div>
  )
}
