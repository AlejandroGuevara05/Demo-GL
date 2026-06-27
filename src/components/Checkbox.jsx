import { useId } from 'react'

function Checkbox({ checked, onChange, children }) {
  const id = useId()

  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-start gap-3 text-sm text-ink"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer appearance-none rounded border-2 border-brand-tan/50 bg-white transition checked:border-brand-gold checked:bg-brand-gold checked:bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2020%2020%22%20fill=%22%233d2f22%22><path%20fill-rule=%22evenodd%22%20d=%22M16.707%205.293a1%201%200%20010%201.414l-8%208a1%201%200%2001-1.414%200l-4-4a1%201%200%20011.414-1.414L8%2012.586l7.293-7.293a1%201%200%20011.414%200z%22%20clip-rule=%22evenodd%22/></svg>')] checked:bg-center checked:bg-no-repeat focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-card"
      />
      <span className="leading-relaxed">{children}</span>
    </label>
  )
}

export default Checkbox
