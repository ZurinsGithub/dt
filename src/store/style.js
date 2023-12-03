import { defineStore } from 'pinia';

export const useStyleStore = defineStore('theme',{
    state:()=>{
        return {
            theme : 'theme_light'
        }
    },
    actions:{
        changeTheme(value){
            if(value == undefined){
                if(this.theme == 'theme_light')
                this.theme = 'theme_dark'
                else{
                    this.theme = 'theme_light'
                }
            }
            else{
                this.theme = value
            }
        }
    }
})