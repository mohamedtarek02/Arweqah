import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: useStorage("auth", {}),
  }),

  getters: {
    isAuthenticated: (state) => !!state.user?.Token,
    firstUserLetters: (state) => {
      if (!state.user || !state.user.FullName) return "";
      return state.user.FullName.split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    },
  },

  actions: {
    updateUser(currentUser) {
      this.user = currentUser;
    },
  },
});
