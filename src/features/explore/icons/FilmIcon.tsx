import * as React from 'react';

interface FilmIconProps {
    [val: string]: any;
}

const FilmIcon: React.FunctionComponent<FilmIconProps> = (props) => {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            {...props}
        >
            <path d="M34.94 38.78A19 19 0 1 0 23 43h17.94c.59 0 1.06-.47 1.06-1.06v-2.1c0-.59-.47-1.06-1.06-1.06h-6ZM23 18.72a3.17 3.17 0 1 1 0-6.34 3.17 3.17 0 0 1 0 6.34Zm3.17 13.72a3.17 3.17 0 1 1-6.34 0 3.17 3.17 0 0 1 6.34 0Zm-11.61-5.27a3.17 3.17 0 1 1 0-6.34 3.17 3.17 0 0 1 0 6.34ZM34.6 24a3.17 3.17 0 1 1-6.34 0 3.17 3.17 0 0 1 6.34 0Z"></path>
        </svg>
    );
};

export { FilmIcon };
