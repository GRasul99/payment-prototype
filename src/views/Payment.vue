<template>
  <div class="flex flex-col container mx-auto md:flex-row mt-8">
    <PaymentReceipt />
    <PaymentForm />
  </div>
</template>

<script>
export default {
  name: 'Payment',
  components: {
    PaymentReceipt: () => import('@/components/PaymentReceipt'),
    PaymentForm: () => import('@/components/PaymentForm')
  }
}
</script>
