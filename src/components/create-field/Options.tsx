import { Field } from "react-final-form";
import { AddOptionButton } from "../AddOptionButton";
import { FieldArray } from "react-final-form-arrays";

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
    <FieldArray name="options" initialValue={selectedOptions}>
      {({ fields: options }) => (
        <label className="grid gap-2 p-2 label font-medium">
          Options
          {options.map((optionName) => (
            <Field
              key={`${name}.${optionName}`}
              name={`${name}.${optionName}`}
              component="input"
              className="input ml-4 w-full"
            />
            ))}
          <AddOptionButton options={options} />
        </label>
      )}
    </FieldArray>
  )
}
