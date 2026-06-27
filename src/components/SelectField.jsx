import { useId } from 'react'

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder = 'Seleccione una opción',
}) {
  const id = useId()

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-brand-brown">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full appearance-none rounded-lg border border-brand-tan/40 bg-cream bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2020%2020%22%20fill=%22%236b5d4f%22><path%20fill-rule=%22evenodd%22%20d=%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20clip-rule=%22evenodd%22/></svg>')] bg-[length:1.1rem] bg-[right_0.75rem_center] bg-no-repeat px-4 py-2.5 pr-10 text-sm transition focus:border-brand-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/30 ${
          value === '' ? 'text-ink-soft/70' : 'text-ink'
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="text-ink">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectField
