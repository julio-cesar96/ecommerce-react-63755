const Card = ({ children }) => {
    return (
        <div style={{ border: '1px solid #eee', padding: '16px'}}>
            {children}
        </div>
    )
}

export default Card;