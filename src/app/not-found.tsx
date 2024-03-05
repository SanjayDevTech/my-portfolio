import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="--not-found-container">
        <img width="100%" height="50%" src="/assets/astronaut.svg" alt="404" className="--not-found-image" />
        <h1 className="--not-found-title">404 Page not found</h1>
        <h2 className="--not-found-description">
          The page you are looking for doesn't exist
        </h2>
        <Link href="/" className="--not-found-home-btn">
          Go to Home
        </Link>
      </div>
    </>
  );
}
