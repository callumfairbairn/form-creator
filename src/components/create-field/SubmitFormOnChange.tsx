import { OnChange } from "react-final-form-listeners";
import { useForm } from "react-final-form";

interface SubmitFormOnChangeProps {
  name: string;
}

export const SubmitFormOnChange = ({ name }: SubmitFormOnChangeProps) => {
  const form = useForm();
  return (
    <OnChange name={name}>
      {() => {
        form.submit()
      }}
    </OnChange>
  )
}
