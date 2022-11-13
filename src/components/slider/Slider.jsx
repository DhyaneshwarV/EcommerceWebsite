import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination,Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Slider.css'
import {SliderProducts} from '../../data/products'
const Slider=()=> {
  return (
    <div className="sliderContainer">
        <Swiper
        modules={[Pagination,Navigation]}
        // className="mySwiper"
        slidesPerView={3} 
        spaceBetween={40}
        slidesPerGroup={1}
        loopFillGroupWithBlank={true}
        navigation={true}
        loop={true}
        breakpoints={{
            640:{
                slidesPerView:3
            },
            0:{
                slidesPerView:1
            },
        }}
        >
            {SliderProducts.map((slide,i)=>{
                return(
                    <SwiperSlide>
                    <div className={"left"}>
                        <div className={"name"}>
                            <span>{slide.name}</span>
                            <span>{slide.detail}</span>
                        </div>
                        <span>{slide.price}$</span>
                        <div>Shop now</div>
                    </div>
                    <img className='productImg' src={slide.img} alt="img" />
                    </SwiperSlide>
                )
                
            })}
            
        </Swiper>
    </div>
  )
}

export default Slider
