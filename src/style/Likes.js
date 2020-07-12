import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2),
	},
	popup: {
		padding: "0.5rem 2rem",
		fontSize: "1.3rem",
		backgroundColor: "#393b40",
		"&:hover": {
			backgroundColor: "#282c34",
		},
	},
}));
export default useStyles;
