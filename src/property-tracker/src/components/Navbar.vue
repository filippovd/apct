<template>
	<nav class="navbar blue darken-4">
		<div class="nav-wrapper">
			<router-link to="/" class="brand-logo">
				<menu-icon @click="$emit('menu-toggle')" />
				Реестр собственности
			</router-link>
			<span class="yellow-text date-informer">{{
				currentDate | date("datetime")
			}}</span>
			<!-- Switch -->
			<div class="switch">
				<label>
					Off
					<input type="checkbox" />
					<span class="lever"></span>
					On
				</label>
			</div>
			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<user-menu />
			</ul>
		</div>
	</nav>
	<!-- <nav class="navbar orange lighten-1">
		<div class="nav-wrapper">
			<div class="navbar-left">
				<a href="#">
					<menu-icon :size="128" />
				</a>
				<span class="black-text">12.12.12</span>
			</div>

			<ul class="right hide-on-med-and-down">
				<li>
					<a
						class="dropdown-trigger black-text"
						href="#"
						data-target="dropdown"
					>
						USER NAME
						<i class="material-icons right">arrow_drop_down</i>
					</a>

					<ul id="dropdown" class="dropdown-content">
						<li>
							<a href="#" class="black-text">
								<i class="material-icons">account_circle</i
								>Профиль
							</a>
						</li>
						<li class="divider" tabindex="-1"></li>
						<li>
							<a href="#" class="black-text">
								<i class="material-icons">assignment_return</i
								>Выйти
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</nav> -->
</template>

<script>
import UserMenu from "@/components/UserMenu";
import MenuIcon from "vue-material-design-icons/Menu.vue";
//import M from "materialize-css/dist/js/materialize";

export default {
	components: {
		UserMenu,
		MenuIcon
	},
	data: () => ({
		currentDate: new Date(),
		updateDateInterval: null
	}),
	mounted() {
		// M.Dropdown.init(this.$refs.userMenu, {
		// 	constrainWidth: true
		// });
		const self = this;
		this.updateDateInterval = setInterval(() => {
			//console.log("interval", self.currentDate);
			self.currentDate = new Date();
		}, 1000);
	},
	beforeDestroy() {
		if (this.updateDateInterval) {
			clearInterval(this.updateDateInterval);
			this.updateDateInterval = null;
		}
	}
};
</script>
<style scoped>
.brand-logo {
	position: relative !important;
}

.date-informer {
	padding: 0 1em;
	font-size: 2rem;
}

.switch {
	display: inline;
}
</style>
