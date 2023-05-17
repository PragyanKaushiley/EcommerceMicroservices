import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import { SmallCard, MediumCard, FullCard } from '../../Components/Catalog/Card';

import catalogService from '../../Services/DataService';

import Loader from '../../Utils/Loader';
import AlertTag from '../../Utils/Alert';

const Catalog = (props: any) => {
    const [alertDiv, setAlertDiv] = useState({
        isError: false,
        alert: {
            variant: '',
            dismissible: false,
            heading: '',
            desc: '',
        }
    });

    const [isLoading, setIsLoading] = useState(false);
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        const fetchCatalog = async () => {
            setIsLoading(true);
            await catalogService.GetData("Catalog")
                .then((response) => {
                    setIsLoading(false);
                    setCatalog(response.data);
                    setAlertDiv({
                        isError: response.status.isError,
                        alert: {
                            variant: 'danger',
                            dismissible: true,
                            heading: response.status.statusCode,
                            desc: response.status.statusText
                        }
                    });
                })
        }
        fetchCatalog();
    }, [])

    return (
        <>
            {isLoading ? <Loader /> :
                <>
                    <AlertTag alert={alertDiv} />
                    <Container >
                        <Row>
                            {
                                catalog.map((product: any, index) => {
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
                </>}
        </>
    )
}

export default Catalog