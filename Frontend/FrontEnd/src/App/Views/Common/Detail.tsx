import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';

const Detail = (props: any) => {
    debugger;
    let { ProductId } = useParams();

    const [hasError, setHasError] = useState(false);
    const [product, setProduct] = useState([]);

    return (
        <>
            {ProductId}
        </>
    )

}

export default Detail;