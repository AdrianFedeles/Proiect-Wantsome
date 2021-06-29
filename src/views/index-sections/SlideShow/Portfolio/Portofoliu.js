import React from 'react';
import './Portofoliu.css';

// reactstrap components
import {
	Container,
	Carousel,
	CarouselItem,
	CarouselIndicators,
} from 'reactstrap';

// core components

const items = [
	{
		src: require('assets/img/Project1.webp').default,
		altText: 'Business Website ',
		caption: 'Business Website',
	},
	{
		src: require('assets/img/Project2.webp').default,
		altText: 'Health and relaxation',
		caption: 'Health and relaxation',
	},
	{
		src: require('assets/img/Project3jpg.webp').default,
		altText: 'Fast food and restaurant',
		caption: 'Fast food and restaurant',
	},
	{
		src: require('assets/img/Project4.webp').default,
		altText: 'Fashion',
		caption: 'Fashion',
	},
	{
		src: require('assets/img/Project5.webp').default,
		altText: 'Ecommerce',
		caption: 'Ecommerce',
	},
	{
		src: require('assets/img/Project6.webp').default,
		altText: 'Presentation site',
		caption: 'Presentation site',
	},
	{
		src: require('assets/img/image1.webp').default,
		altText: 'Fitness',
		caption: 'Fitness',
	},
	{
		src: require('assets/img/image2.webp').default,
		altText: 'Ecommerce',
		caption: 'Ecommerce',
	},
	{
		src: require('assets/img/image3.webp').default,
		altText: 'Presentation site',
		caption: 'Presentation site',
	},
];

function Portofoliu() {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const [animating, setAnimating] = React.useState(false);
	const onExiting = () => {
		setAnimating(true);
	};
	const onExited = () => {
		setAnimating(false);
	};
	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};
	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};
	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};
	return (
		<>
			<div className="section" id="Portofoliul">
				<div>
					<h4 className="Title_h4_prtofolio fAleg">Portofoliu</h4>
				</div>
				<Container>
					<Carousel activeIndex={activeIndex} next={next} previous={previous}>
						<CarouselIndicators
							items={items}
							activeIndex={activeIndex}
							onClickHandler={goToIndex}
							style={{ backgroundColor: 'black' }}
						/>
						{items.map((item) => {
							return (
								<CarouselItem
									onExiting={onExiting}
									onExited={onExited}
									key={item.src}
								>
									<img
										style={{ width: '100%', height: 'auto' }}
										src={item.src}
										alt={item.altText}
									/>
									<div className="carousel-caption d-none d-md-block Title_Image_Carusel_Section">
										<h5 className="Title_image_carusel fAleg">
											{item.caption}
										</h5>
									</div>
								</CarouselItem>
							);
						})}
						<a
							className="carousel-control-prev"
							data-slide="prev"
							href="#pablo"
							onClick={(e) => {
								e.preventDefault();
								previous();
							}}
							role="button"
						>
							<i className="now-ui-icons arrows-1_minimal-left"></i>
						</a>
						<a
							className="carousel-control-next"
							data-slide="next"
							href="#pablo"
							onClick={(e) => {
								e.preventDefault();
								next();
							}}
							role="button"
						>
							<i className="now-ui-icons arrows-1_minimal-right"></i>
						</a>
					</Carousel>
				</Container>
			</div>
		</>
	);
}

export default Portofoliu;
