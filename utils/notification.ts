export function notifyShow(message: string, messageType = "error"): void {
  const nuxtApp = useNuxtApp();
  const options = {
    type: messageType,
    text: message,
  };

  nuxtApp.vueApp.config.globalProperties.$notify(options);
}
