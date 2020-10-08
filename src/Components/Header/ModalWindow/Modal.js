import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

const ModalWindow = (props) => {
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({id: null, firstName: '', lastName: '', email: '', phone: ''})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const setRandomId = () => {
        const randomId = Math.floor(Math.random() * Math.floor(1000))
        setModalData(modalData.id = randomId)
    }

    const onChangeFucntion = (value, property) => {
        setModalData({
            ...modalData,
            [property]: value,
        })
    }

    const saveChanges = () => {
        setRandomId()
        props.addDataTable(modalData)
        handleClose()
        console.log(modalData)
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <div>
                <Modal show={show} onHide={handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Введите данные</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div>
                                <p>Введите firstNAme</p>
                                <input value={modalData.firstName} onChange={(e) => onChangeFucntion(e.target.value,'firstName')}/>
                            </div>
                            <div>
                                <p>Введите lastName</p>
                                <input value={modalData.lastName} onChange={(e) => onChangeFucntion(e.target.value,'lastName')}/>
                            </div>
                            <div>
                                <p>Введите email</p>
                                <input value={modalData.email} onChange={(e) => onChangeFucntion(e.target.value,'email')}/>
                            </div>
                            <div>
                                <p>Введите phone</p>
                                <input value={modalData.phone} onChange={(e) => onChangeFucntion(e.target.value,'phone')}/>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={saveChanges}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default ModalWindow