import React from 'react'

function Article(props) {
    return (
        <div>
            <h1>
            {props.titre.map(e =>{
                return `${e.titre}  `
            })}
            </h1>
            
            
        </div>
    )
}

export default Article
