import react, { useEffect, useState } from "react";
import axios from "axios";
export default function Searchbox() {
  const [csvdata, setCsvData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("https://souvik-search-app.herokuapp.com/csvusers/").then((res) => {
      console.log(res.data);
      setCsvData(res.data);
    });
  }, []);

  return (
    <div >
      
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
          </tr>
        </thead>

        {csvdata.map((csv, index) => (
          <>
            <tbody style={{ backgroundColor: " rgba(0, 0, 0, 0.637)" }}>
              <tr style={{ color: "white" }}>
                <th scope="row">{index + 1}</th>
                <td>{csv.name}</td>
                <td>{csv.number}</td>
                {/* <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        clickDelete(booking._id);
                      }}
                    >
                      Delete
                    </button>
                  </td> */}
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </div>
  );
}
