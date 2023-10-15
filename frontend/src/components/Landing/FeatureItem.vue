<script setup>
import { defineProps } from "vue";

const props = defineProps({
    icon: String,
    title: String,
    description: String
});
</script>

<template>
    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
        <div
            style="
                height: 160px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)),
                    linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2));
            "
        >
            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                    class="flex align-items-center justify-content-center bg-yellow-200 mb-3"
                    style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                    <i class="pi pi-fw text-2xl text-yellow-700" :class="props.icon"></i>
                </div>
                <h5 class="mb-2 text-900">{{ props.title }}</h5>
                <span class="text-600">{{ props.description }}</span>
            </div>
        </div>
    </div>
</template>
