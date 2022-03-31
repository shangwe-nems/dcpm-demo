import React, { forwardRef, useEffect, useState } from 'react'
import { Avatar, Text, Group, Input, UnstyledButton, Menu, Container, ActionIcon, Divider, Modal, Popover, Title } from '@mantine/core'
import { IoChevronDownOutline, IoStatsChartOutline } from "react-icons/io5";
import { BsSearch, BsQuestionCircle, BsBell } from "react-icons/bs";
import { FiUserPlus, FiLogOut } from "react-icons/fi";
import { HiOutlineAdjustments } from "react-icons/hi";
import { CgProfile } from 'react-icons/cg'
import { FaUsersCog } from 'react-icons/fa';

import './header.scss'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/reducers/usersSlice';
import { useNavigate } from 'react-router-dom';

const UserButton = forwardRef(({image, name, email, role, icon, ...others }, ref)=> (
    <UnstyledButton
        ref={ref}
        sx={(theme) => ({
            display: 'block',
            width: '100%',
            padding: theme.spacing.md,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

            '&:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            }
        })}
        {...others}
    >
        <Group style={{paddingLeft: 8}}>
            <Avatar src={image} radius='xl' size={50} />

            <div style={{display:'inline-flex', alignItems: 'center'}}>
                <div style={{ flex: 1, marginRight:14 }}>
                    <Text size='sm' weight={500}>{name}</Text>
                    <Text size='xs' color='dimmed'>{email}</Text>
                </div>

                {icon || <IoChevronDownOutline size={16} />}
            </div>
        </Group>
    </UnstyledButton>
))

function Header() {
    const loggedInUser = useSelector(state => state.users.currentLoggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [newPatientVisible, setNewPatientVisible] = useState(false)
    const [filterVisible, setFilterVisible] = useState(false)

    useEffect(() => {
        setUser(loggedInUser)
    }, [loggedInUser])

    const handleLogout = () => {
        dispatch(logoutUser);
        navigate('/login')
    }
    
    return (
      <div className='header'>
        <Container  size="xxl">
            <div className='container'>
                <div className='searchbar'>
                    <Input 
                        variant='filled'
                        size='md'
                        style={{marginRight:14, width:400}} 
                        icon={<BsSearch />} 
                        rightSection={
                            <Popover
                                opened={filterVisible}
                                position="bottom"
                                placement='end'
                                radius='sm'
                                spacing='xs'
                                shadow='xs'
                                width={400}
                                target={
                                    <ActionIcon onClick={() => setFilterVisible((o) => !o)} style={{marginRight:6, backgroundColor:'#fafafa'}}>
                                        <HiOutlineAdjustments />
                                    </ActionIcon>
                                }
                            >
                                ...
                            </Popover>
                        } 
                    />
                    <ActionIcon 
                        onClick={() => {
                            setNewPatientVisible((o) => !o);
                            setFilterVisible(false)
                        }} 
                        variant="light" 
                        size='xl'
                    >
                            <FiUserPlus size={18} />
                    </ActionIcon>
                </div>
                <div className='rightSide'>
                    <span className='bell'>
                        <BsBell size={28} />
                        <span></span>
                    </span>
                    <span className='question'><BsQuestionCircle size={28} /></span>
                    <Menu
                        withArrow={false}
                        size={236}
                        placement='end'
                        control={
                            <UserButton
                                image={user?.avatar}
                                name={user && user.first_name.concat(' ', user.last_name)}
                                email={user?.email}
                            />
                        }
                    >
                        {/* ...menu items */}
                        <Menu.Label>Settings</Menu.Label>
                        <Menu.Item icon={<CgProfile />}>Profile</Menu.Item>
                        <Menu.Item icon={<FaUsersCog />}>Utilisateurs</Menu.Item>
                        <Menu.Item icon={<IoStatsChartOutline />}>Rapports</Menu.Item>
                        <Divider />
                        <Menu.Item onClick={() => handleLogout()} icon={<FiLogOut />}>Se deconnecter</Menu.Item>
                    </Menu>
                </div>
                
            </div>
        </Container>
        <Modal
            opened={newPatientVisible}
            onClose={() => setNewPatientVisible(false)}
            title={<Title order={4} style={{fontWeight:'lighter', color:'#a6a6a6'}}><FiUserPlus size={18} style={{marginRight:4}} /> New Patient</Title>}
        >
            ...
        </Modal>
    </div>
  )
}

export default Header