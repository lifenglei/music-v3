<template>
    <div>
        姓名:{{userName}},
        性别:{{SEX[sex]}},
        年龄:{{age}}
        <button @click="remove(id)">删除</button>
        <button @click="changeAge(id)">年龄+1</button>
        <div>
            firName : <input type="text" :value="firName" @input="onChangeFirName" />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue , Prop , Emit ,Model } from 'vue-property-decorator';
enum Sex {
    '男' = 1,
    '女' = 0
}
@Component({
    name:'user',

})
export default class User extends Vue {
    SEX : any = Sex
    get userName () {
        return this.name
    }
    @Model('changeFirstName',{
        type:String
    })
    firName! :string

    @Prop(Number)
    id!: number;
    
    @Prop([String,Number])
    name!: string | number;

    @Prop({type:Number})
    age!: number;

    @Prop({default:1})
    sex!: number;
    @Emit('on-remove')
    remove (id :any) {
        
    }
    @Emit()
    changeAge (id :number){
        //change-age
    }
    @Emit('changeFirstName')
    onChangeFirName(e:any){
        return e.target.value
    }
}

</script>