import React from 'react'
import { useParams } from 'react-router-dom'
const Leters = () => {
    const { mydata } = useParams()
    return (
        <div>
            <h2> welcome desde Leters PAGE</h2>
            <h1>{mydata}</h1>
        </div>
    )
}
export default Leters