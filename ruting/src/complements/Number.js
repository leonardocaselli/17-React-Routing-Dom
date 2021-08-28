import React from 'react'
import { useParams } from 'react-router-dom'
const Number = () => {
    const { mydata } = useParams()
    return (
        <div>
            <h2> Numero ingresado {mydata}</h2>
        </div>
    )
}
export default Number