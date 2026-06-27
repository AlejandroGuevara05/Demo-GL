import { useId, useRef, useState } from 'react'

const MAX_BYTES = 10 * 1024 * 1024

const formatSize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function FileField({ label, value, onChange, accept = 'application/pdf', acceptLabel = 'Solo PDF' }) {
  const id = useId()
  const inputRef = useRef(null)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const file = e.target.files?.[0] ?? null
    if (!file) return

    if (file.size > MAX_BYTES) {
      setError(`El archivo excede 10 MB (tiene ${formatSize(file.size)})`)
      e.target.value = ''
      return
    }

    setError('')
    onChange(file)
  }

  const handleRemove = () => {
    setError('')
    onChange(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  const handleClick = () => inputRef.current?.click()

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-brand-brown">
        {label}
      </label>

      <input
        ref={inputRef}
        id={id}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="sr-only"
      />

      {value ? (
        <div className="flex items-center gap-3 rounded-lg border border-brand-gold/50 bg-brand-gold/10 px-4 py-3">
          <span aria-hidden="true" className="text-lg">📄</span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-brand-brown">
              {value.name}
            </p>
            <p className="text-xs text-ink-soft">{formatSize(value.size)}</p>
          </div>
          <button
            type="button"
            onClick={handleRemove}
            aria-label="Quitar archivo"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-brand-brown transition hover:bg-brand-brown/10"
          >
            ✕
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          className="flex items-center gap-3 rounded-lg border border-dashed border-brand-tan/50 bg-white/40 px-4 py-3 text-left transition hover:border-brand-gold hover:bg-white/70"
        >
          <span aria-hidden="true" className="text-lg">📄</span>
          <div className="flex-1">
            <p className="text-sm font-medium text-brand-brown">
              Seleccionar archivo
            </p>
            <p className="text-xs text-ink-soft">{acceptLabel} · Máx. 10 MB</p>
          </div>
        </button>
      )}

      {error && <p className="text-xs font-medium text-red-700">{error}</p>}
    </div>
  )
}

export default FileField
