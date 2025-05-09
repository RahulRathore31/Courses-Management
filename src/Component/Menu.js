import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
const Menu=()=> {
    return(
        <ListGroup>

 <Link className="list-group-item list-group-item-action" tag="a" to="/add-courses" action>Add Courses</Link>
 <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>View Courses</Link>
 <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
 <Link className="list-group-item list-group-item-action" tag="a" to="/about" action>About</Link>
 <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>Contact</Link>

        </ListGroup>
    )
};
export default Menu;