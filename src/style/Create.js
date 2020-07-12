import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
	},
	movies: {
		marginTop: "-2rem",
		padding: "2rem",
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit,minmax(17rem,1fr))",
		gridGap: "1rem",
	},
	search: {
		flex: "0 0 40%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	search__input: {
		fontSize: "1.7rem",
		color: "inherit",
		border: "none",
		padding: ".7rem 2rem",
		borderRadius: "10rem",
		width: "90%",
		transition: "all .2s",
		marginRight: "-3.25rem",
		"&:focus": {
			outline: "none",
			width: "100%",
		},
	},
	search__button: {
		border: "none",
		backgroundColor: "transparent",
		"&:focus": {
			outline: "none",
		},
		"&:hover": {
			cursor: "pointer",
		},
	},

	drawerHead: {
		display: "inline-block",
		gridColumn: "1/-1",
	},
	logo: {
		padding: "0.5rem 2rem",
		fontSize: "1.3rem",
		backgroundColor: "#de8918",
		"&:hover": {
			backgroundColor: "#c98020",
		},
	},
	save: {
		padding: "0.5rem 2rem",
		fontSize: "1.3rem",
		"&:disabled": {
			color: "#b3b3b3",
		},
	},
	typography: {
		padding: theme.spacing(2),
		fontSize: "1.5rem",
	},
	circularProgress: {
		color: "#de8918",
	},

	progress: {
		marginTop: "1rem",
		display: "flex",
		justifyContent: "center",
	},
	alert: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "1rem",
	},
	alertMessage: {
		textAlign: "center",
		fontSize: "1.5rem",
		display: "inline-block",
	},
	cardBtn: {
		color: "#282c34",
	},
	footer: {
		padding: "2rem",
		color: "white",
		fontSize: "1.7rem",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		fontWeight: "bold",
		opacity: "0.9",

		backgroundColor: "#282c34",
		alignSelf: "flex-end",
		width: "100%",
		marginTop: "auto",
	},
	footerEmoji: {
		marginLeft: "1rem",
	},
	message: {
		fontSize: "1.5rem",
	},
}));
export default useStyles;
