import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap'

export const ProductCard = ({_id, name, description}) => {
    return (
        // <Link>
        // <article>
        //     <div>
        //         <img src='https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761.jpg' className="w-full h-full object-cover"/>
        //     </div>
        //     <div>
        //         <p>{name}</p>
        //         <p>
        //             {description}
        //         </p>
        //     </div>
        // </article>
        // </Link>
        
            <Card className="mb-4 rounded" style={{ width: '18rem' }}>
                <Card.Body>
                    <Link to='/product'>
                        <Card.Img  variant='top' src='https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761.jpg'/>
                    </Link>
                    <Link to='/product'>
                    <Card.Title >
                        <strong>{name}</strong>
                    </Card.Title>
                    </Link>
                    <Card.Text >
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}