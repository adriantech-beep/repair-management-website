import { ReactNode } from "react";

type FormRowProps = {
  children: ReactNode; // Allows multiple elements
  label?: string;
};

export default function FormRow({ children, label }: FormRowProps) {
  return (
    <div className="flex flex-col w-[234px] h-[60]">
      {label && <label>{label}</label>}
      {children}
    </div>
  );
}
