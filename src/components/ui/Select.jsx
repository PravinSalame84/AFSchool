export default function Select({ label, error, required, options = [], placeholder, className = '', id, ...rest }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-primary-800 dark:text-white">
          {label} {required && <span className="text-accent">*</span>}
        </label>
      )}
      <select
        id={id}
        className={`focus-ring glass-input w-full rounded-lg border bg-white px-4 py-2.5 text-[15px] text-primary-900 transition dark:text-white ${
          error ? 'border-red-400 bg-red-50 dark:bg-red-500/10' : 'border-primary-100 focus:border-accent dark:border-white/10'
        }`}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs font-medium text-red-500">{error}</p>}
    </div>
  )
}
