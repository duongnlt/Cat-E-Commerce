import {ProductCard} from '../components/ProductCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
export const Home = () => {
    // const { loading, data: products } = useQuery({
    //     queryKey: ["products-home"],
    //     queryFn: productsService.getProducts,
    // });

    return (


            <Container>
            <Row className="justify-content-center"> 
                <Col sm={12} md={6} lg={4} xl={3} >
                    <ProductCard key = '1999' name='Duong' description='Nguyen Ly thai Duong'/>
                </Col>
                <Col sm={12} md={6} lg={4} xl={3} >
                    <ProductCard key = '222' name='Duong' description='Nguyen Ly thai Duong'/>
                </Col>
                <Col sm={12} md={6} lg={4} xl={3} >
                    <ProductCard key = '111' name='Duong' description='Nguyen Ly thai Duong'/>
                </Col>
            </Row>

            </Container>
    )
}