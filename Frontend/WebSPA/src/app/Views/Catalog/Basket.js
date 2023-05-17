import React from 'react'
import { useParams } from "react-router-dom";

import basketService from '../../Services/basketService';

import AlertTag from '../../Utils/Alert/_alerts'
import Loader from '../../Utils/Loader/_loader';

export default function Basket() {
    let { userName } = useParams();

    return (
        <div>Basket for {userName}</div>
    )
}
