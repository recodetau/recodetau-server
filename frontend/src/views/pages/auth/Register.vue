<script></script>

<template>
    <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">Registration</div>
        <span class="text-600 font-medium">Sign in to continue</span>
    </div>

    <div>
        <label for="email1" class="block text-900 text-xl font-medium mb-2">Email</label>
        <InputText
            id="email1"
            type="text"
            placeholder="Email address"
            class="w-full md:w-30rem mb-5"
            style="padding: 1rem"
            v-model="email"
        />

        <label for="password1" class="block text-900 font-medium text-xl mb-2">Password</label>
        <Password
            id="password1"
            v-model="password"
            placeholder="Password"
            :toggleMask="true"
            class="w-full mb-3"
            inputClass="w-full"
            inputStyle="padding:1rem"
        ></Password>

        <div class="flex align-items-center justify-content-between mb-5 gap-5">
            <div class="flex align-items-center">
                <Checkbox v-model="checked" id="rememberme1" binary class="mr-2"></Checkbox>
                <label for="rememberme1">Remember me</label>
            </div>
            <a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)"
                >Forgot password?</a
            >
        </div>
        <Button label="Sign In" class="w-full p-3 text-xl"></Button>
    </div>
</template>

<style></style>
