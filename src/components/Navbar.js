import "./Navbar.css";

// Function name matches file name
const Navbar = () => {
  // return must have one parent element
  return (
    <nav>
      <ul>
        <li>
          <a href="https://api.nasa.gov/" target="_blank">
            NASA API Documentation
          </a>
        </li>
        <li>
          <a href="https://openweathermap.org/current" target="_blank">
            OpenWeatherMap API
          </a>
        </li>
      </ul>
    </nav>
  );
};

// Makes it available for import
export default Navbar;
