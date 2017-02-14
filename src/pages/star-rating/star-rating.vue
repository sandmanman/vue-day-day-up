<template lang="html">
    <div class="star-rating">
        <label class="star-rating-star"
            v-for="rating in ratings"
            v-bind:class="{ selected: selectedOr(value, rating), disabled: disabled }"
            v-on:click="set(rating)"
            v-on:mouseover="starHover(rating)"
            v-on:mouseout="starOut">

            <input type="radio" class="star-rating-check"
            v-bind="{value: value}"
            v-on:input="updateValue">

            <i class="star-icon">★</i>
        </label>
        <span class="rating-num">{{value}}分</span>
    </div>
</template>

<script>
export default {
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
}
</script>

<style lang="scss">
.star-rating {
    text-align: center;
}
.star-rating .star-icon {
    display: inline-block;
    margin-right: 5px;
    font-style: normal;
}
.star-rating-star {
    position: relative;
    display: inline-block;

    margin-bottom: 0;

    color: #999;
    font-size: 26px;
    cursor: pointer;

    transition: color .2s ease-out;
}

.star-rating-star.selected {
    color: #ff6600;
}

.star-rating-star.disabled:hover {
    color: #999;
    cursor: default;
}

.star-rating-star .star-rating-check {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
}
</style>
