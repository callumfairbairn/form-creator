import { FieldType } from "../types";

interface AddFieldButtonProps {
  // Final form hasn't typed fields as an array, but an object with a push method 🤷
  fields: { push: (field: FieldType) => void }
}

export const AddFieldButton = ({ fields }: AddFieldButtonProps) => {
  return (
    <button
      onClick={() => fields.push({})}
      aria-label="add-field"
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
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
  )
}
