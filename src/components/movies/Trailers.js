import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../../style/Trailers";

const Trailers = ({ classes, movie }) => {
	const videos = movie.videos.results;
	return (
		<section className={classes.trailerSection}>
			<h1>Trailers</h1>
			<div className={classes.trailers}>
				{videos.slice(0, 4).map((video) => (
					<a
						key={video.key}
						href={`https://www.youtube.com/watch?v=${video.key}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div
							style={{
								position: "relative",
							}}
						>
							<img
								src={`https://img.youtube.com/vi/${video.key}/0.jpg`}
								style={{
									width: "100%",
								}}
								alt=""
							/>
							<i
								className="fab fa-youtube fa-7x"
								style={{
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translate(-50%,-50%)",
									color: "#c4302b",
								}}
							></i>
						</div>
					</a>
				))}
			</div>
		</section>
	);
};
export default withStyles(styles)(Trailers);
