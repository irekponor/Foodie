const NotFound = () => {
  return (
    <div>
      <div className="md:text-center">
        <h1>404 - Page Not Found</h1>
        <p>
          Sorry, this is a demo website, not all pages are available
          <p> the page you seek does not exist.</p>
        </p>
        <p>
          You can always go back to the{" "}
          <a className="text-color1" href="/">
            Home
          </a>{" "}
          page...
        </p>
      </div>
    </div>
  );
};

export default NotFound;
