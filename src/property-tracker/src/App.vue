<template>
	<div id="app">
		<component :is="layout"> <router-view /> </component>
	</div>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout";
import BaseLayout from "@/layouts/BaseLayout";
export default {
	components: {
		EmptyLayout,
		BaseLayout
	},
	computed: {
		layout() {
			console.log(this.$route.meta);
			return this.$route.meta.layout || "empty-layout";
		}
	}
};
</script>
<style lang="scss">
@import "~materialize-css";
@import "~vue-material-design-icons/styles.css";
@import "./assets/index.css";
</style>
