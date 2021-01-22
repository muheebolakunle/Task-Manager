
function Button({title, color, buttonClicked}) {
    
    return (
        <button className="btn px-4 py-2 text-white border-0 rounded" style={{backgroundColor:color}} onClick={buttonClicked}>{title}</button>
    )
}

export default Button
