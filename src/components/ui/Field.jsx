import { useId } from 'react';

export default function Field({ label, hint, multiline = false, ...props }) {
  const id = useId();
  const Control = multiline ? 'textarea' : 'input';

  return (
    <label className="field" htmlFor={id}>
      <span className="field__label">{label}</span>
      <Control id={id} className="field__control" {...props} />
      {hint && <span className="field__hint">{hint}</span>}
    </label>
  );
}
