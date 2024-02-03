import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro vel harum enim. Numquam ducimus, quas debitis iusto repellendus exercitationem voluptatum culpa sed, quo harum dicta provident odit facilis vero ex nostrum atque, dolorem deserunt porro mollitia nulla. Fugiat, beatae.
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse est, accusamus quasi non cupiditate fuga dolorem iusto tempore cum quibusdam.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
