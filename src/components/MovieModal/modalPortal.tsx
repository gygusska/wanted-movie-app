import { ReactNode } from 'react'
import reactDom from 'react-dom'

interface Props {
  children: ReactNode
}

const ModalPortal = ({ children }: Props) => {
  const el = document.getElementById('modal') as HTMLElement
  return reactDom.createPortal(children, el)
}

export default ModalPortal
