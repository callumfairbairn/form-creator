export interface FieldType {
  type?: "input" | "textarea" | "checkbox" | "select",
  label?: string,
  name?: string
  placeholder?: string
  options?: string[]
}

export type FinalFormArray = {
  push: (field: any) => void
  remove: (index) => void
  value: any
}

export interface FormValues {
  fields: FieldType[]
}
