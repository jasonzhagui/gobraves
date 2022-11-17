import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import VideoItem from '../components/VideoItem';
import './home.css';


import data from './data';

export default function Home() {
  
    const [batterDropdown, setBatterDropdown] = useState([]);
    const [batterName, setBatter] = useState('');
    const [pitcherName, setPitcherName] = useState('');
    const [pitcherDropDown, setPitcherDropdown] = useState('');
    const [playOutcomeDropDown, setPlayOutcomeDropdown] = useState('');
    const [playOutcome, setPlayOutcome] = useState('');
    const [info, setInfo] = useState([]);


    useEffect(() => {
        let batters = []
        for (var batter of Object.keys(data)){
            batters.push({value: batter, label: batter});
        }
        console.log(batters)
        setBatterDropdown(batters);
    }, []);


    function findPitchers(value){
        setBatterName(value);
        let pitchers = [];
        for (var pitcher of Object.keys(data[value])){
            pitchers.push({value: pitcher, label: pitcher});
        }
        console.log(pitchers)
        setPitcherDropdown(pitchers);

    }

    function findPlayOutcomes(value){
        setPitcherName(value)
        let outcomes = []
        for (var outcome of Object.keys(data[batterName][value])){
            outcomes.push({value: outcome, label: outcome});

        setPlayOutcomeDropdown(outcomes)
        }
    }

    function setBatterName(value){
        setBatter(value)
    }

    const findVideo = () => {
        setInfo(data[batterName][pitcherName][playOutcome])
    }

  return (
    <>
    <div className="dropdown">
        <h2>First Select Batter:</h2>
        <Select
            isSearchable={true}
            placeholder={'Pick a Batter'}
            options={batterDropdown} 
            onChange={(e) => {findPitchers(e.value)}}/>
        <h2>Select Pitcher:</h2>
        <Select
            isSearchable={true}
            placeholder={'Pick a Pitcher'}
            options={pitcherDropDown} 
            onChange={(e) => {findPlayOutcomes(e.value)}}/>

        <h2>Select Outcome:</h2>
        <Select
            isSearchable={true}
            placeholder={'Pick an Outcome'}
            options={playOutcomeDropDown} 
            onChange={(e) => {setPlayOutcome(e.value)}}/>
        <h1></h1>
        <button onClick={findVideo}>
            Search
        </button>
    </div>

    <div className="users">
      {info.map((item) => (
        <VideoItem stats = {item} 
                    outcome = {playOutcome}
        />
      ))}
    </div>
              
    </>
    

  );
};
