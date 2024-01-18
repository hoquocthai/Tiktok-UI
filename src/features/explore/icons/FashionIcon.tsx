import * as React from 'react';

interface FashionIconProps {
    [val: string]: any;
}

const FashionIcon: React.FunctionComponent<FashionIconProps> = (props) => {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            {...props}
        >
            <path d="M24 7a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5Zm0-4a9 9 0 0 1 9 9h2.34a3 3 0 0 1 2.98 2.64l2.87 23.64A6 6 0 0 1 35.23 45H12.77a6 6 0 0 1-5.96-6.72l2.87-23.64A3 3 0 0 1 12.66 12H15a9 9 0 0 1 9-9Zm-4.9 16c-.11-.55-.55-1-1.1-1h-2c-.55 0-1 .45-.95 1a9 9 0 0 0 17.9 0c.06-.55-.4-1-.95-1h-2c-.55 0-.99.45-1.1 1a5 5 0 0 1-9.8 0Z"></path>
        </svg>
    );
};

export { FashionIcon };
