import { useId } from 'react'

function Field({
  label,
  type = 'text',
  value,
  onChange,
  inputMode,
  maxLength,
  autoComplete,
}) {
  const id = useId()

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-brand-brown">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        inputMode={inputMode}
        maxLength={maxLength}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-brand-tan/40 bg-cream px-4 py-2.5 text-sm text-ink transition focus:border-brand-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/30"
      />
    </div>
  )
}

export default Field
