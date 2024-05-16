import { defineStore } from 'pinia';
import { Offcanvas } from 'bootstrap';
export const closeProfileWindow = defineStore('modal', {
  state: () => ({
    profileWindow: null,
  }),
  actions: {
    initializeModal(profileWindow) {
      const profileWindowElement = document.getElementById(profileWindow);
      if (profileWindowElement) {
        this.profileWindow = new Offcanvas(profileWindowElement);
      }
    },
    closeProfileWindow() {
      if (this.profileWindow) {
        this.profileWindow.hide();
      }
    },
  },
});