import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

interface ISliderArrowProps {
    direction: string;
    onClick?: () => void;
}

const SliderArrow: React.FunctionComponent<ISliderArrowProps> = ({ direction, onClick }) => {
    return (
        <button className={`slick-arrow ${direction}`} onClick={onClick}>
            <FontAwesomeIcon icon={direction === 'left' ? faChevronLeft : faChevronRight} />
        </button>
    );
};

export default SliderArrow;
