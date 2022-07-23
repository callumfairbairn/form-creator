import { Field } from "react-final-form";
import { SubmitFormOnChange } from "./SubmitFormOnChange";

interface PlaceholderProps {
  name: string;
  selectedType: string | undefined;
}

export const Placeholder = ({ name, selectedType }: PlaceholderProps) => {
  if (selectedType === "checkbox") {
    return null
  }

  const compositeName = `${name}.placeholder`

  return (
    <label className="label font-medium gap-2 grid grid-cols-1 lg:grid-cols-4">
      Placeholder
      <Field
        component="input"
        name={compositeName}
        className="input sm:col-span-3"
      />
      <SubmitFormOnChange name={compositeName} />
    </label>
  )
}
