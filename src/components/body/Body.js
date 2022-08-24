import style from './body.module.css'

const Body = (prop) => {

    return (
        <main>
            <h1 className={style.titulo}> {prop.saludo} </h1>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </main>

    )

}

export default Body;