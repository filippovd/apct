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
		path: "/login",
		name: "login",
		meta: { layout: "empty-layout" },
		component: Home
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
