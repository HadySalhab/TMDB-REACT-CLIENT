import axios from "axios";

/*If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.*/
//https://reactjs.org/docs/composition-vs-inheritance.html
export default class TmdbClient {
	constructor() {
		this.tmdbCliendId = "9a1a4d8d07b89f0c57458dbaf6d58a99";
	}
	async getMovie(movieId) {
		const movieResponse = await axios.get(
			`https://api.themoviedb.org/3/movie/${movieId}`,
			{
				params: {
					api_key: this.tmdbCliendId,
					append_to_response: "videos,credits,reviews",
				},
			}
		);
		return movieResponse.data;
	}
	async searchMovie(query) {
		const movieResponse = await axios.get(
			`https://api.themoviedb.org/3/search/movie/`,
			{
				params: {
					api_key: this.tmdbCliendId,
					query: query,
					page: 1,
				},
			}
		);
		return movieResponse.data;
	}
}
