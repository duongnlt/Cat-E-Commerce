import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export const ProductDetailPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <Card.Img variant="top" src='https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761.jpg' height="420" />
                    </Col>
                    <Col sm>
                        <b>Meme Cat</b>
                        <hr />
                        <span className="justify-description-css">
                            <p>Description ........</p>
                        </span>
                        <span style={{
                            display: "flex",
                            justifyContent: "center",
                            border: "1px solid",
                            borderColor: "#C6ACE7",
                            padding: "2px"
                        }}>
                            Price:<span className="text-success ml-2">100000</span>
                        </span>
                    </Col>
                    <Col sm>
                                <b>Buy</b>
                                <hr />
                                <button className="btn btn-primary">
                                            <span>Add to Cart</span>
                                        </button>
                                {/* {product.stock ?
                                    <Link to={`${product.id}/checkout/`}>
                                        <button className="btn btn-primary">
                                            <span>Pay with Stripe</span>
                                        </button>
                                    </Link>
                                    :
                                    <Message variant='danger'>
                                        Out Of Stock!
                                    </Message>} */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}