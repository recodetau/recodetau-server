import { toRefs, reactive, computed } from "vue";

const layoutConfig = reactive({
    ripple: false,
    darkTheme: false,
    inputStyle: "outlined",
    menuMode: "overlay",
    theme: "lara-light-indigo",
    scale: 14,
    activeMenuItem: null
});

const layoutState = reactive({
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false
});

export function useLayout() {
    const changeThemeSettings = (theme, darkTheme) => {
        layoutConfig.darkTheme = darkTheme;
        layoutConfig.theme = theme;
    };

    const changeTheme = (isDarkTheme) => {
        let mode = isDarkTheme;
        let theme = isDarkTheme ? "lara-dark-indigo" : "lara-light-indigo";

        const elementId = "theme-css";
        const linkElement = document.getElementById(elementId);
        const cloneLinkElement = linkElement.cloneNode(true);
        const newThemeUrl = linkElement.getAttribute("href").replace(layoutConfig.theme, theme);
        cloneLinkElement.setAttribute("id", elementId + "-clone");
        cloneLinkElement.setAttribute("href", newThemeUrl);
        cloneLinkElement.addEventListener("load", () => {
            linkElement.remove();
            cloneLinkElement.setAttribute("id", elementId);
            changeThemeSettings(theme, mode);
        });
        linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
    };

    const setScale = (scale) => {
        layoutConfig.scale = scale;
    };

    const setActiveMenuItem = (item) => {
        layoutConfig.activeMenuItem = item.value || item;
    };

    const onMenuToggle = () => {
        if (layoutConfig.menuMode === "overlay") {
            layoutState.overlayMenuActive = !layoutState.overlayMenuActive;
        }

        if (window.innerWidth > 991) {
            layoutState.staticMenuDesktopInactive = !layoutState.staticMenuDesktopInactive;
        } else {
            layoutState.staticMenuMobileActive = !layoutState.staticMenuMobileActive;
        }
    };

    const isSidebarActive = computed(() => layoutState.overlayMenuActive || layoutState.staticMenuMobileActive);

    const isDarkTheme = computed(() => layoutConfig.darkTheme);

    return {
        layoutConfig: toRefs(layoutConfig),
        layoutState: toRefs(layoutState),
        changeTheme,
        changeThemeSettings,
        setScale,
        onMenuToggle,
        isSidebarActive,
        isDarkTheme,
        setActiveMenuItem
    };
}
