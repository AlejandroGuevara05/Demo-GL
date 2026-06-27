function ProgressIndicator({ currentStep, totalSteps }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => {
          const stepNumber = i + 1
          const isActive = stepNumber === currentStep
          const isComplete = stepNumber < currentStep
          return (
            <span
              key={stepNumber}
              className={`h-1.5 rounded-full transition-all ${
                isActive
                  ? 'w-8 bg-brand-gold'
                  : isComplete
                  ? 'w-6 bg-brand-tan'
                  : 'w-6 bg-brand-tan/25'
              }`}
            />
          )
        })}
      </div>
      <p className="text-xs font-medium uppercase tracking-wider text-ink-soft">
        Paso {currentStep} de {totalSteps}
      </p>
    </div>
  )
}

export default ProgressIndicator
