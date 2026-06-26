export default function Input({ label, error, required, className = '', id, ...rest }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-primary-800">
          {label} {required && <span className="text-accent">*</span>}
        </label>
      )}
      <input
        id={id}
        className={`focus-ring w-full rounded-lg border px-4 py-2.5 text-[15px] text-primary-900 placeholder:text-primary-300 transition ${
          error ? 'border-red-400 bg-red-50' : 'border-primary-100 bg-white focus:border-accent'
        }`}
        {...rest}
      />
      {error && <p className="mt-1 text-xs font-medium text-red-500">{error}</p>}
    </div>
  )
}
