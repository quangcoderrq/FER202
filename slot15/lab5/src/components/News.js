import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const newLists = [
  { id: 1, title: 'Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition', description: '“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.', images: '/images/1.jpg' },
  { id: 2, title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', images: '/images/2.jpg' },
  { id: 3, title: 'Burger King is testing a new breakfast sandwich', description: 'This is a win for the flatbread fans.', images: '/images/3.jpg' },
  { id: 4, title: 'Popeyes permanently adds chicken wings to its menu', description: 'And you can get ’em in five different flavors.', images: '/images/4.jpg' },
  { id: 5, title: 'Top salmon with a sizzling mix of aromatics and spices', description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', images: '/images/5.jpg' },
  { id: 6, title: '80 Christmas dinner ideas for the ultimate holiday feast', description: 'Build the perfect Christmas menu with these delicious recipes.', images: '/images/6.jpg' },
  { id: 7, title: 'How to make the easiest prime rib roast for the holidays', description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', images: '/images/7.jpg' },
  { id: 8, title: 'Turn leftover turkey into a flavorful Waldorf salad', description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', images: '/images/8.jpg' },
];

function News() {
  return (
    <div>
      <h1>Tin tức</h1>
      <Row>
        {newLists.slice(0, 4).map((news) => (
          <Col md={3} key={news.id} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={news.images} alt={news.title} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description.substring(0, 100)}...</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {newLists.slice(4, 8).map((news) => (
          <Col md={3} key={news.id} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={news.images} alt={news.title} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description.substring(0, 100)}...</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default News;