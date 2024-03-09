export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth login");
  const my_token = useCookie("token");
  console.log(my_token.value);
  if (my_token.value) {
    return navigateTo("/home");
  }
});
