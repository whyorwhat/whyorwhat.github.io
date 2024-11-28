import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import ContactsView from "@/views/ContactsView.vue";
import CustomerRadarView from "@/views/CustomerRadarView.vue";
import TiSeguoView from "@/views/TiSeguoView.vue";

const routes = [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/projects',
        component: ProjectsView,
    },
    {
        path: "/contacts",
        component: ContactsView,
    },
    {
        path: "/ti-seguo",
        component: TiSeguoView,
    },
    {
        path: "/customer-radar",
        component: CustomerRadarView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;