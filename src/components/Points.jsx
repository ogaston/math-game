import React from 'react'
import Colors from '../constant/colors'

export default function Points ({ points }) {

    return (
        <span>
            <i className="fas fa-star" style={{ color: Colors.yellow }}></i> {points}
        </span>
        )

}