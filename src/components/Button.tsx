import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  selected: boolean
}

export function Button({ title, selected, ...rest }: ButtonProps) {
  return (
    <button {...(selected && { className: 'selected' })} {...rest}>
      {title}
    </button>
  )
}
