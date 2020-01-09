const i18n_en = {
	appTitle: "Property Registry",
	profile: "Profile",
	errors: { 
		auth: {
			"email-already-in-use": "The email address is already in use by another account.",
			"wrong-password": "Wrong password was specified",
			"user-not-found": "User was not found"
		}
	},
	sidebar: {
		links: {
			home: "Home",
			registry: "Registry",
			tracking: "Tracking",
			about: "About"
		}
	},
	usermenu: {
		links: {
			profile: "Profile",
			logout: "Logout"
		}
	},
	pages: {
		home: {
			title: "Home"
		},
		login: {
			title: "Log in",
			fields: {
				email: {
					label: "Email",
					placeholder: "Enter email address",
					required: "Email is required",
					invalid: "Email is invalid"
				},
				password: {
					label: "Password",
					placeholder: "Enter a password",
					required: "Password is required",
					minlength:
						"The length of password must be at least 6 characters"
				}
			},
			buttons: {
				login: "Log in"
			},
			links: {
				signup: "Sign up"
			},
			text: {
				noAccount: "No account?"
			}
		},
		signup: {
			title: "Sign up",
			fields: {
				email: {
					label: "Email",
					placeholder: "Enter email address",
					required: "Email is required",
					invalid: "Email is invalid"
				},
				password: {
					label: "Password",
					placeholder: "Enter a password",
					required: "Password is required",
					minlength:
						"The length of password must be at least 6 characters"
				},
				name: {
					label: "Name",
					placeholder: "Enter name",
					required: "Name is required"
				}
			},
			buttons: {
				signup: "Sign Up"
			},
			links: {
				login: "Log In"
			},
			text: {
				hasAccount: "I already have account?"
			}
		},
		logout: {
			messages: {
				loggedOut: "You have been logged out."
			}

		},
		title: "Home"
	}
};

export default i18n_en;
