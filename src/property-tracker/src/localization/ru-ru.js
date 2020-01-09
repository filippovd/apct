const i18n = {
	appTitle: "Реестр собственности",
	profile: "Профиль",
	sidebar: {
		links: {
			home: "Главная",
			registry: "Реестр",
			tracking: "Отслеживание",
			about: "О программе"
		}
	},
	usermenu: {
		links: {
			profile: "Профиль",
			logout: "Выйти"
		}
	},
	pages: {
		home: {
			title: "Главная"
		},
		login: {
			title: "Авторизация",
			fields: {
				email: {
					label: "Электронный адрес",
					placeholder: "Введите электронный адрес",
					required: "Электронный адрес обязателен",
					invalid: "Электронный адрес неверен"
				},
				password: {
					label: "Пароль",
					placeholder: "Введите пароль",
					required: "Пароль обязательный",
					minlength: "Длина пароля должна быть не менее 6 символов"
				}
			},
			buttons: {
				login: "Войти"
			},
			links: {
				signup: "Зарегистрироваться"
			},
			text: {
				noAccount: "Нет аккаунта?"
			}
		},
		signup: {
			title: "Регистрация",
			fields: {
				email: {
					label: "Электронный адрес",
					placeholder: "Введите электронный адрес",
					required: "Электронный адрес обязателен",
					invalid: "Электронный адрес неверен"
				},
				password: {
					label: "Пароль",
					placeholder: "Введите пароль",
					required: "Пароль обязательный",
					minlength: "Длина пароля должна быть не менее 6 символов"
				},
				name: {
					label: "Имя",
					placeholder: "Enter name",
					required: "Имя обязательно"
				}
			},
			buttons: {
				signup: "Зарегистрироваться"
			},
			links: {
				login: "Войти"
			},
			text: {
				hasAccount: "Уже зарегистрированы?"
			}
		},
		logout: {
			messages: {
				loggedOut: "Вы вышли из приложения."
			}

		},
		title: "Home"
	}
};

export default i18n;
