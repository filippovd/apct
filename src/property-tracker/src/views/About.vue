<template>
	<div class="about">
		<h1>This is an about page</h1>

		<l-map
			ref="myMap"
			:zoom="zoom"
			:center="center"
			:options="mapOptions"
			style="height: 800px; width: 1800px;"
		>
			<l-tile-layer :url="url" :attribution="attribution" />
		</l-map>
	</div>
</template>

<style lang="scss">
// @import "~materialize-css";
</style>
<script>
import { latLng } from "leaflet";
import { LMap } from "vue2-leaflet";
export default {
	components: { LMap },
	data() {
		return {
			zoom: 10,
			center: latLng(56.754964, 38.866159),
			url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
			attribution:
				'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
			withPopup: latLng(47.41322, -1.219482),
			withTooltip: latLng(47.41422, -1.250482),
			currentZoom: 45,
			currentCenter: latLng(56.754964, 38.866159),
			showParagraph: false,
			mapOptions: {
				zoomSnap: 0.5
			},
			showMap: true
		};
	},
	mounted() {
		this.$nextTick(() => {
			console.log("MAP OBJECT", this.$refs.myMap.mapObject);
		});
	}
};
</script>
