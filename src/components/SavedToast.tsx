interface SavedToastProps {
  success: boolean;
}

export const SavedToast = ({ success }: SavedToastProps) => {
  if (!success) {
    return null
  }

  return (
    <div className="toast toast-center toast-middle opacity-50 animate-fade-out" id="success-alert">
      <div
        className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
        role="alert">
        <span className="font-medium">Saved</span>
      </div>
    </div>
  )
}
