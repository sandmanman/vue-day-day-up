/**
 * Star Rating
 *
 */


Vue.component('star-rating', {
    template: '#starRatingTemplate',
    data: function() {
        return {
            value: 0
        }
    },
    props: {
        max: '',
        disabled: ''
    },
    watch: {
        'value': function(value) {
            this.$emit('input', value)
        }
    },
    computed: {
        ratings: function() {
            if (!this.max) {
                return [1, 2, 3, 4, 5];
            }
            var numberArray = [];
            for (var i = 1; this.max >= i; i++) {
                numberArray.push(i);
            }
            return numberArray;
        }
    },
    methods: {
        selectedOr: function(value, rating) {
            return value >= rating && value != 0;
        },
        updateValue: function(value) {
            this.$emit('input', value);
        },
        starHover: function(index) {
            if (this.disabled) {
                return
            }
            this.tempValue = this.value
            this.value = index
        },
        starOut: function() {
            if (this.disabled) {
                return
            }
            this.value = this.tempValue
        },
        set: function(value) {
            if (this.disabled) {
                return
            }
            this.tempValue = value
            this.value = value
        }
    }
});


var starRating = new Vue({
    el: '#starRating',
})
