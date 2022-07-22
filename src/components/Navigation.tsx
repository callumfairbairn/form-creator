import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  children: ReactNode;
}

export const Navigation = ({ children }: HeaderProps) => {
  const { pathname } = useLocation()

  return (
    <div>
      <div className="flex justify-center btn-group pb-2">
        <Link
          to="/create"
          className={`btn ${pathname !== "/create" && "btn-outline"}`}
        >
          Create
        </Link>
        <Link
          to="/preview"
          className={`btn ${pathname !== "/preview" && "btn-outline"}`}
        >
          Preview
        </Link>
      </div>
      {children}
    </div>
  )
}
