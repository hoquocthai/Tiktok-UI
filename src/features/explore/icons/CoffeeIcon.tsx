import * as React from 'react';

interface CoffeeIconProps {
    [val: string]: any;
}

const CoffeeIcon: React.FunctionComponent<CoffeeIconProps> = (props) => {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            {...props}
        >
            <g clipPath="url(#Icon-Cup_Fill_svg__a)">
                <path d="M18.25 8.68c.38.1.75-.2.82-.58.23-1.13.95-1.85 1.71-2.6.98-.97 2.01-2 2.2-4.04a.75.75 0 0 0-.59-.78L19.75.02c-.38-.1-.75.2-.82.58-.23 1.13-.95 1.84-1.72 2.6-.97.97-2 2-2.18 4.03-.04.37.22.7.58.79l2.64.66ZM25.25 11.7c.38.09.75-.2.82-.59.23-1.13.95-1.84 1.71-2.6.98-.97 2.01-2 2.2-4.03a.75.75 0 0 0-.59-.79l-2.64-.66c-.38-.1-.75.2-.82.58-.23 1.13-.95 1.85-1.72 2.6-.97.97-2 2-2.18 4.04-.04.36.22.69.58.78l2.64.66ZM5 17.04c0-2.3 1.89-4.16 4.21-4.16h23.16a4.19 4.19 0 0 1 4.2 4.16h1.06A7.32 7.32 0 0 1 45 24.32v3.64c0 4.02-3.3 7.28-7.37 7.28h-1.71A10.53 10.53 0 0 1 26.05 42H15.53A10.46 10.46 0 0 1 5 31.6V17.04Zm31.58 14.04h1.05c1.75 0 3.16-1.4 3.16-3.12v-3.64a3.14 3.14 0 0 0-3.16-3.12h-1.05v9.88Z"></path>
            </g>
            <defs>
                <clipPath id="Icon-Cup_Fill_svg__a">
                    <path d="M0 0h48v48H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
};

export { CoffeeIcon };
