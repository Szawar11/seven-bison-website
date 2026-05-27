import { type ElementType, type ReactNode } from 'react'

interface Props {
  as?: ElementType
  className?: string
  children: ReactNode
}

export function Container({ as: Tag = 'div', className = '', children }: Props) {
  return (
    <Tag className={`container-site ${className}`}>
      {children}
    </Tag>
  )
}
