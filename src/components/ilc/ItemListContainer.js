import style from './ilc.module.css'
import { useEffect, useState } from 'react';
import ListaItems from '../listaItems/ListaItems';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ItemListContainer = (prop) => {

    const [items, setItems] = useState([]);
    const {categoryName} = useParams();    

    useEffect(() => {


        const itemCollection = collection(db, "productos");

        const qE = query(itemCollection, where("category", "==", "electronics"));
        const qR = query(itemCollection, where("category", "==", "men's clothing"));
        const qA = query(itemCollection, where("category", "==", "jewelery"));
        

        if (categoryName === 'accesorios') {

            getDocs(qA)
            .then((res) => {
                const productosFS = res.docs.map((p) => {
    
                    return {
                        id: p.id,
                        ...p.data()
                    }
    
                });
                setItems(productosFS);
            });

        } else if (categoryName === 'ropa') {

            getDocs(qR)
            .then((res) => {
                const productosFS = res.docs.map((p) => {
    
                    return {
                        id: p.id,
                        ...p.data()
                    }
    
                });
                setItems(productosFS);
            });

        } else if (categoryName === 'electronica') {

            getDocs(qE)
            .then((res) => {
                const productosFS = res.docs.map((p) => {
    
                    return {
                        id: p.id,
                        ...p.data()
                    }
    
                });
                setItems(productosFS);
            });

        } else {

            getDocs(itemCollection)
            .then((res) => {
                const productosFS = res.docs.map((p) => {
    
                    return {
                        id: p.id,
                        ...p.data()
                    }
    
                });
                setItems(productosFS);
            });

        }





/////////////////////

 
        
//////////////////////////



    }, [categoryName]);
    

    return (

        <>
            <h3 className={style.titulo}> {prop.saludo} </h3>
            
            <div className={style.containerProducts}>
                <ListaItems 
            
                    products={items}
            
                />
            </div>

        </>

    )

}

export default ItemListContainer;