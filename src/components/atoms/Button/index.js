import React from 'react';

const Button = ({title, onClick, loading}) => {
    
    if(loading){
        return <button className="btn btn-secondary rounded-pill form-control" disabled>Loading...</button>
    }
    return (
        <button className="btn btn-danger rounded-pill form-control" onClick={onClick}>{title}</button>
    )
}

export default Button;