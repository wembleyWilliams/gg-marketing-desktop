import React from "react";
import {Button, ButtonGroup, Card, CardContent, Grid, Paper} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./index.scss";
import {useSelector} from "react-redux";
import {State} from "../../reducers";

const log = require('loglevel');
log.setDefaultLevel("INFO")

const Socials = () => {
    // const totalFollowers = useSelector(
    //     (state: State) =>
    //         state.application.businessDetails?.socialData?.totalFollowers
    // )
    // const rating = useSelector(
    //     (state: State) =>
    //         state.application.businessDetails?.socialData?.rating
    // )
    // const newFollowers = useSelector(
    //     (state: State) =>
    //         state.application.businessDetails?.socialData?.newFollowers
    // )
    
    const businessHandles: any[] = useSelector(
        (state: State) =>
            state.application.businessDetails?.businessHandles.map(val => val)
    )
    
    log.info(businessHandles)
    //TODO: Replace with an actual loading animation
    const loading = () => <div>it a load me g</div>
    
    const getIcon = (url: string) => {
        if (url.search('instagram') > -1) {
            return <InstagramIcon
                        className={"socials_card__handles-wrapper__container__icon"}
                    />
        } else if (url.search('twitter') > -1) {
            return <TwitterIcon
                className={"socials_card__handles-wrapper__container__icon"}
            />
        } else if (url.search('facebook') > -1) {
            return <FacebookIcon
                className={"socials_card__handles-wrapper__container__icon"}
            />
        }
        
    }
    
    return (
        <>
            <Card className={"socials_card"} data-testid={"socials-card"}>
                <CardContent>
                    {/*<h2 className={"socials_card__title"}>OUR SOCIALS</h2>*/}
                    {/*<Grid container*/}
                    {/*      maxWidth={"sm"}*/}
                    {/*      className={"socials_card__numbers-section"}*/}
                    {/*      alignContent={"center"} justifyContent={"center"}*/}
                    {/*      columnSpacing={3}*/}
                    {/*>*/}
                    {/*    <Grid item>*/}
                    {/*        <h2>{totalFollowers}</h2>*/}
                    {/*        <p>Total Followers</p>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item>*/}
                    {/*        <h2>{rating}</h2>*/}
                    {/*        <p>Rating</p>*/}
                    {/*    */}
                    {/*    </Grid>*/}
                    {/*    <Grid item>*/}
                    {/*        <h2>{newFollowers}</h2>*/}
                    {/*        <p>New Followers</p>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                    <Grid container
                          className={"socials_card__tag-grid"}
                          maxWidth={"xs"}
                    >
                        {businessHandles ?
                            (
                                businessHandles.map((profile, index) => (
                                    <Grid item>
                                        <Paper className={"socials_card__handles-wrapper"}>
                                            <div className={"socials_card__handles-wrapper__container"}>
                                                {getIcon(profile.profileUrL)}
                                                <ButtonGroup>
                                                    <Button
                                                        className={"socials_card__handles-wrapper__container__button"}
                                                        variant="text"
                                                        href={`${profile.profileUrL}`}
                                                    >
                                                        VISIT
                                                    </Button>
                                                </ButtonGroup>
                                                <h4>
                                                    {profile.profileName}
                                                </h4>
                                            </div>
                                        </Paper>
                                    </Grid>
                                ))
                            ) : null
                            
                        }
                    </Grid>
                
                </CardContent>
            </Card>
        </>
    )
        ;
}
export default Socials;