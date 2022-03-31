/* eslint-disable react-hooks/exhaustive-deps */
import { useNotifications } from "@mantine/notifications"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logoutUser } from "../store/reducers/usersSlice"

const withProtect = (SpecificComponent, option) => {
    
    return function ChechAuth(props) {
        const session = useSelector(state => state.users.currentLoggedIn)
        const notifications = useNotifications()
        const [user, setUser] = useState()
        const navigate = useNavigate()
        const dispatch = useDispatch()
        
        useEffect(() => {
            if (session) {
                const expires = session.expiresAt;

                if(Date.now() <= expires) {
                    setUser(session)
                    if(option) {
                        navigate(`/auth/${props.path ? props.path : 'dashboard'}`)
                    }
                } else {
                    dispatch(logoutUser())
                    navigate(`/login?expired=true`)
                    notifications.showNotification({
                        color: "cyan",
                        title: 'Your session has expired!',
                        message: 'Hey there, you need to login again...',
                    })
                }
            
            } else {
                navigate(`/login`)
            }
        }, [])

        return <SpecificComponent {...props} user={user} />
    }
}

export default withProtect

