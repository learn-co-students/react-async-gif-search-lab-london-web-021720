import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			gifData: [],
			search: "",
		};
	}

	componentDidMount() {
		fetch(
			"https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"
		)
			.then((res) => res.json())
			.then((data) =>
				this.setState({
					gifData: data.data,
				})
			);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		fetch(
			`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`
		)
			.then((res) => res.json())
			.then((data) =>
				this.setState({
					gifData: data.data
				})
			);
	};

	onChange = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		this.setState({
			search: e.target.value,
		});
	};

	//render gifsearch and giflist child components
	render() {
		return (
			<div>
				<GifList gifData={this.state.gifData.slice(0, 3)} />
				<GifSearch handleSubmit={this.handleSubmit} onChange={this.onChange} />
			</div>
		);
	}
}
