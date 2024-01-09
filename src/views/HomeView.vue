<script>
import ProductList from '@/components/Home/ProductList.vue'
import HeaderComp from '@/components/shared/HeaderComp.vue'

export default {
  components: { HeaderComp, ProductList }
}
</script>

<template>
  <div>
    <HeaderComp />
    <ProductList />
  </div>
</template>
