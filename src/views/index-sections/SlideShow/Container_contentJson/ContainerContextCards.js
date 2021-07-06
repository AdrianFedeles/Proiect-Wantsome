import React from 'react';
import CardsContent from './ContainerContent_cards.json';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ContainerContextCards.css';
// reactstrap components

// core components
const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: '10px',
        maxWidth: 300,
        backgroundColor: '#29BEBA',
        color: 'white',
    },
    media: {
        height: 0,
        paddingTop: '90%', // 16:9
        borderRadius: '30px',
        berder: '5px',
        borderColor: 'rgba(255, 255, 255, 0.26)',
        border: 'solid',
        margin: '15px',
        backgroundColor: 'rgba(255, 255, 255, 0.070)',
    },
    heder: {
        color: 'white',
    },
    expand: {
        backgroundColor: '#f36f2e',
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        color: 'white',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        color: 'white',
        backgroundColor: '#f36f2e',
    },
}));

function CardGenerator(props) {
    const { LinkItem } = props;
    const { card } = props;
    const { data } = props;
    const { image } = props;
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    function CreateCard(param) {
        return (
            <>
                <Card data-aos={data} className={classes.root}>
                    <CardMedia
                        data-aos={data}
                        className={classes.media}
                        image={image}
                        title={param.cardMedia.titleMEdia}
                    />
                    <CardHeader
                        data-aos={data}
                        className={classes.heder}
                        title={param.cardheader.titleHeder}
                        subheader={param.cardheader.subtitleHeder}
                    />
                    <CardContent className={classes.content}>
                        <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
                        >
                            {param.cardContent.descriptionContent}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label='show more'
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout='auto' unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                {param.cardCollapse.titleDetailsCollapse}
                            </Typography>
                            <Typography paragraph>
                                {param.cardCollapse.moreDetailsCollapse}
                                <Link
                                    className='Link_container'
                                    to={{
                                        pathname: `/${param.button.goTo}`,
                                    }}
                                >
                                    <div className='Link_Second_Container'>
                                        <p className='Paragraph_Button fAleg'>
                                            <i class={param.button.fontAwesome}>
                                                {param.button.titleButton}
                                            </i>
                                        </p>
                                    </div>
                                </Link>
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </>
        );
    }

    const classes = useStyles();
    console.log(CardsContent[LinkItem]);
    let content = CreateCard(CardsContent[LinkItem][card]);

    return <>{content}</>;
}

export default CardGenerator;
