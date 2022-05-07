import React from "react";
// import * as bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
// import Unit from "./components/units";
// import vehicles from "./vehicles";
import { Card } from "react-bootstrap";
import SearchBar from "./components/search";
import { Button } from "react-bootstrap";
import logo from "./components/images/nwautos.svg";
import cFax from "./components/images/carfax.svg";
import vehicles from "./vehicles";

// function createUnit(automobile){
//       return <Unit
//       key={automobile.stkNum}
//       title={automobile.title}
//       stkNum={automobile.stkNum}
//       year={automobile.year}
//       make={automobile.make}
//       model={automobile.model}
//       trim={automobile.trim}
//       miles={automobile.miles}
//       intcolor={automobile.intcolor}
//       extcolor={automobile.extcolor}
//       list={automobile.list}
//       sale={automobile.sale}
//       drive={automobile.drive}
//       fuel={automobile.fuel}
//       trans={automobile.trans}
//       vin={automobile.vin}
//       vId={automobile.vId}
//       engine={automobile.engine}
//       link={automobile.link}
//       carfax={automobile.carfax}
//       photo={automobile.photo}
//       />

// }

const App = () => {
  return (
    <div>
      <div    style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
        <Card style={{ width: "18rem", padding: "1em" }}>
          <Card.Img variant="top" src={logo} style={{maxWidth: "10rem", alignSelf: "center"}}/>
          <Card.Body>
            <Card.Title>
              <img src={cFax} alt='Cafax'/>
            </Card.Title>
            <SearchBar className="search" data={vehicles} />
            <Button className="sub"
                    >Submit
                    </Button>
          </Card.Body>
        </Card>
        {/* <Unit /> */}
        {/* {vehicles.map(createUnit)} */}
      </div>
    </div>
  );
};

export default App;
