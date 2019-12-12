<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex item-center justify-between flex-wrap bg-gree-400 p-6">
        <div class="flex item-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">
            <pxicon class="mr-2"></pxicon>
          </span>
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg_flex lg:item-center"
        >
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>
</template>
<script>
import Pxicon from "@/components/Pxicon";
export default {
  name: "pxHeader",
  components: { Pxicon }
};
</script>
