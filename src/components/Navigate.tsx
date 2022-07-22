import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  children: ReactNode;
}

export const Navigate = ({ children }: HeaderProps) => {
  return (
    <div>
      <div className="flex justify-center btn-group pb-2">
        <Link to="/create" className="btn btn-outline">Create</Link>
        <Link to="/preview" className="btn btn-outline">Preview</Link>
      </div>
      {children}
    </div>
  )
}
