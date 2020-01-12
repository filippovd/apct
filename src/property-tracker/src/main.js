import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import messagePlugin from "@/plugins/toast";
import dateFilter from "@/filters/date.filter";
import i18n from "./i18n";

import { Icon } from "leaflet";
import { LMap, LTileLayer, LMarker} from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyDV1lFMy3AFPSFnClCMXP9JwkQbqcD7suc",
	authDomain: "property-tracker-548c9.firebaseapp.com",
	databaseURL: "https://property-tracker-548c9.firebaseio.com",
	projectId: "property-tracker-548c9",
	storageBucket: "property-tracker-548c9.appspot.com",
	messagingSenderId: "502992864545",
	appId: "1:502992864545:web:649d1d67d49410018a6a60"
};

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(messagePlugin);
Vue.use(Vuelidate);

Vue.filter("date", dateFilter);

let app;

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			i18n,
			router,
			store,
			render: h => h(App)
		}).$mount("#app");
	}
});

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

document.title = i18n.t("appTitle");
