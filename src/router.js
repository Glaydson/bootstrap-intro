import Vue from 'vue'
import Router from 'vue-router'
import TresColunas from '@/components/TresColunas'
import HelloWorld from '@/components/HelloWorld'
import LargurasIguais from '@/components/LargurasIguais'
import TamanhosVariaveis from '@/components/TamanhosVariaveis'
import ColOnly from './components/ColOnly'
import EmpilhadoHorizontal from './components/EmpilhadoHorizontal'
import TabelaHead from './components/TabelaHead'
import TabelaStriped from './components/TabelaStriped'
import FormBasico from './components/FormBasico'
import FormControls from './components/FormControls'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "HelloWorld"
            }
        },
        {
            path: '/tresColunas',
            name: 'TresColunas',
            component: TresColunas
        },
        {
            path: '/largurasIguais',
            name: 'LargurasIguais',
            component: LargurasIguais
        },
        {
            path: '/tamanhosVariaveis',
            name: 'TamanhosVariaveis',
            component: TamanhosVariaveis
        },
        {
            path: '/colOnly',
            name: 'ColOnly',
            component: ColOnly
        },
        {
            path: '/empilhadoHorizontal',
            name: 'empilhadoHorizontal',
            component: EmpilhadoHorizontal
        },
        {
            path: '/tabelaHead',
            name: 'tabelaHead',
            component: TabelaHead
        },
        {
            path: '/tabelaStriped',
            name: 'tabelaStriped',
            component: TabelaStriped
        },
        {
            path: '/formBasico',
            name: 'formBasico',
            component: FormBasico
        },
        {
            path: '/formControls',
            name: 'formControls',
            component: FormControls
        }
    ]
})