function SectionTitle({ children }) {
  return (
    <div className="rounded-xl border border-brand-tan/25 bg-gradient-to-b from-cream to-card px-6 py-4 shadow-inner shadow-brand-tan/5">
      <h2 className="text-center font-serif text-lg font-semibold text-brand-brown md:text-xl">
        {children}
      </h2>
    </div>
  )
}

export default SectionTitle
