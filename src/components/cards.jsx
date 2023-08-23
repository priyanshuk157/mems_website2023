import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css'

function BasicExample() {
  return (
    <>
   
   
    <Card className='card-height'>
      <Card.Img variant="top" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
        <Button className='color-button'>Go somewhere</Button>
      </Card.Body>
    </Card>
  
    
   
   
 
    </>
  );
}

export default BasicExample;