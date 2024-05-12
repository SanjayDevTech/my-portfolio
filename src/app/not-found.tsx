export default function NotFound() {
	return (
		<>
			<div className="--not-found-container">
				<img src="/assets/astronaut.svg" alt="404" className="--not-found-image" />
				<h1 className="--not-found-title">404 Page not found</h1>
				<h2 className="--not-found-description">The page you are looking for doesn't exist</h2>
				<a href="/" className="--not-found-home-btn">
					Go to Home
				</a>
			</div>
		</>
	);
}
