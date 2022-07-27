import { RemoveFieldButton } from "../buttons/RemoveFieldButton";
import { FinalFormArray } from "../../types";
import { InputType } from "./InputType";
import { Label } from "./Label";
import { Name } from "./Name";
import { Placeholder } from "./Placeholder";
import { Options } from "./Options";

export const REQUIRED = "Required"

export const validateType = (value: string | undefined) => value && value !== "-" ? undefined : REQUIRED
export const requiredTextField = (value: string | undefined) => value ? undefined : REQUIRED

interface CreateFieldProps {
  fields: FinalFormArray
  index: number
  name: string
  errors: Record<string, any> | undefined
}

export const CreateField = ({ fields, index, name, errors }: CreateFieldProps) => {
  const typeError = errors?.fields?.[index]?.type;
  const labelError = errors?.fields?.[index]?.label;
  const nameError = errors?.fields?.[index]?.name;
  const optionErrors = errors?.fields?.[index]?.options || [];
  const selectedType = fields.value[index].type;
  const selectedOptions = fields.value[index].options;

  return (
    <div className="container mx-auto p-2 m-1 bg-base-300 max-w-2xl rounded">
      <div className="flex justify-between">
        <h3 className="prose prose-xl font-bold pl-1">
          Field {index + 1}
        </h3>
        <RemoveFieldButton index={index} fields={fields} />
      </div>
      <InputType name={name} error={typeError} />
      <Label name={name} error={labelError} />
      <Name name={name} error={nameError} />
      <Placeholder name={name} selectedType={selectedType} />
      <Options {...{ name, index, selectedType, selectedOptions, error: optionErrors[index] }} />
    </div>
  )
}
