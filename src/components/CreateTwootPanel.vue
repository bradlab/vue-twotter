<template>
    <form class="create-twoot-panel" @submit.prevent="createNewTwoot()" :class="{'--exceeded': newTwootCharacterCount > 180}">
        <label for="newTwoot">
            <strong>New Twoot </strong>
            <span>({{newTwootCharacterCount}}/180)</span>
        </label>
        <textarea name="" id="newTwoot" cols="30" rows="3" v-model="state.newTwootContent" ></textarea>
        <div class="create-twoot-panel__submit">
            <div class="create-twoot-type">
                <label for="newTwootType"><strong>Type: </strong></label>
                <select name="" id="newTwootType" v-model="state.newTwootType">
                    <option :value="option.value" v-for="(option, index) in state.twootsTypes" :key="index">
                    {{option.name}}
                    </option>
                </select>
            </div>
            <button>
                Twoot!
            </button>
        </div>
    </form>
</template>

<script>

import {reactive, computed} from 'vue';

export default {
    name: 'CreateTwootPanel',
    setup (props, ctx) {
        const state = reactive({
            newTwootContent: '',
            newTwootType: 'instant',
            twootsTypes: [
                {value: 'draft', name: 'Draft'},
                {value: 'instant', name: 'Instant Twoot'},
            ],
        });

        const newTwootCharacterCount = computed(() => state.newTwootContent.length);

        function createNewTwoot () {
            if(state.newTwootContent && state.newTwootType !== 'draft') {
                ctx.emit('add-twoot', state.newTwootContent)
                state.newTwootContent = '';
            }
        }

        return {
            state,
            newTwootCharacterCount,
            createNewTwoot
        }
    },
//   computed: {
//     newTwootCharacterCount() {
//       return this.newTwootContent.length;
//     }
//   },
//   methods: {
//     createNewTwoot () {
//       if(this.newTwootContent && this.newTwootType !== 'draft') {
//         this.$emit('add-twoot', this.newTwootContent)
//         this.newTwootContent = '';
//       }
//     }
//   }
}
</script>

<style lang="scss" scoped>
.create-twoot-panel {
    margin-top: 20px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;

    textarea {
        border: 1px solid #DFE3E8;
        border-radius: 5px;
    }

    .create-twoot-panel__submit {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;

        button {
            border-radius: 3px;
            background-color:deeppink;
            // border-color:  rgb(230, 93, 116);
            border: none;
            box-shadow: none;
            color: white;
        }
    }

    .create-twoot-type select {
        padding: 5px 10px;
        border-radius: 3px;
    }

    &.--exceeded {
    color: rgb(226, 65, 65);
        textarea {
            border-color:  rgb(226, 65, 65);
        }
        button { 
            background-color:  rgb(226, 65, 65);
            border: none;
            color: white
        }
    }
}

</style>
