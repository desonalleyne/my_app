import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    flexGrow: 11,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;
  const text = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ullamcorper orci. Vivamus egestas lectus quis odio bibendum, et pretium nulla mattis. Phasellus maximus pretium magna vel sodales. Pellentesque vehicula ornare nisi, quis scelerisque mauris. Quisque sed molestie elit. Vivamus sagittis metus non ligula luctus facilisis. Sed leo massa, varius imperdiet commodo a, facilisis ac justo. Fusce dignissim sem in facilisis efficitur. Fusce accumsan porttitor nibh, vel laoreet ipsum commodo quis. Nam et euismod urna. Aenean sed diam eros.In sit amet neque auctor, blandit risus sit amet, maximus augue. Aliquam placerat ornare enim ac vehicula. Praesent ligula magna, dictum sit amet arcu a, malesuada condimentum leo. Cras eu sapien a arcu tristique consectetur ac et tellus. Ut facilisis dictum nisi, in egestas metus aliquet vel. Donec eu tristique diam. Morbi tempus molestie augue a laoreet.Nulla vel nisl varius magna sollicitudin rutrum. Aliquam ac bibendum dui. Phasellus auctor sagittis lectus. Maecenas maximus, ex at consectetur facilisis, est purus ultricies libero, sit amet mattis diam neque nec sapien. Quisque nec nunc vel orci pharetra ornare at ac ligula. Pellentesque in magna ut dolor sollicitudin rutrum vel a mi. Maecenas enim dolor, lobortis vel velit et, accumsan commodo turpis. Aliquam interdum varius ex eu pretium. Fusce a orci posuere, convallis arcu id, fermentum nibh. Aenean nec diam id mauris maximus maximus. Proin varius diam quam, ac euismod leo commodo sed. Curabitur nec ipsum feugiat, laoreet nunc id, ultricies augue. Fusce mauris nibh, consectetur sed erat id, finibus tincidunt nunc. Proin id libero accumsan, dignissim tellus tincidunt, faucibus est. Cras iaculis sagittis cursus. Vivamus porttitor, lectus vitae pharetra ultricies, felis ligula semper ex, ac accumsan eros dui imperdiet odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ullamcorper orci. Vivamus egestas lectus quis odio bibendum, et pretium nulla mattis. Phasellus maximus pretium magna vel sodales. Pellentesque vehicula ornare nisi, quis scelerisque mauris. Quisque sed molestie elit. Vivamus sagittis metus non ligula luctus facilisis. Sed leo massa, varius imperdiet commodo a, facilisis ac justo. Fusce dignissim sem in facilisis efficitur. Fusce accumsan porttitor nibh, vel laoreet ipsum commodo quis. Nam et euismod urna. Aenean sed diam eros.In sit amet neque auctor, blandit risus sit amet, maximus augue. Aliquam placerat ornare enim ac vehicula. Praesent ligula magna, dictum sit amet arcu a, malesuada condimentum leo. Cras eu sapien a arcu tristique consectetur ac et tellus. Ut facilisis dictum nisi, in egestas metus aliquet vel. Donec eu tristique diam. Morbi tempus molestie augue a laoreet.Nulla vel nisl varius magna sollicitudin rutrum. Aliquam ac bibendum dui. Phasellus auctor sagittis lectus. Maecenas maximus, ex at consectetur facilisis, est purus ultricies libero, sit amet mattis diam neque nec sapien. Quisque nec nunc vel orci pharetra ornare at ac ligula. Pellentesque in magna ut dolor sollicitudin rutrum vel a mi. Maecenas enim dolor, lobortis vel velit et, accumsan commodo turpis. Aliquam interdum varius ex eu pretium. Fusce a orci posuere, convallis arcu id, fermentum nibh. Aenean nec diam id mauris maximus maximus. Proin varius diam quam, ac euismod leo commodo sed. Curabitur nec ipsum feugiat, laoreet nunc id, ultricies augue. Fusce mauris nibh, consectetur sed erat id, finibus tincidunt nunc. Proin id libero accumsan, dignissim tellus tincidunt, faucibus est. Cras iaculis sagittis cursus. Vivamus porttitor, lectus vitae pharetra ultricies, felis ligula semper ex, ac accumsan eros dui imperdiet odio.")
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Typography variant="headline" gutterBottom>
            Doc A Headline
          </Typography>
          <Paper className={classes.paper}>{text}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="headline" gutterBottom>
              Doc B Headline
            </Typography>
          <Paper className={classes.paper}>{text}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);