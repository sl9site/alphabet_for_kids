import React from "react";
import Accordion from "../Accordion"
import {connect} from "react-redux";
import TestButtons from "./testButtons";
import '../../alphabet-style.css'
import Stats from "./stats";
import ControlCase from "../ControlCase";


const Test = (props) => {
    const {stats, test, nextTest, startTest} = props;

    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;


    return (
        <div>

            <button onClick={() => startTest([...test.alphabetForTest].sort(() => Math.random() - 0.5))}>
                Start test
            </button>
            {test.testStart &&
            <div
                style={{color: randomColor}}
                className="wrap-child-active-50"
            >
                <ul>
                    {test.alphabetForTest.map((letter, i) => i === test.testCounter ? <li>{letter}</li> : <></>)}
                </ul>

            </div>
            }
            <ControlCase/>
            {test.testStart && <TestButtons/>}
            {test.testStart && <h3>Left: {26 - test.testCounter}</h3>}

            {stats.showStats && <Stats/>}

        </div>
    )
};


const mapStateToProps = (state) => ({
    stats: state.stats,
    test: state.test

})

const mapDispatchToProps = (dispatch) => ({
    nextTest: (value) => dispatch({
        type: 'NEXT_TEXT_COUNTER',
        payload: {
            value: value
        }
    }),
    startTest: (value) => dispatch({
        type: 'START_TEST',
        payload: {
            value: value
        }
    }),


})


export default connect(mapStateToProps, mapDispatchToProps)(Test);
