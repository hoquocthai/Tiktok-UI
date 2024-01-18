import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import HorizontalSlider from '../components/HorizontalSlider';
import ExploreCard from '../components/ExploreCard';

interface ExplorePageProps {}

const ExplorePage: React.FunctionComponent<ExplorePageProps> = (props) => {
    return (
        <div className="explore">
            <HorizontalSlider />
            <div className="explore__card-list">
                {[1, 2, 3, 4].map((e) => (
                    <ExploreCard />
                ))}
            </div>
        </div>
    );
};

export default ExplorePage;
