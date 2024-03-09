export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth user");

  const my_token = useCookie("token");
//if my_token.value is  emty go to login page
console.log(my_token.value);
  if (!my_token.value) {
    return navigateTo("/login");
  }
});
