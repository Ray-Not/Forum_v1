import React from 'react'
import headWallpaper from '../../images/head_wallpaper2.jpg'
import HeaderText from './HeaderText'

function HeaderImage(props) {
  return (
    <>
      <div className='row bg-dark mx-auto' style={{backgroundImage: `url(${headWallpaper})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <HeaderText/>
      </div>
    </>
  )
}

export default HeaderImage
