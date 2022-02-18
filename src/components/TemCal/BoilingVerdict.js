import React from 'react'

export default function BoilingVerdict({celsius=0}) {
    if (celsius >= 100) {
        return <div>Water Boiled</div>
    }
    return <div>Water should not Boiled</div>
}
