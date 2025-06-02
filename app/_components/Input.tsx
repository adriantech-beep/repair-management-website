type InputProps = {
  id?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ id, ...props }: InputProps) {
  return (
    <input
      id={id}
      type="text"
      className="border-0 border-b-2 border-black outline-none"
      {...props}
    />
  );
}
