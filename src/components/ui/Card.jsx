export default function Card({ children, className = '', as: Tag = 'div', hover = true, ...rest }) {
  return (
    <Tag
      className={`rounded-xl2 bg-white shadow-soft dark:bg-primary-950/80 ${
        hover ? 'transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
