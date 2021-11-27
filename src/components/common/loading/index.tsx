import React from "react";
import ContentLoader from "react-content-loader";
import {Container, Grid} from "@mui/material";

const Loading = (props: any) => {
    return (
        <Grid container
              maxWidth={"xs"} alignItems="center"
              direction="column"
              justifyContent="center"
              minHeight={"100vh"}
        >
            <Grid item>
                <ContentLoader
                    primaryColor="#d9d9d9"
                    secondaryColor="#ecebeb"
                    style={{ width: '100%'}}
                    {...props}
                >
                    <circle cx="150" cy="86" r="10" />
                    <circle cx="194" cy="86" r="10" />
                    <circle cx="238" cy="86" r="10" />
                </ContentLoader>
            </Grid>
        </Grid>
        
    );
}

export default Loading