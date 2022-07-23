import { Field } from "react-final-form";
import { AddOptionButton } from "../buttons/AddOptionButton";
import { FieldArray } from "react-final-form-arrays";
import { RemoveOptionButton } from "../buttons/RemoveOptionButton";

interface OptionsProps {
  name: string;
  selectedType: string | undefined;
  selectedOptions: string[] | undefined;
}

export const Options = ({ name, selectedType, selectedOptions }: OptionsProps) => {
  if (selectedType !== "checkbox") {
    return null
  }
  return (
    <FieldArray name={`${name}.options`} initialValue={selectedOptions}>
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
                className="input w-full"
              />
              <RemoveOptionButton options={options} index={optionIndex}/>
            </label>
          ))}
          <AddOptionButton options={options}/>
        </label>
        )}
    </FieldArray>
  )
}
