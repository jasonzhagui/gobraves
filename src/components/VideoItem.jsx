
import React, { useEffect, useState } from 'react';

import './videoitem.css';

export default function LayerItem({stats, outcome}) {
    const [title, setTitle] = useState('');
    const [launchAngle, setLaunchAngle] = useState('');
    const [exitVelocity, setExitVelocity] = useState('');
    const [distance, setDistance] = useState('');



    useEffect(() => {
        if (stats[1] > 50 && outcome == "Out"){
            outcome = "Pop-Up"
        }

        else if (stats[1] < 10 && outcome == "Out"){ 
            outcome = "Ground-Out"
        }

        else if (stats[1] < 50 && stats[1] > 25 && outcome == "Out"){ 
            outcome = "Fly-Out"
        }
        else if (stats[1] < 25 && stats[1] > 10 && outcome == "Out"){ 
            outcome = "Line-Out"
        }

        setTitle("Date: " + stats[0] +" | "+ " Outcome: " + outcome)
        setLaunchAngle(stats[1])
        setExitVelocity(stats[2])
        setDistance(stats[3])

    }, []);

  return (

    <div class="grid-container">
        <div class="grid-item item1">
            <div>
                <p1>{title}</p1>
                <p1></p1>
            </div>
            <video key={stats[4]} controls width="50%">
                <source src={stats[4]} type="video/mp4" />
                </video>
            </div>
        <div class="grid-item item2">
            <dl>
                <dt>Launch Angle:</dt>
                <dd>{launchAngle}°</dd>
                <dt>Exit Velocity: </dt>
                <dd>{exitVelocity} mph</dd>
                <dt>Distance: </dt>
                <dd>{distance} ft</dd>
            </dl>
        </div>

</div>

  );
}