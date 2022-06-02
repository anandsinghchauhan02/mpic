import { withPrefix } from "gatsby";
import React from "react";
import {
	Row, UncontrolledCarousel, Carousel, CarouselCaption, CarouselControl,
	CarouselIndicators, CarouselItem

} from "reactstrap";



const Slider = ({ list = [] }) => {

	const slides = list.map((item) => {
		return {
			...item,
			src: withPrefix(item.src)
		}
	})
	return (

		<div className="custom-slides">


			<UncontrolledCarousel

				items={slides}
			/>
		</div>
	)
}

export default Slider;
