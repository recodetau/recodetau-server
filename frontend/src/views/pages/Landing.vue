<script setup>
import { useLayout } from "@/layout/composables/layout";
import { computed } from "vue";
import FeatureItem from "@/components/Landing/FeatureItem.vue";

const { layoutConfig } = useLayout();

const smoothScroll = (id) => {
    document.querySelector(id).scrollIntoView({
        behavior: "smooth"
    });
};

const logoUrl = computed(() => {
    return `layout/images/${layoutConfig.darkTheme.value ? "logo-white" : "logo-dark"}.svg`;
});
</script>

<template>
    <div class="surface-0 flex justify-content-center">
        <div id="home" class="landing-wrapper overflow-hidden">
            <div
                class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static mb-3"
            >
                <a class="flex align-items-center" href="#">
                    <img :src="logoUrl" alt="Sakai Logo" height="50" class="mr-0 lg:mr-2" /><span
                        class="text-900 font-medium text-2xl line-height-3 mr-8"
                        >SAKAI</span
                    >
                </a>
                <a
                    class="cursor-pointer block lg:hidden text-700 p-ripple"
                    v-ripple
                    v-styleclass="{
                        selector: '@next',
                        enterClass: 'hidden',
                        leaveToClass: 'hidden',
                        hideOnOutsideClick: true
                    }"
                >
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <div
                    class="align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2"
                    style="top: 120px"
                >
                    <ul
                        class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer"
                    >
                        <li>
                            <a
                                @click="smoothScroll('#hero')"
                                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple"
                                v-ripple
                            >
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a
                                @click="smoothScroll('#features')"
                                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple"
                                v-ripple
                            >
                                <span>Features</span>
                            </a>
                        </li>
                        <li>
                            <a
                                @click="smoothScroll('#highlights')"
                                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple"
                                v-ripple
                            >
                                <span>Highlights</span>
                            </a>
                        </li>
                        <li>
                            <a
                                @click="smoothScroll('#pricing')"
                                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple"
                                v-ripple
                            >
                                <span>Pricing</span>
                            </a>
                        </li>
                    </ul>
                    <div
                        class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0"
                    >
                        <Button
                            v-link="{ name: 'login' }"
                            label="Войти"
                            class="p-button-text p-button-rounded border-none font-light line-height-2 text-blue-500"
                        ></Button>
                        <Button
                            v-link="{ name: 'register' }"
                            label="Создать аккаунт"
                            class="p-button-rounded border-none ml-5 font-light text-white line-height-2 bg-blue-500"
                        ></Button>
                    </div>
                </div>
            </div>

            <div
                id="hero"
                class="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
                style="
                    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
                        radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%);
                    clip-path: ellipse(150% 87% at 93% 13%);
                "
            >
                <div class="mx-4 md:mx-8 mt-0 md:mt-4">
                    <h1 class="text-6xl font-bold text-gray-900 line-height-2">
                        <span class="font-light block">HardCode</span>Школа программирования
                    </h1>

                    <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">
                        Добро пожаловать на HardCode - ваш идеальный партнер в мире программирования! Наш сайт
                        предоставляет обширный набор ресурсов и уроков для всех, кто желает освоить искусство
                        кодирования. Независимо от вашего уровня подготовки, у нас есть что-то для каждого. Начинающие
                        могут начать с основных концепций, а опытные разработчики найдут здесь интересные вызовы и
                        проекты для расширения своих навыков. Присоединяйтесь к HardCode и становитесь мастером
                        программирования!
                    </p>

                    <Button
                        v-link="{ name: 'profile' }"
                        label="Погрузиться в мир кодирование с нами"
                        class="p-button-rounded text-xl border-none mt-5 bg-blue-500 font-normal text-white line-height-3 px-5"
                        size="large"
                    ></Button>
                </div>

                <div class="flex justify-content-center md:justify-content-end">
                    <img src="/demo/images/landing/screen-1.png" alt="Hero Image" class="w-9 md:w-auto" />
                </div>
            </div>

            <div id="features" class="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
                <div class="grid justify-content-center">
                    <div class="col-12 text-center mt-8 mb-4">
                        <h2 class="text-900 font-normal mb-2">Marvelous Features</h2>
                        <span class="text-600 text-2xl">Placerat in egestas erat...</span>
                    </div>

                    <FeatureItem
                        title="Быстрое обучение"
                        description="Мастерство программирования за мгновение"
                        icon="pi-users"
                    />
                    <FeatureItem
                        title="Погружение в код"
                        description="Взлетайте в мире программирования"
                        icon="pi-palette"
                    />
                    <FeatureItem
                        title="Для всех уровней"
                        description="Осваивайте языки без проблем"
                        icon="pi-id-card"
                    />
                    <FeatureItem
                        title="Создайте свой сайт"
                        description="Интерактивный урок веб-разработки"
                        icon="pi-map"
                    />
                    <FeatureItem
                        title="Опытные инструктора"
                        description="Эксперты помогают достичь успеха"
                        icon="pi-moon"
                    />
                    <FeatureItem
                        title="Развивайтесь с нами"
                        description="Ждем вас на HardCode!"
                        icon="pi-shopping-cart"
                    />

                    <div
                        class="col-12 mt-8 mb-8 p-2 md:p-8"
                        style="
                            border-radius: 20px;
                            background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
                                radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%);
                        "
                    >
                        <div
                            class="flex flex-column justify-content-center align-items-center text-center px-3 py-3 md:py-0"
                        >
                            <h3 class="text-gray-900 mb-2">Joséphine Miller</h3>
                            <span class="text-gray-600 text-2xl">Peak Interactive</span>
                            <p
                                class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-4"
                                style="max-width: 800px"
                            >
                                “HardCode - это не просто сайт, это целое сообщество энтузиастов программирования.
                                Присоединяйтесь к нашим дискуссионным форумам, обменивайтесь опытом, задавайте вопросы и
                                находите новых друзей, разделяющих ваш интерес к кодированию. Наше дружелюбное и
                                поддерживающее сообщество всегда радо новым участникам. Вместе мы создаем будущее
                                цифровой эпохи!”
                            </p>
                            <img src="/demo/images/landing/peak-logo.svg" class="mt-4" alt="Company logo" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="highlights" class="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
                <div class="text-center">
                    <h2 class="text-900 font-normal mb-2">Powerful Everywhere</h2>
                    <span class="text-600 text-2xl">Amet consectetur adipiscing elit...</span>
                </div>

                <div class="grid mt-8 pb-2 md:pb-8">
                    <div
                        class="flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0"
                        style="border-radius: 8px"
                    >
                        <img src="/demo/images/landing/mockup.svg" class="w-11" alt="mockup mobile" />
                    </div>

                    <div class="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right">
                        <div
                            class="flex align-items-center justify-content-center bg-purple-200 align-self-center lg:align-self-end"
                            style="width: 4.2rem; height: 4.2rem; border-radius: 10px"
                        >
                            <i class="pi pi-fw pi-mobile text-5xl text-purple-700"></i>
                        </div>
                        <h2 class="line-height-1 text-900 text-4xl font-normal">Congue Quisque Egestas</h2>
                        <span class="text-700 text-2xl line-height-3 ml-0 md:ml-2" style="max-width: 650px">
                            Выберите свой путь к успеху в мире программирования с нашими увлекательными курсами! У нас
                            вы найдете подробные материалы по различным языкам программирования: Python, Java,
                            JavaScript, C++, и многим другим. Наши опытные инструкторы помогут вам преодолеть любые
                            сложности и гарантированно подготовят к уверенному старту в карьере разработчика.
                            Присоединяйтесь к HardCode и сделайте свой первый шаг в захватывающий мир кода!
                        </span>
                    </div>
                </div>

                <div class="grid my-8 pt-2 md:pt-8">
                    <div class="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
                        <div
                            class="flex align-items-center justify-content-center bg-yellow-200 align-self-center lg:align-self-start"
                            style="width: 4.2rem; height: 4.2rem; border-radius: 10px"
                        >
                            <i class="pi pi-fw pi-desktop text-5xl text-yellow-700"></i>
                        </div>

                        <h2 class="line-height-1 text-900 text-4xl font-normal">Celerisque Eu Ultrices</h2>

                        <span class="text-700 text-2xl line-height-3 mr-0 md:mr-2" style="max-width: 650px">
                            Научитесь программировать на практике! У HardCode мы верим в активное обучение, и поэтому
                            предоставляем вам возможность работать над увлекательными проектами. Здесь вы сможете
                            создавать приложения, разрабатывать веб-сайты, анализировать данные и многое другое. Наши
                            проекты разнообразны и охватывают различные области программирования, что поможет вам найти
                            свое призвание и раскрыть свой творческий потенциал.
                        </span>
                    </div>

                    <div
                        class="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-yellow-100 p-0"
                        style="border-radius: 8px"
                    >
                        <img src="/demo/images/landing/mockup-desktop.svg" class="w-11" alt="mockup" />
                    </div>
                </div>
            </div>

            <div class="py-4 px-4 mx-0 mt-8 lg:mx-8">
                <div class="grid justify-content-between">
                    <div class="col-12 md:col-2" style="margin-top: -1.5rem">
                        <a
                            @click="smoothScroll('#home')"
                            class="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer"
                        >
                            <img :src="logoUrl" alt="footer sections" width="50" height="50" class="mr-2" />
                            <h4 class="font-medium text-3xl text-900">SAKAI</h4>
                        </a>
                    </div>

                    <div class="col-12 md:col-10 lg:col-7">
                        <div class="grid text-center md:text-left">
                            <div class="col-12 md:col-3">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Company</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">About Us</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">News</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                                    >Investor Relations</a
                                >
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Careers</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">Media Kit</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Resources</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Get Started</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Learn</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">Case Studies</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Community</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Discord</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                                    >Events<img src="/demo/images/landing/new-badge.svg" class="ml-2"
                                /></a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">FAQ</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">Blog</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Legal</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Brand Policy</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Privacy Policy</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
