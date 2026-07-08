interface IInputProps {
  label: string;
  id: string;
  name: string;
  required: boolean;
  type: string;
  autoComplete: string;
}

export default function Input({ label, id, name, required, type, autoComplete }: IInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-label-md text-ink-700" htmlFor={id}>
        {label}
      </label>
      <input
        className="border-line-subtle text-ink-700 focus:ring-brand rounded-xl border bg-white px-4 py-3 focus:ring-2 focus:outline-none"
        id={id}
        name={name}
        required={required}
        type={type}
        autoComplete={autoComplete}
      />
    </div>
  );
}
