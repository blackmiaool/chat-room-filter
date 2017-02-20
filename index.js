const levels = [
    ["hei", "可以的","可以的啊","测试一下"],
    ["咳咳"],
    [/^&[a-zA-Z]{3,4};$/, /^\d+[!:";'<>?,.]+$/, /^[dfg]{1,}/i],
    ["haha", "天惹"],
    ["test"],
    [/^(\w)\1{2,}$/],
    [/^["';,\.asdfqwer]+$/, ],
    [/^fds\w*$/i],
    [],
    [/^[asdf]+$/i, /^fd[a-z]*$/],
    ["那个是群猪", "发生的部分计划", "发的备份计划吧", "啥地方少部分计划", "是打发", /^[\der]+$/, "日你们的嘴", "as发斯蒂芬", "的范德萨发生", "时候的"]
]
function test(input){
    if(typeof input!=="string"||!input){
        return;
    }
    let result;
    levels.some(function(list,level){
        return list.some(function(match){
            if(typeof match==="string"){
                if(input===match){
                    result=level;
                    return true;
                }
            }else if(typeof match==="object"&&match.exec){
                if(input.match(match)){
                    result=level;
                    return true;
                }
            }
        });
    });
    return result;
}
module.exports={
    test
}