// 文件结构：项目名称，条目（items，即 一张卡片），附加项（additional）
import _ from 'lodash'
let project_name = 'reflective_panel'
let item0 = {
    id:1000,
    title:'模式',
    model_type:'default',
    content:'根据是否进行工程化作业选择：',
    additional:[
        {
            type:'link',
            data:[
                {
                    text:'Lite：仅⽆可视化三⻆协同你，以及w3',
                    to:1001,
                    record:'Lite开始'
                },
                {
                    text:'工程：进⾏完整的初始化，或者从Lite开始可视化',
                    to:1002,
                    record:'工程开始'
                }
            ]
        },
        {
            type:'select',
            data:[
                {
                    text:'select1',
                    record:'select1'
                },
                {
                    text:'select2',
                    record:'select2'
                }
            ]
        }
    ]
}

let item1 = {
    id:1001,
    title:'模式',
    model_type:'default',
    content:'根据是否进行工程化作业选择：',
    additional:_.cloneDeep(item0.additional)
}
let item2 = {
    id:1002,
    title:'模式',
    model_type:'default',
    content:'根据是否进行工程化作业选择：',
    additional:_.cloneDeep(item0.additional)
}
let items = [item0,item1,item2]

export {project_name,items}