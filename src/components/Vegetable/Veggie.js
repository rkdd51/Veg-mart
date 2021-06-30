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
import './Veggie.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
      <div className= "ed">
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
        title="Vegetables"
        subheader="Capsicum"
      />
      <CardMedia
        className={classes.media}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80HaX_sB7qm-Xru_IqBhCW_blkARqz6OO-w&usqp=CAU"
        title="Capsicum"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Price: 30/kg</b><br>
          </br>
          Capsicum contains very low fat and is very high in fibre as well as water content. There is also a low amount of carbohydrates and calories in capsicum.

        </Typography>
      </CardContent>
      <button>Add to Cart</button>
     
    </Card>

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
        title="Vegetables"
        subheader="Cauliflower"
      />
      <CardMedia
        className={classes.media}
        image="data:image/jpeg;base64,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"
        title="Cauliflower"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Price: 60/kg</b><br>
          </br>
          Cauliflower is an extremely healthy vegetable that’s a significant source of nutrients. It also contains unique plant compounds that may reduce the risk of several diseases, including heart disease and cancer..

        </Typography>
      </CardContent>
      <button>Add to Cart</button>
     
    </Card>

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
        title="Vegetables"
        subheader="Carrot"
      />
      <CardMedia
        className={classes.media}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZVlO0X7ZvmfiRS4hfoIPQeY8p5Fb7Eh9cFQ&usqp=CAU"
        title="Carrot"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Price: 40/kg</b><br>
          </br>
          Carrot is loaded with vitamin A and high in vitamins C and K. It also contains plant compounds called carotenoids, which act as antioxidants..

        </Typography>
      </CardContent>
      <button>Add to Cart</button>
     
    </Card>

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
        title="Vegetables"
        subheader="Onion"
      />
      <CardMedia
        className={classes.media}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9tBe3aSUQPzgehfI5xYN5lRkJgrRxPzSXg&usqp=CAU"
        title="Onion"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Price: 70/kg</b><br>
          </br>
          Onions are low in calories yet high in nutrients, including vitamin C, B vitamins and potassium.

        </Typography>
      </CardContent>
      <button>Add to Cart</button>
     
    </Card>


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
        title="Vegetables"
        subheader="Spinach"
      />
      <CardMedia
        className={classes.media}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGV3grpFB6uNxMSGiaMapiag2TkA7vAEY9HA&usqp=CAU"
        title="Spinach"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Price: 40/kg</b><br>
          </br>
          Spinach is an extremely nutrient-rich vegetable. It packs high amounts of carotenoids, vitamin C, vitamin K, folic acid, iron, and calcium.

        </Typography>
      </CardContent>
      <button>Add to Cart</button>
     
    </Card>


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
      title="Vegetables"
      subheader="Eggplant"
    />
    <CardMedia
      className={classes.media}
      image="https://www.haifa-group.com/sites/default/files/crop/eggplant%20iso.jpg"
      title="Eggplant"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        <b>Price: 100/kg</b><br>
        </br>
        Eggplants are rich in fiber and antioxidants. A serving of eggplant can provide at least 5% of a person's daily requirement of fiber, copper, manganese, B-6, and thiamine.

      </Typography>
    </CardContent>
    <button>Add to Cart</button>
   
  </Card>

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
        title="Vegetables"
        subheader="Bottle Gourd"
      />
      <CardMedia
        className={classes.media}
        image="data:image/jpeg;base64,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"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Price: 20/kg</b><br>
          </br>
          The vegetable contains essential nutrients like Vitamin C, Vitamin B, Vitamin K, Vitamin A, Vitamin E, Iron, Folate, Magnesium, and Potassium.

        </Typography>
      </CardContent>
      <button>Add to Cart</button>
     
    </Card>

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
        title="Vegetables"
        subheader="Tomato"
      />
      <CardMedia
        className={classes.media}
        image="data:image/jpeg;base64,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"
        title="Tomato"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Price: 30/kg</b><br>
          </br>
          Tomatoes are the major dietary source of the antioxidant lycopene, which has been linked to many health benefits, including reduced risk of heart disease and cancer. 
        </Typography>
      </CardContent>
      <button>Add to Cart</button>
     
    </Card>


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
        title="Vegetables"
        subheader="Garlic"
      />
      <CardMedia
        className={classes.media}
        image="data:image/jpeg;base64,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"
        title="Garlic"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Price: 80/kg</b><br>
          </br>
          Garlic is low in calories and rich in vitamin C, vitamin B6 and manganese. It also contains trace amounts of various other nutrients.

        </Typography>
      </CardContent>
      <button>Add to Cart</button>
     
    </Card>


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
        title="Vegetables"
        subheader="Cabbage"
      />
      <CardMedia
        className={classes.media}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUhr0nan57AA9I0_rnZc9gugVptYOMd247tw&usqp=CAU"
        title="Cabbage"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Price: 60/kg</b><br>
          </br>
          Cabbage contains powerful antioxidants that may help reduce inflammation.

        </Typography>
      </CardContent>
      <button>Add to Cart</button>
     
    </Card>


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
        title="Vegetables"
        subheader="Beetroot"
      />
      <CardMedia
        className={classes.media}
        image="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/311343_2200-732x549.jpg"
        title="Beetroot"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Price: 50/kg</b><br>
          </br>
          Beets contain a high concentration of nitrates, which have a blood pressure-lowering effect. This may lead to a reduced risk of heart attacks, heart failure and stroke.

        </Typography>
      </CardContent>
      <button>Add to Cart</button>
     
    </Card>


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
        title="Vegetables"
        subheader="Beans"
      />
      <CardMedia
        className={classes.media}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZapBx3IHv8tfU1Qeftf1qhcRuvQDtprSPQ&usqp=CAU"
        title="Beans"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Price: 35/kg</b><br>
          </br>
          Green beans contain many essential vitamins, including folate.

        </Typography>
      </CardContent>
      <button>Add to Cart</button>
     
    </Card>


  </div>
  );
}
