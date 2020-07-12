import React from "react";
import { IMAGE_W250 } from "../../data/Constants";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import DeleteIcon from "@material-ui/icons/Delete";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "../../style/MovieListItem";
import { removeMovie } from "../../actions";
import { connect } from "react-redux";

const MovieListItem = (props) => {
	const classes = useStyles();

	return (
		<List dense className={classes.root}>
			{props.movies.map((movie) => {
				const imgUrl = IMAGE_W250 + movie.poster_path;
				return (
					<ListItem key={movie.id} button>
						<ListItemAvatar>
							<Avatar alt={movie.title} src={imgUrl} />
						</ListItemAvatar>
						<ListItemText
							id={movie.id}
							disableTypography={true}
							primary={movie.title.replace(/ *\([^)]*\) */g, "")}
							className={classes.text}
						/>
						<ListItemSecondaryAction>
							<DeleteIcon
								onClick={() => {
									props.removeMovie(movie);
								}}
								className={classes.deleteIcon}
							/>
						</ListItemSecondaryAction>
					</ListItem>
				);
			})}
		</List>
	);
};

export default connect(null, { removeMovie })(MovieListItem);
