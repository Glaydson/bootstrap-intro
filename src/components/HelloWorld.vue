<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Sistema de Grids</h3>
    <ul>
      <li><router-link to="/tresColunas">Três Colunas</router-link></li>
      <li><router-link to="/largurasIguais">Larguras Iguais</router-link></li>
      <li><router-link to="/tamanhosVariaveis">Tamanhos Variaveis</router-link></li>
      <li><router-link to="/colOnly">Todos Dispositivos</router-link></li>
      <li><router-link to="/empilhadoHorizontal">Empilha na Horizontal</router-link></li>
    </ul>
    <h3>Tabelas</h3>
    <ul>
      <li><router-link to="/tabelaHead">Tabela com Head</router-link></li>
      <li><router-link to="/tabelaStriped">Tabela Striped</router-link></li>
    </ul>
    <h3>Componentes</h3>
    <ul>
      <li><router-link to="/formBasico">Formulário Básico</router-link></li>    
      <li><router-link to="/formControls">Formulário com Controles</router-link></li>
    </ul>
    <hr/>
    <router-view />
  </div>

</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
