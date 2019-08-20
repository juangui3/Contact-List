import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default class EditContact extends React.Component {
	constructor() {
		super();
		this.state = {
			full_name: "",
			email: "",
			address: "",
			phone: ""
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div>
								<h1 className="text-center mt-5">Edit a contact</h1>
								<form>
									<div className="form-group">
										<label>Full Name</label>
										<input
                                            defaultValue={}
											type="text"
											className="form-control"
											placeholder="Full Name"
										/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input

											type="email"
											className="form-control"
											placeholder="Enter email"
										/>
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input

											type="phone"
											className="form-control"
											placeholder="Enter phone"
										/>
									</div>
									<div className="form-group">
										<label>Address</label>
										<input

											type="text"
											className="form-control"
											placeholder="Enter address"
										/>
									</div>
									<button
										onClick={() =>
											actions.editContact(
												this.state.full_name,
												this.state.email,
												this.state.address,
												this.state.phone
											)
										}
										type="button"
										className="btn btn-primary form-control">
										save
									</button>
									<Link className="mt-3 w-100 text-center" to="/">
										or get back to contacts
									</Link>
								</form>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
