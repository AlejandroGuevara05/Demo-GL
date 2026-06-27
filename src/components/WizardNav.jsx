function WizardNav({ onBack, onNext, canGoBack, canGoNext, nextLabel = 'Siguiente' }) {
  return (
    <div className="flex items-center justify-between gap-4 pt-2">
      <button
        type="button"
        onClick={onBack}
        disabled={!canGoBack}
        className="inline-flex items-center gap-2 rounded-full border border-brand-brown/20 bg-transparent px-6 py-2.5 text-sm font-medium text-brand-brown transition hover:bg-brand-brown/5 disabled:cursor-not-allowed disabled:opacity-0"
      >
        <span aria-hidden="true">←</span>
        Atrás
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
        className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-2.5 text-sm font-semibold text-brand-brown shadow-sm transition hover:bg-brand-gold-hover disabled:cursor-not-allowed disabled:bg-brand-tan/40 disabled:text-brand-brown/50 disabled:shadow-none"
      >
        {nextLabel}
        <span aria-hidden="true">→</span>
      </button>
    </div>
  )
}

export default WizardNav
