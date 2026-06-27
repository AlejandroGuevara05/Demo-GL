import { useId } from 'react'

function Field({
  label,
  hint,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  inputMode,
  maxLength,
  autoComplete,
}) {
  const id = useId()

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-end justify-between gap-2">
        <label
          htmlFor={id}
          className="text-sm font-semibold text-brand-brown"
        >
          {label}
        </label>
        {hint && (
          <span className="text-xs text-ink-soft">{hint}</span>
        )}
      </div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        autoComplete={autoComplete}
        className="rounded-lg border border-brand-tan/40 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 transition focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30"
      />
    </div>
  )
}

export default Field
