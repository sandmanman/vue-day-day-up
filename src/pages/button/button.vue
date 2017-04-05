<template>
    <button class="vv-btn">
        <span>{{msg}}</span>
    </button>
</template>

<script>
    export default {
        name: 'vv-btn',
        data() {
            return {
                msg: 'button'
            }
        }
    }
</script>

<style lang="less">
    .vv-btn {
        display: inline-block;
        font-weight: normal;
        line-height: 1.25;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        -webkit-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
    }

    .vv-btn:focus,
    .vv-btn:hover {
        text-decoration: none;
    }

    .vv-btn:focus,
    .vv-btn.focus {
        outline: 0;
        -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);
        box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);
    }

    .vv-btn.disabled,
    .vv-btn:disabled {
        cursor: not-allowed;
        opacity: .65;
    }

    .vv-btn:active,
    .vv-btn.active {
        background-image: none;
    }

    a.vv-btn.disabled {
        pointer-events: none;
    }

    .vv-btn {
        color: #292b2c;
        background-color: #fff;
        border-color: #ccc;
    }

    .vv-btn:hover {
        color: #292b2c;
        background-color: #e6e6e6;
        border-color: #adadad;
    }

    .vv-btn:focus,
    .vv-btn.focus {
        -webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
        box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
    }

    .vv-btn.disabled,
    .vv-btn:disabled {
        background-color: #fff;
        border-color: #ccc;
    }

    .vv-btn:active,
    .vv-btn.active,
    .show>.vv-btn.dropdown-toggle {
        color: #292b2c;
        background-color: #e6e6e6;
        background-image: none;
        border-color: #adadad;
    }
</style>