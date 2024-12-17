/* eslint-disable react/prop-types */
import "./Menu.css"
export const Menu = ({ children }) => {
    return (
        <>
            <nav className="navbar">
                {children}
            </nav>
        </>
    )
}