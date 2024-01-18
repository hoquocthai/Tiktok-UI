import * as React from 'react';

interface RelationshipsIconProps {
    [val: string]: any;
}

const RelationshipsIcon: React.FunctionComponent<RelationshipsIconProps> = (props) => {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            {...props}
        >
            <path d="M25.19 4.43a1.85 1.85 0 0 0-2.38 0L2.7 21.2a1.92 1.92 0 0 0-.58 2.12c.27.76.97 1.26 1.77 1.26h2.9l1.5 16.54A3.14 3.14 0 0 0 11.39 44h25.22a3.14 3.14 0 0 0 3.11-2.89l1.5-16.54h2.9c.8 0 1.5-.5 1.77-1.26s.04-1.6-.58-2.12L25.2 4.43Zm-1.2 17.22a4.88 4.88 0 0 1 6.6.34 5.16 5.16 0 0 1 0 7.3l-5.55 5.55c-.58.57-1.51.57-2.09 0l-5.55-5.55a5.16 5.16 0 0 1 0-7.3 4.88 4.88 0 0 1 6.6-.34Z"></path>
        </svg>
    );
};

export { RelationshipsIcon };
