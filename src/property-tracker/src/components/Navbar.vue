<template>
	<nav class="navbar orange lighten-1">
		<div class="nav-wrapper">
			<router-link to="/" class="brand-logo">
				<menu-icon />
				Property Tracker
			</router-link>
			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<li><router-link to="/">Home</router-link></li>
				<li>
					<router-link to="/about">About</router-link>
				</li>
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
import MenuIcon from "vue-material-design-icons/Menu.vue";

export default {
	components: {
		MenuIcon
	}
};
</script>
