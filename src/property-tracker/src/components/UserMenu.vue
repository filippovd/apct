<template>
	<li>
		<a
			class="dropdown-trigger yellow-text"
			href="#"
			data-target="userMenuDropDown"
			ref="userMenu"
		>
			{{ userName }}
			<menu-down />
		</a>

		<ul id="userMenuDropDown" class="dropdown-content">
			<template v-for="link in links">
				<router-link
					:key="link.url"
					tag="li"
					active-class="active"
					:to="link.url"
					:exact="link.exact"
				>
					<a href="#" class="black-text">
						<component :is="link.icon" />
						{{ $t(link.title) }}
					</a>
				</router-link>
				<li
					class="divider"
					tabindex="-1"
					:key="'divider_'+link.url"
					v-if="link.divider"
				></li>
			</template>
		</ul>
	</li>
</template>

<script>
import M from "materialize-css/dist/js/materialize";
import MenuDown from "vue-material-design-icons/MenuDown.vue";
import ExitIcon from "vue-material-design-icons/ExitToApp.vue";
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";

export default {
	props: ["value"],
	components: { MenuDown, ExitIcon, AccountCircle },
	data: function() {
		return {
			userName: "Филиппов Д.В.",
			links: [
				{
					title: "usermenu.links.profile",
					url: "/profile",
					exact: true,
					icon: "account-circle",
					divider: true
				},
				{
					title: "usermenu.links.logout",
					url: "/logout",
					exact: true,
					icon: "exit-icon"
				}
			],
			dropdownMenu: null
		};
	},
	methods: {
		logout() {
			console.log("logout");
			this.$router.push("/logout");
		}
	},
	mounted() {
		console.log();
		this.dropdownMenu = M.Dropdown.init(this.$refs.userMenu, {
			constrainWidth: true
		});
	},
	beforeDestroy() {
		if (this.dropdownMenu && this.dropdownMenu.destroy) {
			this.dropdownMenu.destroy();
		}
	}
};
</script>
