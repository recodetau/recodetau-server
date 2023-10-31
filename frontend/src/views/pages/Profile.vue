<script setup>
import { onMounted, reactive } from "vue";

import UserService from "../../service/UserService";

const userService = new UserService();

let user = reactive({
    id: 0,
    last_name: "Dermo"
});

onMounted(async () => {
    let userd = await userService.getCurrentUser();
    user.last_name = userd.last_name;
    console.log(user);
});
</script>

<template>
    <div class="card surface-section">
        <div class="font-medium text-3xl text-900 mb-3">Профиль пользователя Шерхан</div>

        <div class="text-500 mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>

        <ul class="list-none p-0 m-0">
            <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Title</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{ user.last_name }}</div>
                <div class="w-6 md:w-2 flex justify-content-end">
                    <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
                </div>
            </li>

            <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Genre</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                    <Chip label="Crime" class="mr-2"></Chip>
                    <Chip label="Drama" class="mr-2"></Chip>
                    <Chip label="Thriller"></Chip>
                </div>
                <div class="w-6 md:w-2 flex justify-content-end">
                    <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
                </div>
            </li>

            <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Director</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Michael Mann</div>
                <div class="w-6 md:w-2 flex justify-content-end">
                    <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
                </div>
            </li>

            <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Actors</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
                <div class="w-6 md:w-2 flex justify-content-end">
                    <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
                </div>
            </li>

            <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Plot</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                    A group of professional bank robbers start to feel the heat from police when they unknowingly leave
                    a clue at their latest heist.
                </div>
                <div class="w-6 md:w-2 flex justify-content-end">
                    <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
                </div>
            </li>
        </ul>
    </div>
</template>
