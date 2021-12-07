import React from "react";
import {Card, CardMedia} from "@mui/material";
import "./index.scss";

interface Props {
    image: any;
}

const Header = (props: Props) => {
    
    return (
        <>
            <Card className={"profile_bubble"}>
                <CardMedia
                    className={"profile_bubble__image"}
                    component="img"
                    src={props.image}
                    alt="logo"
                />
            </Card>
        </>
    )
}
export default Header;