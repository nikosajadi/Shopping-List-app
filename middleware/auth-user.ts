export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth user");

  const my_token = useCookie("token");

  if (!my_token.value) {
    return navigateTo("/login");
  }
});
