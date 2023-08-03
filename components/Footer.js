export default function Footer({ cookieStands }) {
  const numberOfLocations = cookieStands ? cookieStands.length : 0;

  return (
    <footer className="footer">
      <p>{numberOfLocations} Locations World Wide</p>
    </footer>
  );
}
