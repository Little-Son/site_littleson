export function Button(props) {
    return(
        <button aria-label={props.ariaLabel} className="flex justify-center items-center px-4 py-2 rounded bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500  transition-colors focus:ring-2 ring-offset-4">
            {props.children}
        </button>
    )
}

export function ButtonLarge(props) {
    return(
        <button aria-label={props.ariaLabel} className="flex justify-center items-center px-4 py-4 md:py-6 rounded bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition-colors focus:ring-2 ring-offset-4">
            {props.children}
        </button>
    )
}