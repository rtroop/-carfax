import {React, useState} from "react";
import Form from 'react-bootstrap/Form';
import { Row } from "react-bootstrap";
import {Col} from "react-bootstrap";
// import CloseIcon from "./images/closeIcon.svg"

function SearchBar({placeholder, data}) {
   const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
     const searchStkNum = event.target.value
     const newFilter = data.filter((value) => {
         return value.stkNum.toUpperCase().includes(searchStkNum.toUpperCase());
     });
     setFilteredData(newFilter)
  }
  
    return (
      <Form >
        <Row className="mb-6" >
          <Form.Group as={Col} md="8" controlId="validationCustom01">
            <Form.Label className="formLabel" style={{fontSize: "1rem"}}>Stock Number</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder={placeholder}
              onChange={handleFilter}
              defaultValue=""
              style={{width: "12rem"}}
            />
            {/* <div className="closeIcon">
             (filteredData.length !== 0 ? (<CloseIcon style={{width: '1em'}}/>))
            </div> */}
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                {filteredData.map((value, key) => {
                    return (
                    <a className="dataItem" rel="noreferrer" href={value.carfax} target="_blank">
                        <p>
                        {value.stkNum} 
                        </p>
                    </a>)
                })}
            </div>
            )}
          </Form.Group>
        </Row>
     </Form>
    )
}
    export default SearchBar