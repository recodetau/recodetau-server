import router from "@/router";

const Link = (el, binding) => {
    el.addEventListener("click", () => {
        router.push(binding.value);
    });
};

export default Link;
