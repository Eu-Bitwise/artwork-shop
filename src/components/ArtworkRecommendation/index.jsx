import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ArtworkRecommendation.css';

const ArtworkRecommendation = ({ artworks }) => {
    // useRef to get access to the scroll-container div
    const scrollContainer = useRef(null);

    // States to hold the current and maximum scroll position
    const [scrollPos, setScrollPos] = useState(0);
    const [maxScrollPos, setMaxScrollPos] = useState(0);

    // Function to scroll the scrollContainer by scrollOffset
    const scroll = (scrollOffset) => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += scrollOffset;
        }
    };

    // Add an event listener to update scroll position states
    useEffect(() => {
        const updateScrollPos = () => {
            if (scrollContainer.current) {
                // Set scrollPos to the current scroll position
                setScrollPos(scrollContainer.current.scrollLeft);
                // Set maxScrollPos to the maximum possible scroll position
                setMaxScrollPos(
                    scrollContainer.current.scrollWidth -
                        scrollContainer.current.clientWidth,
                );
            }
        };

        // Add scroll event listener if the ref is assigned
        if (scrollContainer.current) {
            scrollContainer.current.addEventListener('scroll', updateScrollPos);
        }

        updateScrollPos(); // Update scrollPos and maxScrollPos initially

        // Cleanup: remove event listener when component unmounts
        return () => {
            if (scrollContainer.current) {
                scrollContainer.current.removeEventListener(
                    'scroll',
                    updateScrollPos,
                );
            }
        };
    }, []);

    return (
        <div className="recommendation-container">
            {scrollPos > 0 && (
                // Display left arrow if not at the start of scroll
                <FaChevronLeft
                    onClick={() => scroll(-200)}
                    className="scroll-icon"
                />
            )}
            <div ref={scrollContainer} className="scroll-container">
                {artworks.map((artwork, index) => (
                    // Display artwork images
                    <img
                        key={index}
                        src={artwork.imageUrl}
                        className="artwork-image"
                        alt=""
                    />
                ))}
            </div>
            {scrollPos < maxScrollPos && (
                // Display right arrow if not at the end of scroll
                <FaChevronRight
                    onClick={() => scroll(200)}
                    className="scroll-icon"
                />
            )}
        </div>
    );
};

ArtworkRecommendation.propTypes = {
    artworks: PropTypes.arrayOf(
        PropTypes.shape({
            imageUrl: PropTypes.string,
        }),
    ),
};

export default ArtworkRecommendation;
