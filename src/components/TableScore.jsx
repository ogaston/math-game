import React from 'react'
import { Session, Persistent } from '../utils/storage'
import * as moment from 'moment'
import Colors from '../constant/colors';



const style = {
    container:{
        display: "flex",
        justifyContent: "space-around",
    },
    el: {
        flex: 1
    },
    title: {
        margin: "0.6em auto"
    },
    divider: { border: `0.5px solid ${Colors.midGray}`},
    timeCol: {
        flex: 1,
        padding: "0.3em 0em",
        fontSize: "0.6em",
        color: Colors.darkGray,
    },
    sectionContainer: { textAlign: "left", padding: "0.15em 0em" }
}



function RowScore ({ player }) {
    return (
        <div style={style.sectionContainer}>
            <h5 style={style.title}>{player.name}</h5>
            <div style={style.container}>
                <small style={style.timeCol}>
                    <i className="fas fa-clock"></i> 
                    {" " + moment(new Date(player.time)).fromNow()}
                </small>
                <small style={style.el}><i className="fas fa-star" style={{color: Colors.yellow }}></i> {player.points}</small>
            </div>
            <hr style={style.divider} />
        </div>
    )
}





export default function TableScore ({ points }) {

    const playerName = Session.get("onlinePlayer");
    let scoreTable = JSON.parse(Persistent.get("scoreTable")) || [];

    scoreTable.push({
        name: playerName,
        points,
        time: Date.now()
    })

    scoreTable = scoreTable.sort((a, b) => b.points - a.points).slice(0,4)

    Persistent.set("scoreTable", JSON.stringify(scoreTable))

    return (
        <div>
            {
                scoreTable.map((player, i) => {
                    return (
                        <RowScore player={player} key={i} />
                    )
                })
            }
        </div>
    )

}