<template>
    <div class="login">
        <a-form-model ref="loginForm" :model="loginForm" :rules="rules" v-bind="layout">
            <a-form-model-item has-feedback label="Email" prop="email">
                <a-input v-model="loginForm.email" type="email" autocomplete="off" />
            </a-form-model-item>
            <a-form-model-item has-feedback label="Password" prop="password">
                <a-input v-model="loginForm.password" type="password" autocomplete="off" />
            </a-form-model-item>
            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="submitForm('loginForm')">
                    提交
                </a-button>
                <a-button style="margin-left: 10px" @click="resetForm('loginForm')">
                    重置
                </a-button>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>
<script>
import api from '@/api/user'

export default {
    data() {
        //邮箱校验规则
        let EmailReg = /^[1-9][0-9]{4,}@qq.com$/
        //校验邮箱输入
        let checkEmail = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入邮箱'));
            }
            if (EmailReg.test(value)) {
                return callback()
            } else {
                return callback(new Error('邮箱格式不正确'))
            }
        };
        //密码校验
        let checkPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };

        return {
            loginForm: {
                email: '',
                password: '',
            },
            rules: {
                email: [{ validator: checkEmail, trigger: 'change' }],
                password: [{ validator: checkPass, trigger: 'change' }],

            },
            layout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    api.login(this.loginForm).then((res) => {
                       /*  console.log('@@@', res); */
                        //拿到返回的登录信息，将登录信息保存到store里面
                        this.$store.dispatch('setUserInfo', res);
                        //拿到请求成功的数据（该数据经过axios拦截加工返回）设置路由跳转到路由名为home
                        this.$router.push({
                            name: 'home'
                        })
                    }).catch((error) => {
                        this.$message.error(error)
                    })
                    /*  alert('submit!'); */
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
};
</script>

<style>
.login {
    width: 500px;
    margin: 0 auto;
    border: 1px solid rgb(189, 189, 189);
    padding: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>