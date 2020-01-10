import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/login",
		name: "login",
		meta: {
			layout: "empty-layout"
		},
		component: () => import("../views/Login.vue")
	},
	{
		path: "/logout",
		name: "logout",
		meta: {
			layout: "empty-layout"
		},
		component: () => import("../views/Logout.vue")
	},
	{
		path: "/signup",
		name: "signup",
		meta: {
			layout: "empty-layout"
		},
		component: () => import("../views/Signup.vue")
	},
	// required auth
	{
		path: "/",
		name: "home",
		meta: { layout: "base-layout", auth: true },
		component: Home
	},
	{
		path: "/registry",
		name: "registry",
		meta: {
			layout: "base-layout",
			auth: true
		},
		component: () => import("../views/Registry.vue")
	},
	{
		path: "/tracking",
		name: "tracking",
		meta: {
			layout: "base-layout",
			auth: true
		},
		component: () => import("../views/Tracking.vue")
	},
	{
		path: "/profile",
		name: "profile",
		meta: {
			layout: "base-layout",
			auth: true
		},
		component: () => import("../views/Profile.vue")
	},
	{
		path: "/about",
		name: "about",
		meta: {
			layout: "base-layout",
			auth: true
		},
		component: () => import("../views/About.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	const user = firebase.auth().currentUser;

	const requiredAuth = to.matched.some(route => route.meta.auth);

	if (requiredAuth && !user) {
		next("/login")
	} else {
		next();
	}

});

export default router;
