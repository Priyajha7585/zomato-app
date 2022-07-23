import React from 'react'
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import './topbrands.css'
import Slider from 'react-slick';

const brandList = [
    {
        id:1,
        title:"McDoald's",
        time: "24 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png",
    },
    {
        id:2,
        title:"Burger King",
        time: "37 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png",
    },
    {
        id:3,
        title:"Singla's",
        time: "36 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/26620c6edc7b8a8c49e97fc276916152_1605267591.png",
    },
    {
        id:4,
        title:"Subway",
        time: "19 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png",
    },
    {
        id:6,
        title:"KFC",
        time: "28 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png",
    },
    {
        id:7,
        title:"Haldiram's",
        time: "20 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png",
    },
    {
        id:8,
        title:"Pizza Hut",
        time: "32 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png",
    },
    {
        id:9,
        title:"Chaayos",
        time: "15 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155060.png",
    },
    {
        id:10,
        title:"Nazeer Foods",
        time: "10 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6dd2b0ee7bba33519ec2fa361df4b748_1640338762.png",
    },
    {
        id:11,
        title:"Burger Singh",
        time: "12 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/a175a6938688350fb3da3018da6293db_1625244343.png",
    },
]

const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

function TopBrands() {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settings}>
            {brandList.map((brand)=>{
                return <div>
                    <div className='top-brands-cover'>
                        <img src={brand.cover} className="top-brands-image" alt={brand.title}/>
                    </div>
                    <div className='top-brands-title'>{brand.title}</div>
                    <div className='top-brands-time'>{brand.time}</div>
                </div>
            })}
        </Slider>
    </div>
  )
}

export default TopBrands