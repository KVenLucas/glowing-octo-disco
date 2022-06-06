import { Fragment } from 'react'

interface ModalProps {
  children: React.ReactNode
}

function Modal({ children }: ModalProps) {
  return (
    <Fragment>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <label htmlFor="modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="py-4">{children}</div>
        </label>
      </label>
    </Fragment>
  )
}

export { Modal }
