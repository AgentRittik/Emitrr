import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import CardList from './CardList'
// import Space from './Space'
import Box from '@mui/material/Box';
function HomePage() {
  return (
    <div className='bg-slate-100'>
        <ResponsiveAppBar/>
        <div style={{marginTop: 80}}>
            <Box>
                <CardList/>
            </Box>
        </div>
        
        
    </div>
  )
}

export default HomePage