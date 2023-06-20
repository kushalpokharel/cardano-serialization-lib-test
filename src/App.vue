<script setup lang="ts">
import { onMounted } from 'vue';
import { Transaction } from '@emurgo/cardano-serialization-lib-asmjs';
import {Buffer} from 'buffer';
const tx = '84A4008182582019D1D309043B62F6529CBCABA20DC8E27FD0262ACD5CDD985CA4ABF10173F27800018282583900F735CDAA2AE360CE67E27CD2F6038A44C77BF3EDE94BD144674D34E6A853148CD14FE43769BC58FD748244E7F7AF99531306750D3D460D881A001E848082583900A8BC76574AF70DD8784A78B753A342B2A57BD302578F6FB827AACAEDDFD3E5291491E8D4F6D50A8B38998FE3FA0107204980EC51DCCE8E0F1A02414403021A0002917D031A01229AAAA10081825820B64F3488062E379FC901AE605BED5739CE3054CFFA77864B75BF5DA52D5B7E285840D688B2D83DF04C368939880681E220D66E8E5E86F56D78A3FB4A2834C5AF202B8D1AAA9AA50AE367353BD13B83B66E2D4E3EA6A898B6030A51E36432240BA705F5F6';

const parseData = () =>{
  const t= Transaction.from_bytes(Buffer.from(tx, 'hex'));
  console.log(t);
  setTimeout(parseData, 0);
} 

onMounted(() => {
  parseData();
})

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
