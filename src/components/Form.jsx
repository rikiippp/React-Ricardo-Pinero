import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [values, setValues] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones
        if (!values.name || !values.lastName || !values.email || !values.phone) {
            notify();
        } else {
            // El formulario es válido
            console.log(values)
            toast.success('Formulario completado con exito!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }

    const notify = () => {
        toast.error('Complete el formulario porfavor!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='formulario'>
                <h1>Formulario</h1>
                <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="Ingrese su nombre" />
                <input type="text" name="lastName" value={values.lastName} onChange={handleChange} placeholder="Ingrese su Apellido" />
                <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Ingrese su email" />
                <input type="tel" name="phone" value={values.phone} onChange={handleChange} placeholder="Ingrese su numero" />
                <input type="text" name="address" value={values.address} onChange={handleChange} placeholder='Ingrese su dirección' />
                <button type="submit">Enviar</button>

            </form>
            <ToastContainer />
        </div>
    )
}

export default Form;
