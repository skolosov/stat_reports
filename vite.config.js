import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/dist/vite.js';
import { AntDesignVueResolver } from 'unplugin-vue-components/dist/resolvers.js';
import svgLoader from 'vite-svg-loader'


export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        svgLoader(),
        Components({
            resolvers: [AntDesignVueResolver()],
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            '@': '/resources/js',
            '@images': '/resources/images',
            '@components': '/resources/js/components',
            '@pages': '/resources/js/views/pages',
            '@views': '/resources/js/views',
        },
    },
});
