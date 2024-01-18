import React from 'react';

interface TreeIconProps {
    [val: string]: any;
}

const TreeIcon: React.FunctionComponent<TreeIconProps> = (props) => {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            {...props}
        >
            <path d="m10.31 19.82 12.07-16.6a2 2 0 0 1 3.24 0l12.07 16.6A2 2 0 0 1 36.07 23h-1.04l6.8 9.86A2 2 0 0 1 40.2 36H29v7a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-7H7.8a2 2 0 0 1-1.64-3.14l6.8-9.86h-1.03a2 2 0 0 1-1.62-3.18Z"></path>
        </svg>
    );
};

export { TreeIcon };
