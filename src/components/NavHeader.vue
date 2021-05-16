<template>
    <b-navbar class="container-nav" centered>
        <template #brand>
            <div class="img-wrapper ml-1">
                <img src="@/assets/b3.png" />
            </div>
        </template>

        <template #start>
            <b-navbar-item tag="div" @click="isHide = !isHide" class="icone mr-2">
                <b-icon :icon="isHide ? 'eye' : 'eye-off'" />
            </b-navbar-item>

            <b-navbar-item tag="div" class="cardValores mr-2 my-3">
                <div>
                    Lucro/Prejuízo
                </div>
                <div>
                    <div :class="verificaLP" v-if="isHide">
                        {{ lucroPreju | dinheiro }}
                    </div>
                    <div v-else>
                        <b-icon icon="lock" size="is-small" />
                    </div>
                </div>
            </b-navbar-item>

            <b-navbar-item tag="div" class="cardValores mr-2 my-3">
                <div>
                    Patrimônio Total
                </div>
                <div>
                    <div :class="verificaPat" v-if="isHide">
                        {{ patTotal | dinheiro }}
                    </div>
                    <div v-else>
                        <b-icon icon="lock" size="is-small" />
                    </div>
                </div>
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-dark">
                        <strong>Cadastrar</strong>
                    </a>
                    <a class="button is-active">
                        Entrar
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    data() {
        return {
            patTotal: 99000,
            lucroPreju: -10,
            isHide: "",
        };
    },
    computed: {
        verificaLP() {
            return this.lucroPreju >= 0 ? "verde" : "vermelho";
        },
        verificaPat() {
            return this.patTotal >= 0 ? "verde" : "vermelho";
        },
    },
};
</script>

<style lang="scss">
@import '@/variables/_variables.scss';

.container-nav {
    background: $degrade;

    .icone {
        cursor: pointer;
        color: white;
    }
    .img-wrapper {
        display: flex;
        align-items: center;
        width: 80px;

        img {
            border-radius: 15px;
            width: 100%;
        }
    }

    .cardValores {
        color: white;
        font-family: $fontePadrao;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        background-color: #2929299a;
        border-radius: 10px;
    }
}

.verde {
    font-weight: 500;
    color: $azul;
}
.vermelho {
    font-weight: 400;
    color: tomato;
}
</style>
