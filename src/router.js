import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import ContactsView from "@/views/ContactsView.vue";
import CustomerRadarView from "@/views/CustomerRadarView.vue";
import TiSeguoView from "@/views/TiSeguoView.vue";
import AboutMeView from "@/views/AboutMeView.vue";

const routes = [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/me',
        name: 'AboutMe',
        component: AboutMeView,
    },
    {
        path: '/projects',
        name: 'Projects',
        component: ProjectsView,
    },
    {
        path: "/contacts",
        name: 'Contacts',
        component: ContactsView,
    },
    {
        path: "/ti-seguo",
        name: 'TiSeguoView',
        component: TiSeguoView,
    },
    {
        path: "/customer-radar",
        name: 'CustomerRadarView',
        component: CustomerRadarView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;