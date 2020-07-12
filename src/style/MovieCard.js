import { makeStyles } from "@material-ui/core/styles";
const withStyles = makeStyles({
	card: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	cardActionArea: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	cardMedia: {
		height: "25rem",
	},
	cardContent: {
		padding: "1rem",
	},
	cardActions: {
		display: "flex",
		justifyContent: "flex-end",
	},
	cardBtn: {
		fontSize: "1.2rem",
		color: "rgba(0,0,0,0.7)",
	},
});
export default withStyles;
