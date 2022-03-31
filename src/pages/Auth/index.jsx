import React, { useState } from 'react'
import { Button, Checkbox, Container, Grid, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { MdOutlineBlock, MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { FaTimes } from 'react-icons/fa'
import { FiLogIn } from "react-icons/fi";
import { yupResolver } from  '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import withProtect from '../../utils/withProtect'
import './auth.scss'
import { loginUser } from '../../store/reducers/usersSlice';
import { useNotifications } from '@mantine/notifications';

const createSessionSchema = yup.object().shape({
    email: yup.string().required('email is required').email('not a valid email'),
    password: yup.string().required('password is required').min(6, 'password should be 6 chars minimum').max(24),
})

function LoginPage() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users);
    const navigate = useNavigate()
    const notifications = useNotifications()
    const [signInError, setSignInError] = useState(null)
    const [loading, setLoading] = useState(false);

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(createSessionSchema)
    })

    function onSubmit(values) {
        setLoading(true);
        setTimeout(() => {
            const user = users.find(o => o.email === values?.email)
            
            if (user?.password === values?.password) {
                dispatch(loginUser(user));
                navigate(`/auth/dashboard`)
            } else {
                setSignInError('Wrong id or password');
                notifications.showNotification({
                    color: "red",
                    title: 'Wrong id or password!',
                    message: 'Please check your credentials...',
                    icon: <FaTimes />
                })
                setTimeout(() => {
                    setSignInError('')
                }, 5000);
                setLoading(false)
            }
        }, 500);
        
    }

    return (
    <div className='signin-in'>
        <Container className='sign-in-page'>
            <div className='signin-pop' id='sign-in-pop'>
                <Grid>
                    <Grid.Col span={6}>
                        <div className='cmp-info'>
                            <div className='cm-logo'>
                                <img src={"./dcpm-logo-1300x.png"} alt='Logo'/>
                                <p>Nuestra misión es contribuir a la afirmación de la dignidad humana y la construcción de relaciones armónicas y equitativas a través de un desarrollo transformador sostenible. </p>
                            </div>
                            <img src={"./heartbeat.png"} alt='illustration'/>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6} className='login-in-sec'>
                        <div className='login-sec'>
                            <h3 id='signin-sec'>Sign In</h3>
                            <p className='error'>{signInError ? <span id="error" style={{color: 'red'}}><MdOutlineBlock  />{signInError}</span> : ''}</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='formField'>
                                    <TextInput 
                                        size='sm'
                                        key='email'
                                        label='Email :'
                                        {...register('email')}
                                        icon={<MdOutlineMailOutline />}
                                        type='email'
                                        placeholder='Your email'
                                        onChange={(e) => setValue('email', e.target.value, { shouldValidate: true})}
                                        error={errors.email ? <span id="error"><IoWarningOutline  />{errors.email?.message}</span> : null}
                                    />
                                </div>
                                <div className='formField'>
                                    <PasswordInput 
                                        size='sm'
                                        key='password'
                                        label='Password :'
                                        {...register('password')}
                                        icon={<MdLockOutline />}
                                        placeholder='Your password'
                                        onChange={(e) => setValue('password', e.target.value, { shouldValidate: true})}
                                        error={errors.password ? <span id="error"><IoWarningOutline  />{errors.password?.message}</span> : null}
                                    />
                                </div>
                               
                                <div className="fgtpwd">
                                    <Checkbox label='Remember me' color='cyan' />
                                    <a href='/reset-password'>Forgot password?</a>
                                </div>
                                <Button loading={loading} leftIcon={<FiLogIn />} type='submit' color='cyan' size='sm'>Sign In</Button>
                            </form>
                        </div>
                        <img src={"./pills.png"} alt='illustration'/>
                    </Grid.Col>
                </Grid>
            </div>
        </Container>
    </div>
  )
}

export default withProtect(LoginPage, false)