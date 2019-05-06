import {_axios} from "@/assets/api";//引入调用后台函数
import PageMenu from '@/components/PageMenu/PageMenu.vue';// 引入左侧menu组件
import PageHeader from '@/components/PageHeader/PageHeader.vue';// 引入头部header组件
import PageContent from '@/components/PageContent/PageContent.vue';// 引入右侧content组件
export default {
    name: 'PageHome',
    components: {
        PageMenu,PageHeader,PageContent
    },
    data () {
        return {
            retractUrl:require('../../assets/icon-left.png'),
            menuStatus:true,
        }
    },
    methods: {
        //点击向左收起按钮
        clickLeft(){
            this.menuStatus = !this.menuStatus;
            if(this.menuStatus){//打开
                this.retractUrl = require('../../assets/icon-left.png');
                $('.page_menu').animate({left:"0rem"});
                $('.page_header').animate({left:"2rem"});
                $('.page_home_left').animate({left:"2rem"});
            }else{//收起
                this.retractUrl = require('../../assets/icon-right.png');
                $('.page_menu').animate({left:"-2rem"});
                $('.page_header').animate({left:"0rem"});
                $('.page_home_left').animate({left:"0rem"});
            }
        },
    },
    computed: {

    },
    watch: {

    },
    mounted () {

    }
}
