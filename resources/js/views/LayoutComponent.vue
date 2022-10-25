<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="logo"/>
            <a-menu
                v-model:selectedKeys="selectedKeys"
                theme="dark"
                mode="inline"
                @select="pushRoute"
            >
                <template v-for="menuItem in menuItems" :key="menuItem.id">
                    <a-sub-menu
                        v-if="!!menuItem.children"
                        :key="menuItem.id"
                    >
                        <template #icon>
                            <icon :iconName="menuItem.iconName"/>
                        </template>
                        <template #title>{{ menuItem.label }}</template>
                        <a-menu-item
                            v-for="item in menuItem.children"
                            :key="item.id"
                        >
                            {{ item.label }}
                        </a-menu-item>
                    </a-sub-menu>
                    <a-menu-item v-else :key="menuItem.id">
                        <template #icon>
                            <icon :iconName="menuItem.iconName"/>
                        </template>
                        <span>{{ menuItem.label }}</span>
                    </a-menu-item>
                </template>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <slot />
        </a-layout>
    </a-layout>
</template>
<script>
import Icon from '@/components/Icon.vue';
import {mapGetters} from 'vuex';
import {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
} from '@ant-design/icons-vue';

export default {
    components: {
        Icon,
        PieChartOutlined,
        DesktopOutlined,
        UserOutlined,
        TeamOutlined,
        FileOutlined,
    },
    computed: {
        path() {
            return this.$route.path;
        },
        ...mapGetters(['menuItems'])
    },
    data: () => ({
        collapsed: true,
        selectedKeys: [],
    }),
    watch: {
        path() {
            const item = this.menuItems.find((item) => item.path === this.path);
            this.selectedKeys = item ? [item.id] : [];
        }
    },
    mounted() {
        // console.log(window.location.pathName)
        // console.log('mounted', this.$route);
    },
    methods: {
        pushRoute({key}) {
            const item = this.menuItems.find((item) => item.id === key);
            item?.path && this.$router.push({name: item.name});
        }
    }
};
</script>
<style>
#components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}
</style>
