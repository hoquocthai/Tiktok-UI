import * as React from 'react';

interface PreviousShortcutIconProps {
    [val: string]: any;
}

const PreviousShortcutIcon: React.FunctionComponent<PreviousShortcutIconProps> = (props) => {
    return (
        <svg
            width="24"
            data-e2e=""
            height="24"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M25.2809 18.7113C24.641 17.8563 23.359 17.8563 22.7191 18.7113L15.9152 27.8012C15.1256 28.8562 15.8784 30.36 17.1962 30.36L30.8038 30.36C32.1216 30.36 32.8744 28.8562 32.0848 27.8012L25.2809 18.7113Z"></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 11C3 6.58172 6.58172 3 11 3H37C41.4183 3 45 6.58172 45 11V37C45 41.4183 41.4183 45 37 45H11C6.58172 45 3 41.4183 3 37V11ZM11 7H37C39.2091 7 41 8.79086 41 11V37C41 39.2091 39.2091 41 37 41H11C8.79086 41 7 39.2091 7 37V11C7 8.79086 8.79086 7 11 7Z"
            ></path>
        </svg>
    );
};

export { PreviousShortcutIcon };
