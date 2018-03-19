//正则表
let validatePatternMap = {
    phone: "^1\\d{10}$",
    IDCard: "^\\d{17}(\\d|x|X)$",
    amount: "^(([1-9]\\d{0,9})|0)(\\.\\d{1,2})?$"
};


/**
 * 报错文案的自动转换
 * @param rules 校验规则 array
 * @param type 组件类型 string
 * @param errorName 保存名称 string
 */
function errorMessageTransform(rules, componentType, errorName) {
    if (!rules) {
        return;
    }
    if (!rules instanceof Array) {
        console.error('errorMessageTransform 仅支持数组传入');
        return;
    }
    let resultRules = [];
    rules.forEach((item, index) => {
        let resultItem = Object.assign({}, item);
        let errorMsg = `${errorName}输入错误`;
        if (item.message) {
            resultRules.push(resultItem);
            return;
        } else if (item.min && item.max) {
            switch (componentType) {
                case 'input':
                    errorMsg = `${errorName}长度是${item.min}~${item.max}位`;
                    break;
                case 'select':
                    errorMsg = `${errorName}长度是${item.min}~${item.max}位`;
                    break;
                default :
                    errorMsg = `${errorName}输入错误`;
                    break;
            }
            resultItem.message = errorMsg;
        } else {
            let rule = Object.keys(item)[0];
            switch (rule) {
                case 'required':
                    switch (componentType) {
                        case 'input':
                            errorMsg = `${errorName}为必填项`;
                            break;
                        case 'checkbox':
                        case 'radio':
                            errorMsg = "请至少选择一项";
                            break;
                        case 'fileInput':
                        case 'select':
                        case 'date':
                        case 'cascader':
                            errorMsg = `请选择${errorName}`;
                            break;
                    }
                    break;
                case 'type':
                    resultRules.push(getRealRule(item.type, errorName));
                    return;
                case 'len':
                    break;
                case 'min':
                    errorMsg = `${errorName}不能小于${item.min}位`;
                    break;
                case 'max':
                    errorMsg = `${errorName}不能超过${item.max}位`;
                    break;
                default :
                    errorMsg = `${errorName}输入错误`;
                    break;
            }
            resultItem[rule] = item[rule];
            resultItem.message = errorMsg;
        }
        resultRules.push(resultItem);
    });
    return resultRules;
}


function getRealRule(type, name) {
    if (validatePatternMap[type])
    {
        return {
            pattern: validatePatternMap[type],
            message: `${name}格式不正确`
        }
    }

    return {
        type: type,
        message: `${name}格式不正确`
    }

}


module.exports = {
    errorMessageTransform
};