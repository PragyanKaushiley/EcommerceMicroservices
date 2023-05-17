import React from 'react'
import { useParams } from "react-router-dom";

export default function Basket() {
    let { userName } = useParams();

    return (
        <div>Basket for {userName}</div>
    )
}
