const Button = ({ label, onClick, children }) => {
    return (
        <>
            <button onClick={onClick}> 
                    {children}
                    {label}
            </button>
        </>
    )
}

export default Button;