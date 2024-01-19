import React from 'react'
import Container from '@mui/material/Container';
import Card from './Card'
import { Grid } from '@mui/material';
function CardList() {
    const dummyData = [
        {
            id: 1,
            name: 'C++',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png', // Replace with the actual URL of the user's avatar
            solvedQuestions: 15, // Replace with the actual number of questions solved by the user
        },
        {
            id: 1,
            name: 'JavaScript',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png', // Replace with the actual URL of the user's avatar
            solvedQuestions: 10, // Replace with the actual number of questions solved by the user
        },
        {
            id: 1,
            name: 'Java',
            avatar: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png', // Replace with the actual URL of the user's avatar
            solvedQuestions: 5, // Replace with the actual number of questions solved by the user
        },
        {
            id: 1,
            name: 'React',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png', // Replace with the actual URL of the user's avatar
            solvedQuestions: 1, // Replace with the actual number of questions solved by the user
        },
        {
            id: 1,
            name: 'Golang',
            avatar: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_LightBlue.png', // Replace with the actual URL of the user's avatar
            solvedQuestions: 11, // Replace with the actual number of questions solved by the user
        },
        {
            id: 1,
            name: 'Node Js',
            avatar: 'https://avatars.githubusercontent.com/u/102153698?s=280&v=4', // Replace with the actual URL of the user's avatar
            solvedQuestions: 18, // Replace with the actual number of questions solved by the user
        }
    ];
  return (
    <>
         <Container >
            <Grid container spacing={{ xs: 2, md: 3 , lg :4}} columns={{ xs: 4, sm: 8, md:12, lg:12}}>
                {dummyData.map((data, index) => (
                    <Grid item xs={2} sm={4} md={6} lg={6} key={index}>
                        <Card data={data}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
        <div className='w-sccreen h-24'></div>
    </>
  )
}

export default CardList