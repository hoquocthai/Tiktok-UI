import React from 'react';

interface EntertainmentIconProps {
    [val: string]: any;
}

const EntertainmentIcon: React.FunctionComponent<EntertainmentIconProps> = (props) => {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            {...props}
        >
            <path d="M35.28 10.97c.8.76.73 2.02-.04 2.8L25.03 24.01l10.19 10.24c.77.78.83 2.04.04 2.8A17.81 17.81 0 0 1 22.92 42C13.02 42 5 33.94 5 24S13.02 6 22.92 6c4.8 0 9.15 1.9 12.36 4.97ZM22.4 16.59a3.17 3.17 0 1 0-6.34-.02 3.17 3.17 0 0 0 6.34.02Zm16.34 12.7A5.28 5.28 0 0 0 44 24a5.28 5.28 0 1 0-5.27 5.3Z"></path>
        </svg>
    );
};

export { EntertainmentIcon };
