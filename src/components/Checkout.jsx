import { useState } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [orderId, setOrderId] = useState(null);
    const [errors, setErrors] = useState({
        nombre: '',
        email: '',
        phone: '',
        address: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const db = getFirestore();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación
        const validationErrors = validateInputs();
        if (Object.values(validationErrors).some((error) => error !== '')) {
            setErrors(validationErrors);
            return;
        }

        // Si no hay errores, continúa con el envío del formulario
        setFormSubmitted(true);
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
        notify();
    };

    const validateInputs = () => {
        const validationErrors = {
            nombre: '',
            email: '',
            phone: '',
            address: '',
        };

        // Validación del nombre
        if (nombre.trim() === '') {
            validationErrors.nombre = 'El nombre es obligatorio';
        } else if (!/^[a-zA-Z]+$/.test(nombre.trim())) {
            validationErrors.nombre = 'El nombre debe contener solo letras';
        }

        // Validación del email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            validationErrors.email = 'Ingrese un correo electrónico válido';
        }

        // Validación del teléfono
        const phoneRegex = /^[0-9]+$/;
        if (!phoneRegex.test(phone)) {
            validationErrors.phone = 'Ingrese un número de teléfono válido';
        }

        // Validación de la dirección
        if (address.trim() === '') {
            validationErrors.address = 'La dirección es obligatoria';
        }

        return validationErrors;
    };

    const order = {
        nombre,
        email,
        phone,
        address,
    };

    const ordersCollection = collection(db, 'MiOrden');

    const notify = () => {
        toast.success('Formulario completado con éxito!!', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    };

    return (
        <>
            <div className='container-form'>
                <h1>Formulario de envío</h1>
                <form onSubmit={handleSubmit} className='form'>
                    <div className='container-input'>
                        <input
                            type="text"
                            name="name"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Ingrese su nombre"
                        />
                        <div className="error">{errors.nombre}</div>
                    </div>
                    <div className='container-input'>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingrese su email"
                        />
                        <div className="error">{errors.email}</div>
                    </div>
                    <div className='container-input'>
                        <input
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Ingrese su numero"
                        />
                        <div className="error">{errors.phone}</div>
                    </div>
                    <div className='container-input'>
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Ingrese su dirección"
                        />
                        <div className="error">{errors.address}</div>
                    </div>
                    <button type="submit" className='button-form'>Enviar</button>
                </form>
                <ToastContainer />
            </div>
            {formSubmitted && Object.values(errors).every((error) => error === '') && (
                <div className='container-order'>
                    <h3>¡Gracias por tu compra! Pronto recibirás un correo con detalles. Utiliza el número de orden para rastrear tu envío. ¡Disfruta de tu compra!</h3>
                    <p>Nro de orden: {orderId}</p>
                </div>
            )}
        </>
    );
};

export default Checkout;
