<template>
	<div class="app-main-layout">
		<navbar @menu-toggle="menuOpen = !menuOpen" />

		<sidebar v-model="menuOpen" />

		<main class="app-content" :class="{ full: !menuOpen }">
			<div class="app-page">
				<router-view />
			</div>
		</main>

		<div class="fixed-action-btn">
			<router-link to="/" class="btn-floating btn-large blue">
				<plus />
			</router-link>
		</div>
	</div>
</template>

<script>
import Plus from "vue-material-design-icons/PlusThick.vue";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default {
	components: {
		Plus,
		Navbar,
		Sidebar
	},
	data: () => ({
		menuOpen: true
	})
};
</script>
