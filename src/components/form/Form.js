import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import style from './form.module.css'
import { db } from '../../firebaseConfig';


const Form = ({cart, total, clearCart, handleId}) => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    

    const handleSubmit = (event) => {

        event.preventDefault();

        const order = {

            buyer: {nombre: nombre, email: email},
            items: cart,
            total: total,
            date: serverTimestamp()

        };

        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order)
        .then((res) => {
            handleId(res.id);
            clearCart();
        });

    };

    const handleChangeNombre = (event) => {

        setNombre(event.target.value);


    }

    const handleChangeEmail = (event) => {

        setEmail(event.target.value);

    }

    return (

        <div className={style.container}>
            <h2 className={style.title}> Datos del comprador: </h2>
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