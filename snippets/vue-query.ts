import { createApp } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { createInertiaQuery } from 'vue-query';

// Initialize Vue app
const app = createApp({});

// Use Inertia.js for routing
createInertiaApp({
    resolve: (name) => require(`./Pages/${name}.vue`).default,
    setup({ el, App, props, plugin }) {
        app.use(plugin);
        return app.mount(el);
    },
});

// Use Vue Query for data fetching
const queryClient = createInertiaQuery(app);

// Mount the query client to the app
app.provide('queryClient', queryClient);

// Start the progress bar
InertiaProgress.init();

// Mount the app to the DOM
app.mount('#app');