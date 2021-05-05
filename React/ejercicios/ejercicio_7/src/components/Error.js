import React from 'react'
import Header from './Header'

export default function Error() {
    return (
        <div>
            <Header />
            <div className="error">
                <h2>Oops.. this page does not exist :)</h2>
            </div>
        </div>
    )
}
