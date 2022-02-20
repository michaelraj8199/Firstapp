import React from 'react'

function Price(props) {
    console.log(props.type)
    return <>
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.type.product}</h5>
                    <h6 className="card-price text-center">${props.type.Price}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        <li ><span className="fa-li"><i className={props.type.userEnabler?"fas fa-check":"fas fa-xmark"}></i></span>{props.type.users}</li>
                        <li ><span className="fa-li"><i className={props.type.storageEnabler?"fas fa-check":"fas fa-xmark"}></i></span>{props.type.storage} </li>
                        <li ><span className="fa-li"><i className={props.type.privateProjectsEnabler?"fas fa-check":"fas fa-xmark"}></i></span>{props.type.privateProjects}</li>
                        <li ><span className="fa-li"><i className={props.type.comunityAccessEnabler?"fas fa-check":"fas fa-xmark"}></i></span>{props.type.communityAccess}</li>
                        <li ><span className="fa-li"><i className={props.type.publicProjectsEnabler?"fas fa-check":"fas fa-xmark"}></i></span>{props.type.publicprojects}</li>
                        
                       
                        <li ><span className="fa-li"><i className={props.type.reportsEnabler?"fas fa-check":"fas fa-xmark"}></i></span>{props.type.reports}</li>
                            
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>



    </>
}

export default Price;