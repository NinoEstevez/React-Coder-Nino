import style from './ilc.module.css'
import { useEffect, useState } from 'react';
import ListaItems from '../listaItems/ListaItems';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ItemListContainer = (prop) => {

    const [items, setItems] = useState([]);
    const {categoryName} = useParams();
    
    
    // let urlApi = '';

    // const funcion = () => {


    //             if (categoryName === 'accesorios') {

    //                 urlApi = 'https://fakestoreapi.com/products/category/jewelery';

    //             } else if (categoryName === 'ropa') {

    //                 urlApi = "https://fakestoreapi.com/products/category/men's%20clothing"

    //             } else if (categoryName === 'electronica') {

    //                 urlApi = 'https://fakestoreapi.com/products/category/electronics'

    //             } else {

    //                 urlApi = 'https://fakestoreapi.com/products'

    //             }

    //               fetch(urlApi)
    //              .then((res) => res.json())
    //              .then((json) => setItems(json))

    // }
        
    // useEffect(() => {

    //     funcion();
    //     console.log("Items cargados correctamente");

    // }, [categoryName]);

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