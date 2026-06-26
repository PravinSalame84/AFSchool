import useOnScreen from '../../hooks/useOnScreen'

export default function RevealOnScroll({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.15 })

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
