<template>
  <div v-html="results"></div>
</template>

<script setup>
import mjml2html from 'mjml';
import handlebars from 'handlebars'
import mjmlSource from '@/assets/mjml/test.mjml?raw'

const rendered = mjml2html(mjmlSource)

const template = handlebars.compile(rendered.html)

const results = template({
  msg: "Hello, world!"
})
</script>