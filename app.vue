<template>
  <div>
    {{ something }}
  </div>
  <div v-html="rendered.html"></div>
</template>

<script setup>
import mjml2html from 'mjml';
import something from '@/assets/mjml/test.mjml?raw'

const rendered = mjml2html(something)
</script>