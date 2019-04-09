import React from 'react'


const style = {
    container:{
        display: "flex",
        justifyContent: "space-around",
    },
    el: {
        flex: 1
    }
}

export default function TableScore ({ points }) {

    const playerName = sessionStorage.getItem("onlinePlayer");
    let scoreTable = JSON.parse(localStorage.getItem("scoreTable")) || [];

    scoreTable.push({
        name: playerName,
        points,
        time: Date.now()
    })

    scoreTable = scoreTable.sort((a, b) => b.points - a.points).slice(0,4)

    localStorage.setItem("scoreTable", JSON.stringify(scoreTable))

    return (
        <div>
            {
                scoreTable.map((player, i) => {
                    return (
                        <span key={i}>
                            <div style={style.container}>
                                <small style={style.el} >{player.name}</small>
                                <small style={style.el}><i className="fas fa-star"></i> {player.points}</small>
                                <small style={style.el}>
                                    <i className="fas fa-clock"></i> 
                                    {" " + (new Date(player.time)).toLocaleDateString()}
                                </small>
                            </div>
                            <hr style={{ border: "0.5px solid #515254"}} />
                        </span>
                    )
                })
            }
        </div>
    )

}