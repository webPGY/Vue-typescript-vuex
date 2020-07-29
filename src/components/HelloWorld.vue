<template>
  <div class="hello">
    <h1 @click='actions'>{{ msg }}</h1>
    <p>{{vals}}</p>
     <h2 @click="setLocale('en')">设置语言</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import { State, namespace, Mutation, Action } from 'vuex-class'
const demo = namespace('Dem/demo')
@Component({
  name: 'HelloWorld'
})
export default class HelloWorld extends Vue {
  msg:string = 'Welcome to a Vue-typescript App';
  @demo.State('vals') vals: any;
  @demo.Action('changeSevice') changeSevice:any;
  @State('locale') locale!: any;
  @Mutation('setLocale') setLocale!: any;
  actions(){
    this.msg = 'Welcome to your Vue-typescript App'
    this.changeSevice('store data has changed')
  }
  @Watch('msg')
  msgChanged(newVal: string, oldVal: string){
    if(newVal){
      console.log('msg has changed')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  cursor: pointer;
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
