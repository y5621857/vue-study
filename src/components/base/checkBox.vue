<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item,index) in selections"
          :class="{active:nowIndexes.indexOf(index)!=-1}"
          @click="checked(index)"
      >{{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CheckBox',
    props: {
      selections: {
        type: Array,
        default: [
          {
            label: 'test',
            value: 0
          }
        ]
      }
    },
    data() {
      return {
        nowIndexes: [0, 1]
      }
    },
    methods: {
      //TODO 多选
      checked(index) {
        if (_.indexOf(this.nowIndexes, index) != -1) {
          this.nowIndexes = _.remove(this.nowIndexes, (item) => {
            return item != index
          })
        } else {
          this.nowIndexes.push(index)
        }
        
        let nowArray = _.map(this.nowIndexes, (item) => {
          return this.selections[item]
        })
        
        this.$emit('on-change', nowArray)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }
  
  .chooser-list li {
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  
  .chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>
