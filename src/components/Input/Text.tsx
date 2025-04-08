type Props = {
  value: string;
  label: string;
  id: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
};

function InputText({
  value,
  label,
  id,
  type = "text",
  placeholder = "",
  onChange,
  required = false,
}: Props) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-brand-primary">
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        className=" border-b border-brand-primary outline-none mt-2 w-full"
      />
    </div>
  );
}

export default InputText;
