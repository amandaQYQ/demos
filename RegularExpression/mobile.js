const match = (val) => {
    let isPhone = /^0\d{2,3}-?\d{7,8}$/; // 固话验证
    let isMob = /^1[3|5|7|8][0-9]\d{4,8}$/ // 手机验证

    if (!(isMob.test(val) || isPhone.test(val))) {
        alert('请输入正确联系电话')
        return
    }
}