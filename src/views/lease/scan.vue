<template>
  <div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import { scanQRCode } from "utils/wx";

export default {
  components: {
  },
  data(){
    return {
    };
  },
  created () {
      this.qRcode()
  },
  methods: {
      qRcode() {
        scanQRCode();
      },
  },
};
</script>