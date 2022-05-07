import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
function Unit(props) {
  return (
    <Card className="car">
      <Card.Body>
        <h1 className="title">
          <span>{props.title}</span>
        </h1>
        <Card.Img className="v_img" variant="top" src={props.photo} />
        <Row className="v_row">
          <Col style={{ maxWidth: 30 + "%" }} className="label_col c_odd">
            <label className="v_label">Stock:</label>
          </Col>
          <Col className="val_col c_odd">
            <span className="val_prop">{props.stkNum}</span>
          </Col>
        </Row>
        <Row className="v_row">
          <Col style={{ maxWidth: 30 + "%" }} className="label_col c_even">
            <label className="v_label">Year:</label>
          </Col>
          <Col className="val_col c_even">
            <span className="val_prop">{props.year}</span>
          </Col>
        </Row>
        <Row className="v_row">
          <Col style={{ maxWidth: 30 + "%" }} className="label_col c_odd">
            <label className="v_label">Make:</label>
          </Col>
          <Col className="val_col c_odd">
            <span className="val_prop">{props.make}</span>
          </Col>
        </Row>
        <Row className="v_row">
          <Col style={{ maxWidth: 30 + "%" }} className="label_col c_even">
            <label className="v_label">Model:</label>
          </Col>
          <Col className="val_col c_even">
            <span className="val_prop">{props.model}</span>
          </Col>
        </Row>
        <Row className="v_row">
          <Col style={{ maxWidth: 30 + "%" }} className="label_col c_odd">
            <label className="v_label">Miles:</label>
          </Col>
          <Col className="val_col c_odd">
            <span className="val_prop">{props.miles}</span>
          </Col>
        </Row>
        <Row className="v_row">
          <Col style={{ maxWidth: 30 + "%" }} className="label_col c_even">
            <label className="v_label">Interior:</label>
          </Col>
          <Col className="val_col c_even">
            <span className="val_prop">{props.intcolor}</span>
          </Col>
        </Row>
        <Row className="v_row">
          <Col style={{ maxWidth: 30 + "%" }} className="label_col c_odd">
            <label className="v_label">Exterior:</label>
          </Col>
          <Col className="val_col c_odd">
            <span className="val_prop">{props.extcolor}</span>
          </Col>
        </Row>
        <Row className="v_row">
          <Col style={{ maxWidth: 30 + "%" }} className="label_col c_even">
            <label className="v_label">List:</label>
          </Col>
          <Col className="val_col c_even">
            <span className="val_prop b4_cut">{props.list}</span>
          </Col>
        </Row>
   
        <Row className="v_row">
          <Col style={{ maxWidth: 30 + "%" }} className="label_col c_odd">
            <label className="v_label">Sale:</label>
          </Col>
          <Col className="val_col c_odd">
            <span className="val_prop">{props.sale}</span>
          </Col>
        </Row>
        <Row className="v_row">
          <Col style={{ maxWidth: 30 + "%" }} className="label_col c_even">
            <label className="v_label">Drive: </label>
          </Col>
          <Col className="val_col c_even">
            <span className="val_prop">{props.drive}</span>
          </Col>
        </Row>
        <Row className="v_row">
          <Col style={{ maxWidth: 30 + "%" }} className="label_col c_odd">
            <label className="v_label">Fuel: </label>
          </Col>
          <Col className="val_col c_odd">
            <span className="val_prop">{props.fuel}</span>
          </Col>
        </Row>
        <Row className="v_row">
          <Col style={{ maxWidth: 30 + "%" }} className="label_col c_even">
            <label className="v_label">Trans: </label>
          </Col>
          <Col className="val_col c_even">
            <span className="val_prop">{props.trans}</span>
          </Col>
        </Row>
        <Row className="v_row">
          <Col style={{ maxWidth: 30 + "%" }} className="label_col c_odd">
            <label className="v_label">Vin: </label>
          </Col>
          <Col className="val_col c_odd">
            <span className="val_prop">{props.vin}</span>
          </Col>
        </Row>
        <Row className="v_row">
          <Col style={{ maxWidth: 30 + "%" }} className="label_col c_even">
            <label className="v_label">Engine: </label>
          </Col>
          <Col className="val_col c_even">
            <span className="val_prop">{props.engine}</span>
          </Col>
        </Row>
        <Row>
          <Col className="hide">
            <span>{props.vId}</span>
            <span>{props.link}</span>
            <span>{props.carfax}</span>
            <span>{props.trim}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href={props.carfax}>
              <img
                className="carfax_img"
                src="https://static.carfax.com/global-header/imgs/logo.svg"
                alt="carfax logo"
                style={{ marginTop: 1 + "em" }}
              ></img>
            </a>
          </Col>
          <Col className="jrs_col">
            <a href={props.link}>
              <Button className="jrs_link">JRS Website</Button>
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
export default Unit;
