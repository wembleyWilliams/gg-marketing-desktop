import React, {useEffect, useState} from "react";
import "./index.scss";
import {Grid} from "@mui/material";
import Header from "../header";

interface Props {
  title: string,
  name: string,
  lastlogin?: string
}

const ProfileDetailsSection = (props: Props) => {
    
    return (
        <div className={"profile-container"}>
            <div className={"profile-container__picture"}>
                <div className={"profile_bubble"}>
                    <img className="profile_bubble__image"
                         src="https://cdn.pixabay.com/photo/2016/12/10/05/16/profile-1896698__480.jpg"
                    />
                </div>
                
            </div>
            <div className={"profile-container__text"}>
                <h2><b>{props.title}</b></h2>
                <h4>{props.name}</h4>
                <p>Last Updated: 12/05/2021</p>
            </div>
        </div>
    );
    
}

export default ProfileDetailsSection