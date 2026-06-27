function Card({ children, className = '' }) {
  return (
    <section
      className={`rounded-2xl border border-brand-tan/25 bg-white shadow-sm shadow-brand-brown/5 ${className}`}
    >
      {children}
    </section>
  )
}

export default Card
