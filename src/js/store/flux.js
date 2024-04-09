const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// Your data structures, A.K.A Entities
			contactData: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			getAgendaData: function() {
				fetch("https://playground.4geeks.com/contact/")
					.then(resp => {
						console.log(resp);
						console.log(resp.status);
						return resp.json();
					})
					.then(data => {
						// console.log(data);
						setStore({ contactData: data });
					})
					.catch(error => console.log(error));
			},
			createContact: function(fullName, email, address, phone) {
				fetch("https://playground.4geeks.com/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: fullName,
						email: email,
						address: address,
						phone: phone
					})
				})
					.then(resp => {
						console.log(resp);
						console.log(resp.status);
						return resp.json();
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error));
			},
			deleteData: function() {
				const response = fetch("https://playground.4geeks.com/contact/", {
					method: "DELETE"
				});
				if (response.ok) {
					const data = response.json();
					return data;
				} else {
					console.log("error: ", response.status, response.statusText);
					/* Handle the error returned by the HTTP request */
					return { error: { status: response.status, statusText: response.statusText } };
				}
			}
		}
	};
};

export default getState;
