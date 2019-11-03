import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Row.css";
class Row extends Component {
	state = {
		Id : this.props.Id,
		firstName : this.props.firstName,
		lastName : this.props.lastName,
		mailAddress : this.props.mailAddress,
		dep : this.props.dep,
		grade : this.props.grade
	};
	render() {
		document.title = "Admin dashboard | Members";
		document.getElementsByTagName("META")[2].name = "viewport";
		document.getElementsByTagName("META")[2].content =
			"width=device-width, initial-scale=1";
		return (
			<div className="Row">
				<div className="container">
					<div className="row">
						<div className="col-md-2 FirstName"><p className="firstName">{ this.state.firstName }</p></div>
						<div className="col-md-2 LastName"><p className="lastName">{ this.state.lastName }</p></div>
						<div className="col-md-3 MAIL"><p className="mail">{ this.state.mailAddress }</p></div>
						<div className="col-md-1 Dep"><p className="dep">{ this.state.dep }</p></div>
						<div className="col-md-2"><p className="state">{ this.state.grade }</p></div>
						<div className="col-md-2"><button type="button" onClick={ () => this.props.onDelete(this.props.Id) } className="remove btn btn-danger">Remove</button></div>
					</div>
				</div>
			</div>
		);
	}

}

export default Row;