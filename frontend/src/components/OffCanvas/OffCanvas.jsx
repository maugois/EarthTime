import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './OffCanvas.css';

export default function OffCanvas({ children, title }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} className='text-white fa-2x' role="button" />
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end" className="text-white" id="OffCanvas">
        <Offcanvas.Header closeButton className='customClose'>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
            {children}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}