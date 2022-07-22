export interface FieldType {
  type?: "input" | "textarea",
  label?: string,
  name?: string
  placeholder?: string
}

export type FinalFormFields = {
  push: (field: FieldType) => void
  remove: (index) => void
}

export interface FormValues {
  fields: FieldType[]
}
