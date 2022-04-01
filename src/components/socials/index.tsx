import React from "react";
import {
    Button,
    ButtonGroup,
    Card,
    CardContent,
    Grid,
    Paper,
    Theme
} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./index.scss";
import {createStyles, makeStyles} from "@mui/styles";
import {useSelector} from "react-redux";
import {State} from "../../reducers";
import InsertLink from "@mui/icons-material/InsertLink";
import {YouTube} from "@mui/icons-material";

const log = require('loglevel');
log.setDefaultLevel("INFO")

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    profileNameText: {
        fontSize: '1.5vw',
        padding:'0rem 20px'
    }
}))

const Socials = () => {
    const classes = useStyles();
    
    const businessHandles: any[] = useSelector(
        (state: State) =>
            state.application.businessDetails?.businessHandles.map(val => val)
    )
    
    //TODO: Replace with an actual loading animation
    const loading = () => <div>it a load me g</div>
    log.info(businessHandles)
    const getIcon = (url: string) => {
        if(url === undefined) {
            return <InsertLink
              className={"socials_card__handles-wrapper__container__icon"}
            />
        } else {
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
            } else if(url.search('youtube') > -1){
                return <YouTube
                  className={"socials_card__handles-wrapper__container__icon"}
                />
            }
            else return <InsertLink
              className={"socials_card__handles-wrapper__container__icon"}
            />
        }
        
    }
    
    return (
        <>
            <Card className={"socials_card"} data-testid={"socials-card"}>
                <CardContent>
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
                                                {getIcon(profile.profileUrl)}
                                                <ButtonGroup>
                                                    <Button
                                                        className={"socials_card__handles-wrapper__container__button"}
                                                        variant="text"
                                                        href={`${profile.profileUrl}`}
                                                    >
                                                        VISIT
                                                    </Button>
                                                </ButtonGroup>
                                                <p className={classes.profileNameText}>
                                                    {profile.profileName}
                                                </p>
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