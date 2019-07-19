import React from 'react'

export const BootstrapContainerandRow = (props) => {
    return (
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}