import React, { useState, useEffect, useCallback } from 'react';
import slider1 from '../../media/home/Sliders-1.jpg';
import slider2 from '../../media/home/Sliders-2.jpg';
import slider3 from '../../media/home/Sliders-3.jpg';
import slider4 from '../../media/home/Sliders-4.jpg';
import slider5 from '../../media/home/Sliders-5.jpg';
import './Home.css';

const slides = [slider1, slider2, slider3, slider4, slider5];

function Home({ lang }) {
    const [current, setCurrent] = useState(0);
    // const ar = lang === 'ar';

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prev = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(next, 4500);
        return () => clearInterval(interval);
    }, [next]);

    return (
        <div className="home">
            {/* Hero Slider */}
            <section className="home__slider" aria-label="Hero Slider">
                <div className="slider__track">
                    {slides.map((src, i) => (
                        <div
                            key={i}
                            className={`slider__slide ${i === current ? 'slider__slide--active' : ''}`}
                            aria-hidden={i !== current}
                        >
                            <img src={src} alt={`Slide ${i + 1}`} />
                        </div>
                    ))}
                </div>

                {/* Arrows */}
                <button className="slider__arrow slider__arrow--prev" onClick={prev} aria-label="Previous">
                    &#10094;
                </button>
                <button className="slider__arrow slider__arrow--next" onClick={next} aria-label="Next">
                    &#10095;
                </button>

                {/* Dots */}
                <div className="slider__dots">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`slider__dot ${i === current ? 'slider__dot--active' : ''}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;
