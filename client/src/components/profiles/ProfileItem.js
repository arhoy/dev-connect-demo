import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ProfileItem = ({ profile: { user: { _id, name, avatar } }, status, company, location, skills  }) => {
    return (
        <div className="profile bg-light">
            <img src={avatar} alt="avatar" className = "round-img"/>
            <div>
                <h2> {name} </h2>
                <p> {status}  { company && <span> at { company }</span> } </p>
                <p className="my-1"> { location && <span> at { location } </span> } </p>
                <Link className = "btn btn-primary" to = {`/profile/${_id}`} > See Profile </Link>
            </div>
            <ul>
                {
                    skills && skills.slice(0,4).map( (skill, index) => (
                      <li className = "text-primary" key = {index}> 
                       <i className="fas fa-check"></i> { skill } 
                      </li>
                    ))
                }
            </ul>
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileItem
