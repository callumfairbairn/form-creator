import { FinalFormArray } from "../../types";

interface RemoveOptionButtonProps {
  options: FinalFormArray
  index: number
}

export const RemoveOptionButton = ({ options, index }: RemoveOptionButtonProps) => (
  <button
    aria-label="remove-option"
    className="btn btn-sm btn-ghost btn-circle"
    onClick={() => options.remove(index)}
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
