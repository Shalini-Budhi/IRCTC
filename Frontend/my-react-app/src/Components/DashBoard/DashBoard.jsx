import "./Dashboard.css";


const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* Left Booking Card */}
      <div className="booking-box">
        <div className="tabs">
          <button className="active">PNR STATUS</button>
          <button>CHARTS / VACANCY</button>
        </div>

        <h2>BOOK TICKET</h2>

        <div className="form-row">
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
        </div>

        <div className="form-row">
          <input type="date" />
          <select>
            <option>All Classes</option>
            <option>Sleeper</option>
            <option>AC</option>
          </select>
        </div>

        <div className="form-row">
          <select>
            <option>GENERAL</option>
            <option>LADIES</option>
            <option>TATKAL</option>
          </select>
        </div>

        <div className="checkbox-row">
          <label>
            <input type="checkbox" />
            Person With Disability Concession
          </label>
          <label>
            <input type="checkbox" />
            Flexible With Date
          </label>
        </div>

        <button className="search-btn">Search Trains</button>
      </div>

      {/* Right Text Overlay */}
      <div className="railway-info">
        <h1>INDIAN RAILWAYS</h1>
        <p>Safety | Security | Punctuality</p>
      </div>
    </div>
  );
};

export default Dashboard;
