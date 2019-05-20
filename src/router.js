import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

import TresColunas from '@/components/grids/TresColunas'
import LargurasIguais from '@/components/grids/LargurasIguais'
import TamanhosVariaveis from '@/components/grids/TamanhosVariaveis'
import ColOnly from './components/grids/ColOnly'
import EmpilhadoHorizontal from './components/grids/EmpilhadoHorizontal'

import TabelaHead from './components/tabelas/TabelaHead'
import TabelaStriped from './components/tabelas/TabelaStriped'

import FormBasico from './components/forms/FormBasico'
import FormControls from './components/forms/FormControls'
import FormGrid from './components/forms/FormGrid'

import ImagemResponsiva from "./components/imagens/ImagemResponsiva"
import ImagemThumbnail from "./components/imagens/ImagemThumbnail"

import Alertas from "./components/componentes/Alertas"
import Badges from "./components/componentes/Badges"
import BarraProgresso from "./components/componentes/BarraProgresso"
import Botoes from "./components/componentes/Botoes"
import Card from "./components/componentes/Card"
import Carrossel from "./components/componentes/Carrossel"
import Jumbotron from "./components/componentes/Jumbotron"
import Media from "./components/componentes/Media"
import Nav from "./components/componentes/Nav"
import Navbar from "./components/componentes/Navbar"

Vue.use(Router)

export default new Router({
    routes: [
        /* {
            path: "/",
            redirect: {
                name: "HelloWorld"
            }
        }, */
        {
            path: '/helloWorld',
            name: 'HelloWorld',
            component: HelloWorld
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
        },
        {
            path: '/formGrid',
            name: 'formGrid',
            component: FormGrid
        },
        {
            path: '/imagemResponsiva',
            name: 'imagemResponsiva',
            component: ImagemResponsiva
        },
        {
            path: '/imagemThumbnail',
            name: 'imagemThumbnail',
            component: ImagemThumbnail
        },
        {
            path: '/alertas',
            name: 'alertas',
            component: Alertas
        },
        {
            path: '/badges',
            name: 'badges',
            component: Badges
        },
        {
            path: '/barraProgresso',
            name: 'barraProgresso',
            component: BarraProgresso
        },
        {
            path: '/botoes',
            name: 'botoes',
            component: Botoes
        },
        {
            path: '/card',
            name: 'card',
            component: Card
        },
        {
            path: '/carrossel',
            name: 'carrossel',
            component: Carrossel
        },
        {
            path: '/jumbotron',
            name: 'jumbotron',
            component: Jumbotron
        },
        {
            path: '/media',
            name: 'media',
            component: Media
        },
        {
            path: '/nav',
            name: 'nav',
            component: Nav
        },
        {
            path: '/navbar',
            name: 'navbar',
            component: Navbar
        }
    ]
})