<template>
    <div class="twoot-item">
        <div class="user-profile__twoot" @click="favouriteTwoot(twoot.id)">
            <div class="twoot-item__user">
                @{{username}}
            </div>
        </div>
        <div class="twoot-item__content">
            {{twoot.content}}
        </div>
        <!-- <div class="user-profile__twoot" >
            {{ twoot.content }}
        </div> -->

    </div>
</template>

<script>
export default {
    name: 'TwootItem',
    props: {
        username: {
            type: String,
            required: false
        },
        twoot: {
            type: Object,
            required: false
        }
    },
    methods: {
        favouriteTwoot(id) {
            console.log("Favouritizement");
            this.$emit('favourite', id);
        }
    }
}
</script>

<style lang='scss' scoped>
    .twoot-item {
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;
        box-sizing: border-box;
        cursor: pointer;
        transition: all 0.25s ease;

        .twoot-item__user {
            font-weight: bold;
        }

        &:hover {
            transform: scale(1.1, 1.1);
        }
    }


</style>