import * as React from 'react';

interface PeopleIconProps {
    [val: string]: any;
}

const PeopleIcon: React.FunctionComponent<PeopleIconProps> = (props) => {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            {...props}
        >
            <path d="M5 14a10 10 0 1 1 20 0 10 10 0 0 1-20 0ZM15 27C5.35 27 0 34.04 0 39.84 0 43 1.76 43 7.94 43h14.12c6.18 0 7.94 0 7.94-3.16C30 34.04 24.65 27 15 27ZM33.98 42h7.2C45.7 42 47 42 47 39.63 47 35.28 43.08 30 36 30c-2 0-3.74.42-5.22 1.12A22.18 22.18 0 0 1 33.98 42ZM36 27a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
        </svg>
    );
};

export { PeopleIcon };
