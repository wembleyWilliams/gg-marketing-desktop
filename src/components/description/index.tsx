import React from "react";
import {Card, CardContent} from "@mui/material";
import "./index.scss";
import log from "loglevel";

log.setDefaultLevel("INFO")

interface Props {
    description: string
}

const Description = (props: Props) => {
    
    return (
        <>
            <Card className={"description_card"}>
                <CardContent>
                    <h2 className={"description_card__title"}>Description</h2>
                    <p className={"description_card__body"} data-testid={"description-body"}>
                        {props.description}
                    </p>
                </CardContent>
            </Card>
        </>
    );
}

export default Description;