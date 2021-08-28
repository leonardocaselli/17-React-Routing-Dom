import React from 'react'
import { useParams } from 'react-router-dom'
const MultEntrada = () => {
    const { mydata } = useParams()
    const { colorText } = useParams()
    const { colorFondo } = useParams()


    return (
        <div>
            <h2> Numero ingresado {mydata}/{colorText}/{colorFondo}</h2>
        </div>
    )
}
export default MultEntrada