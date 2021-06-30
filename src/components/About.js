

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            V
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Vegetable Mart"
        subheader="Since 2010"
      />
      <CardMedia
        className={classes.media}
        image="https://images5.alphacoders.com/794/thumb-1920-794224.jpg"
        title="Vegetable"
        
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        ​
          Vegetables mart is a place where you get all  kind of vegetables, foreign vegetables, fruits, milk, curd, butter, eggs, breads, frozen items.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Who are we</Typography>
          <Typography paragraph>
           We beleive in serving the best quality vegetables to our costumers .

          </Typography>
          <Typography paragraph>
          The Vegetables Mart is an International brand. Vegetables Mart has started its journey from Ahmadabad, Gujarat in 2015. Vegetables mart provides all types of vegetables, fresh fruits, exotic frozen fruits and organic fruits. We care for your good health and that is why all our range of fruits and vegetables are freshly available to meet all your needs. We have wide range of products to choose from, we look forward you to be a part of Vegetable mart and let us together spread the health and smile together. 
            Vegetables Mart is a leading service provider in India and sub continents, providing exclusive quality of Indian & imported fresh fruit Stalls, Exclusive designer fruit concepts in various retails, weddings, conferences, anniversaries ,high profile parties etc.
            Vegetables Mart has become pioneer in India to bring this unique concept to its consumer in India. Vegetables Mart is India’s leading sourcing-to-supermarket food company by Inditex retail Corporation  and Inditex retail Corporation  India provides unlimited choice, outstanding value proposition and superior quality of every type of perishable items in terms of vegetables, fruits, dairy products, grocery etc that is directly related to their kitchen through the brand name that is Vegetables Mart.
          </Typography>
          {/* <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}

