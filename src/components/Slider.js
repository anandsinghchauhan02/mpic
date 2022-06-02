import { withPrefix } from "gatsby";
import React from "react";
import {
    Row, UncontrolledCarousel, Carousel, CarouselCaption, CarouselControl,
    CarouselIndicators, CarouselItem

} from "reactstrap";



const Slider = () => {
    // const { logo, intro, nav, social } = useSlideItems();


    return (

        <div className="custom-slides">


            <UncontrolledCarousel

                items={[
                    {
                        altText: 'Slide 1',
                        caption: 'Slide 1',
                        key: 1,
                        src: withPrefix('/images/s1.jpg')
                    },
                    {
                        altText: 'Slide 2',
                        caption: 'Slide 2',
                        key: 2,
                        src: withPrefix('/images/s2.jpg')
                    },
                    {
                        altText: 'Slide 3',
                        caption: 'Slide 3',
                        key: 3,
                        src: withPrefix('/images/s3.jpg')
                    }
                ]}
            />
        </div>
    )
}

export default Slider;
