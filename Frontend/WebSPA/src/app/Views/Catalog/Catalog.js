import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';

//#region Components
import { SmallCard, MediumCard, FullCard } from '../../Components/Catalog/Card';
//#endregion Components

//#region Services
import catalogService from '../../Services/catalogService';
//#endregion Services

//#region Util
import AlertTag from '../../Utils/Alert/_alerts'
import Loader from '../../Utils/Loader/_loader';
//#endregion Util

export default function Catalog() {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        const fetchCatalog = async () => {
            setIsLoading(true);
            setHasError(false);

            await catalogService.getData("Catalog")
                .then((response) => {
                    setIsLoading(false);
                    console.log("inside getData")

                    if (response.returnCode.isError) {
                        setHasError(true);
                        setCatalog(response.returnCode);
                    } else {
                        setHasError(false);
                        setCatalog(response.data);
                    }

                });
            console.log("useEffect")
        };
        fetchCatalog();
    }, [setCatalog]);

    return (
        <>
            {isLoading ?
                <Loader />
                :
                hasError ?
                    <AlertTag dismissible={false} type={"danger"} heading={"Oh snap!"} Desc={"You encountered an error. Error Code: " + catalog.Code + " (" + catalog.Description + ")"} />
                    :
                    <>
                        <Container >
                            <Row>
                                {
                                    catalog.map((product, index) => {
                                        let component = null;
                                        if (index === 0) {
                                            component = <FullCard key={product.id} product={product}></FullCard>
                                        } else if (index === 1) {
                                            component = <MediumCard key={product.id} product={product}></MediumCard>
                                        } else {
                                            component = <SmallCard key={product.id} product={product}></SmallCard>
                                        }
                                        return component
                                    })
                                }
                            </Row>
                        </Container>
                    </>
            }
        </>
    )
}
