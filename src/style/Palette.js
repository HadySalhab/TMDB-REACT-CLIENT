const styles = {
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
};
export default styles;
