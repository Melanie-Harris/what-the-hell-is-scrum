import React from "react"
import teamData from "./teamData"
import {Row,Col} from "react-bootstrap"
import {Link} from "react-router-dom"
// import learning from "../../../img/learning.svg";

export default function TeamDevelopment(){
    const team = teamData.map(data => (
        <div className="learning-sub-container" key={data.id}>
            {/* {data.img} */}
            <Col>
                <Row sm={10}>
                <img className="learning-img" src={require('../../../img/learning.svg')} />
                    <Row>
                        <Col>
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                        </Col>
                    </Row>
                </Row>
            </Col>
        </div>
    ))

    return(
        <section>
            <h1>Team Development</h1>
            <Link to="/AuthLanding"><h4>Back to lesson plan</h4></Link>
            <div >{team}</div>
        </section>
    )
}