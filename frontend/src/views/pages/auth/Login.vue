<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";

import { useAuth } from "../../../hooks/use-auth";
import { DEFAULT_TITLE } from "../../../datas/constants/app";

const { login } = useAuth();

const schema = yup.object({
    email: yup.string().email("Должно быть почтой").required("Введите пользователя"),
    password: yup.string().min(6, "Пароль должен содержать в себе минимум 6 символов").required("Введите пароль")
});

const { defineInputBinds, handleSubmit, errors } = useForm({
    validationSchema: schema
});

const email = defineInputBinds("email");
const password = defineInputBinds("password");

const onSubmit = handleSubmit(async ({ email, password }) => {
    await login(email, password);
});
</script>

<template>
    <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">Добро пожаловать в {{ DEFAULT_TITLE }}!</div>
        <span class="text-600 font-medium">Заполните все поля чтобы зайти!</span>
    </div>

    <form @submit="onSubmit">
        <span class="flex flex-column gap-2 mb-4">
            <label for="email" class="block text-900 text-xl font-medium">Почта</label>
            <InputText
                v-bind="email"
                id="email"
                type="text"
                placeholder="Адрес почты"
                class="w-full md:w-30rem"
                style="padding: 1rem"
                aria-describedby="email-help"
            />
            <small id="email-help" class="p-error">
                {{ errors.email }}
            </small>
        </span>

        <span class="flex flex-column gap-2 mb-4">
            <label for="password" class="block text-900 text-xl font-medium">Пароль</label>
            <InputText
                v-bind="password"
                id="password"
                type="text"
                placeholder="Пароль"
                class="w-full md:w-30rem"
                style="padding: 1rem"
                aria-describedby="password-help"
            />
            <small id="password-help" class="p-error">
                {{ errors.password }}
            </small>
        </span>

        <div class="flex align-items-center justify-content-between my-4 gap-5">
            <a
                v-link="{ name: 'login' }"
                class="font-medium no-underline ml-2 text-right cursor-pointer"
                style="color: var(--primary-color)"
            >
                Забыли пароль?
            </a>

            <a
                v-link="{ name: 'register' }"
                class="font-medium no-underline ml-2 text-right cursor-pointer"
                style="color: var(--primary-color)"
            >
                Регистроватся
            </a>
        </div>
        <Button label="Войти" type="submit" class="w-full p-3 text-xl"></Button>
    </form>
</template>

<style scoped></style>
