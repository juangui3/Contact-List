const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			editContact: (id, name, email, address, phone) => {
				fetch("https://3000-c5f02dd8-79d7-4d40-8496-428d21d10ba6.ws-us1.gitpod.io/person/" + id, {
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
					fetch("https://3000-c5f02dd8-79d7-4d40-8496-428d21d10ba6.ws-us1.gitpod.io/contacts")
						.then(response => response.json())
						.then(data => {
							setStore({ contacts: data });
						});
				});
			},
			addContact: (name, email, address, phone) => {
				fetch("https://3000-c5f02dd8-79d7-4d40-8496-428d21d10ba6.ws-us1.gitpod.io/person", {
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
					fetch("https://3000-c5f02dd8-79d7-4d40-8496-428d21d10ba6.ws-us1.gitpod.io/contacts")
						.then(response => response.json())
						.then(data => {
							setStore({ contacts: data });
						});
				});
			},

			deleteContact: id => {
				fetch("https://3000-c5f02dd8-79d7-4d40-8496-428d21d10ba6.ws-us1.gitpod.io/person/" + id, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				}).then(() => {
					fetch("https://3000-c5f02dd8-79d7-4d40-8496-428d21d10ba6.ws-us1.gitpod.io/contacts")
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
