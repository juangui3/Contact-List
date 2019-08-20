const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			editContact: (id, name, email, address, phone) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "new_contact_agenda",
						address: address,
						phone: phone
					})
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/new_contact_agenda")
						.then(response => response.json())
						.then(data => {
							setStore({ contacts: data });
						});
				});
			},
			addContact: (name, email, address, phone) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "new_contact_agenda",
						address: address,
						phone: phone
					})
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/new_contact_agenda")
						.then(response => response.json())
						.then(data => {
							setStore({ contacts: data });
						});
				});
			},
			updateContact: () => {},
			deleteContact: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/new_contact_agenda")
						.then(response => response.json())
						.then(data => {
							setStore({ contacts: data });
						});
				});
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
