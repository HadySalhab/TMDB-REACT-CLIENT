import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	text: {
		fontSize: "1.3rem",
	},
	deleteIcon: {
		fontSize: "2rem",
		color: "#de8918",
		"&:hover": {
			cursor: "pointer",
		},
	},
}));
export default useStyles;
