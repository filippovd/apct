<template>
	<ul class="sidenav app-sidenav" :class="{ open: value }">
		<router-link
			v-for="link of links"
			:key="link.url"
			tag="li"
			active-class="active"
			:to="link.url"
			:exact="link.exact"
		>
			<a href="#" class="waves-effect waves-orange pointer">{{
				$t(link.title)
			}}</a>
		</router-link>
	</ul>
</template>

<script>
// import MenuIcon from "vue-material-design-icons/Menu.vue";
// import MenuDown from "vue-material-design-icons/MenuDown.vue";
export default {
	props: ["value"],
	components: {
		// MenuIcon,
		// MenuDown
	},
	data: function() {
		return {
			links: [
				{
					title: "sidebar.links.home",
					url: "/",
					exact: true
				},
				{
					title: "sidebar.links.registry",
					url: "/registry",
					exact: true
				},
				{
					title: "sidebar.links.tracking",
					url: "/tracking",
					exact: true
				},
				{
					title: "sidebar.links.about",
					url: "/about"
				}
			]
		};
	}
};
</script>
