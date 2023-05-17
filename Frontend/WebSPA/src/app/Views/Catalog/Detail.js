import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';

import { DetailsCard } from '../../Components/Catalog/Card';
import catalogService from '../../Services/catalogService';

import AlertTag from '../../Utils/Alert/_alerts'
import Loader from '../../Utils/Loader/_loader';

export default function Detail() {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    let { ProductId } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true);
            setHasError(false);

            await catalogService.getData("Catalog/" + ProductId)
                .then((response) => {
                    setIsLoading(false);

                    if (response.returnCode.isError) {
                        setHasError(true);
                        setProduct(response.returnCode);
                    } else {
                        setHasError(false);
                        setProduct(response.data);
                    }
                });
        }
        fetchProduct();
    }, [ProductId, setProduct]);

    return (
        <>
            {isLoading ?
                <Loader />
                : hasError ?
                    <AlertTag dismissible={false} type={"danger"} heading={"Oh snap!"} Desc={"You encountered an error. Error Code: " + product.Code + " (" + product.Description + ")"} />
                    :
                    <>
                        <Container>
                            <Row>
                                <DetailsCard product={product} />
                            </Row>
                        </Container>
                    </>
            }
        </>
    )
}
