import { FinalFormFields } from "../types";

interface RemoveFieldButtonProps {
  fields: FinalFormFields
  index: number
}

export const RemoveFieldButton = ({ fields, index }: RemoveFieldButtonProps) => {
  return (
    <button
      onClick={() => fields.remove(index)}
      aria-label="remove-field"
      className="btn btn-sm btn-circle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 12H6"
        />
      </svg>
    </button>
  )
}
