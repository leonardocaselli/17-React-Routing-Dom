import React from 'react'
import { useParams } from 'react-router-dom'
const RoterNumorMensaje = () => {

    const { mydata } = useParams()

    return (
        <div>
            <h2> welcome desde HOM PAGE</h2>
        </div>
    )
}
export default RoterNumorMensaje