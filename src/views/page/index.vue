<template>
 <div class="content">
  <Card />
  <charts />
 </div>


</template>
<script>
import charts from '@/components/charts.vue'
import Card from '@/components/card.vue'
export default {
  components: {
    charts,
    Card
  }
}
</script>
