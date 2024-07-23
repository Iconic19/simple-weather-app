import "./style/weatherCard.css";

const Weather = ({ data, err }) => {
  const date = new Date();
  const formattedDate = date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
  });
  const weatherData = data.data?.name;
  const temp = data.data?.main.temp;
  return err ? (
    <h1 className="text-white mt-[150px]">No data found</h1>
  ) : (
    <div className="justify-center">
      <div className="card">
        <div className="container">
          <div className="cloud front">
            <span className="left-front"></span>
            <span className="right-front"></span>
          </div>
          <span className="sun sunshine"></span>
          <span className="sun"></span>
          <div className="cloud back">
            <span className="left-back"></span>
            <span className="right-back"></span>
          </div>
        </div>

        <div className="card-header">
          <span>
            {weatherData}
            <br />
          </span>
          <span> {formattedDate}</span>
        </div>

        <span className="temp">{temp || "0"}°</span>

        <div className="temp-scale">
          <span>Celsius</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
