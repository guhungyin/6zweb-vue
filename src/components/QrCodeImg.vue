<template>
  <div>
    <img :src="qrcodeUrl" alt="QR Code" :width="width" :height="height" />
  </div>
</template>

<script>
import QRCode from 'qrcode';

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: 100
    },
    height: {
      type: [Number, String],
      default: 100
    },
    margin: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      qrcodeUrl: ''
    };
  },
  mounted() {
    this.generateQRCode();
  },
  methods: {
    async generateQRCode() {
      try {
        const qrcodeUrl = await QRCode.toDataURL(this.text, {
          margin: this.margin
        });
        this.qrcodeUrl = qrcodeUrl;
      } catch (error) {
        console.error('Failed to generate QR code:', error);
      }
    }
  }
};
</script>