import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		meta: { layout: "base-layout" },
		component: Home
	},
	{
		path: "/registry",
		name: "registry",
		meta: { layout: "base-layout" },
		component: () => import("../views/Registry.vue")
	},
	{
		path: "/tracking",
		name: "tracking",
		meta: { layout: "base-layout" },
		component: () => import("../views/Tracking.vue")
	},
	{
		path: "/login",
		name: "login",
		meta: { layout: "empty-layout" },
		component: () => import("../views/Login.vue")
	},
	{
		path: "/signup",
		name: "signup",
		meta: { layout: "empty-layout" },
		component: () => import("../views/Signup.vue")
	},
	{
		path: "/logout",
		name: "logout",
		meta: { layout: "empty-layout" },
		component: () => import("../views/Logout.vue")
	},
	{
		path: "/profile",
		name: "profile",
		meta: { layout: "base-layout" },
		component: () => import("../views/Profile.vue")
	},
	{
		path: "/about",
		name: "about",
		meta: { layout: "base-layout" },
		component: () => import("../views/About.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
