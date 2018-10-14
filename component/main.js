Vue.component('coupon', {
    template: "<input placeholder='Enter your coupon' @blur='onCouponApplied'>",
    methods: {
        onCouponApplied() {
            //alert("alert from component")
            this.$emit('applied')
        }
    }
});
const app = new Vue({
    el: "#app",
    methods: {
        onApplied() {
            alert("alert from root")
        }
    }
});