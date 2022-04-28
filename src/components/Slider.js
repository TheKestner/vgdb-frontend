import React, { useState, useEffect} from "react";
import { getData } from '../utils/data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
  
export default function Slider() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        getData()
        .then((data) => {
        setItems(data)
        })
    
    },[]);

    // Title for each
    let title1 = items.filter(item => item.title === 'Hatoful Boyfriend')
    .map((item) => <Detail key={item.id} item={item}/>)

    let title2 = items.filter(item => item.title === 'Hades')
    .map((item) => <Detail key={item.id} item={item}/>)

    let title3 = items.filter(item => item.title === 'Elden Ring')
    .map((item) => <Detail key={item.id} item={item}/>)

    let title4 = items.filter(item => item.title === 'God of War')
    .map((item) => <Detail key={item.id} item={item}/>)

    // Genre for each
    let genre1 = items.filter(item => item.title === 'Hatoful Boyfriend')
    .map((item) => <Genre key={item.id} item={item}/>)

    let genre2 = items.filter(item => item.title === 'Hades')
    .map((item) => <Genre key={item.id} item={item}/>)

    let genre3 = items.filter(item => item.title === 'Elden Ring')
    .map((item) => <Genre key={item.id} item={item}/>)

    let genre4 = items.filter(item => item.title === 'God of War')
    .map((item) => <Genre key={item.id} item={item}/>)
    
      
  return (
    <Container>
    <Splide default
        options={ {
        type: 'loop',
        perPage: 4,
        perMove: 1,
      } } 

      aria-label="Popular Game Images">

    <SplideSlide>
    <Card style={{ width: '15rem' }}>
    <Link to="game/Hatoful Boyfriend">
        <Card.Img variant="top" src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1uul.png" alt="Image 1"/>
    </Link>
        <Card.Body>
            <Card.Title> {title1} </Card.Title>
            <Card.Text>
            {genre1}
            </Card.Text>
        </Card.Body>
    </Card>
    </SplideSlide>

    <SplideSlide>
    <Card style={{ width: '15rem' }}>
    <Link to="game/Hades">
        <Card.Img variant="top" src="https://images.igdb.com/igdb/image/upload/t_cover_big/co39vc.png" alt="Image 2" />
    </Link>
        <Card.Body>
            <Card.Title> {title2} </Card.Title>
            <Card.Text>
            {genre2}
            </Card.Text>
        </Card.Body>
    </Card>
    </SplideSlide>

    <SplideSlide>
    <Card style={{ width: '15rem' }}>
    <Link to="game/Elden Ring">
        <Card.Img variant="top" src="https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.png" alt="Image 3" />
    </Link> 
        <Card.Body>
            <Card.Title> {title3} </Card.Title>
            <Card.Text>
            {genre3}
            </Card.Text>
        </Card.Body>
    </Card>
    </SplideSlide>

    <SplideSlide>
    <Card style={{ width: '15rem' }}>
    <Link to="game/God of War">
        <Card.Img variant="top" src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.png" alt="Image 4" />
    </Link>
        <Card.Body>
            <Card.Title> {title4} </Card.Title>
            <Card.Text>
            {genre4}
            </Card.Text>
        </Card.Body>
    </Card>
    </SplideSlide> 
    
  </Splide>
  </Container>
  );
}


const Detail = ({ item }) => {
    return (
    <>
      {item.title}
    </>
    )
  }

const Genre = ({ item }) => {
    return (
    <>
      {item.genre[0]}
    </>
    )
  }

//   <Card style={{ width: '15rem' }}>
//   <Card.Img variant="top" src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1uul.png" alt="Image 1"/>
//   <Card.Body>
//       <Card.Title> {title1} </Card.Title>
//       <Card.Text>
//       Genre
//       </Card.Text>
//   </Card.Body>
// </Card>


