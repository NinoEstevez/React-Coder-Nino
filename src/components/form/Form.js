import { useState } from 'react';
import style from './form.module.css'

const Form = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    

    const handleSubmit = (event) => {

        event.preventDefault();
        // console.log(event.target.nombre.value);
        console.log(nombre)
        console.log(email)

    }

    const handleChangeNombre = (event) => {

        setNombre(event.target.value);

    }

    const handleChangeEmail = (event) => {

        setEmail(event.target.value);
        console.log(email)


    }

    return (

        <div className={style.container}>
            <h2 className={style.title}> ¡Suscribite a nuestro Newsletter! </h2>
            <form className={style.form} action="" onSubmit={handleSubmit}>
                
                <input 
                className={style.input} 
                type="text" 
                placeholder="Nombre" 
                name='nombre' 
                value={nombre}
                onChange={handleChangeNombre}
                />

                <input 
                className={style.input} 
                type="email" 
                placeholder="email" 
                name='email' 
                value={email}
                onChange={handleChangeEmail} 
                />

                <button 
                className={style.submit}> 
                
                Enviar 
                
                </button>
                
            </form>
        </div>


    )


}

export default Form;