import React, { useState } from 'react'
import { ActionIcon, Avatar, Badge, Card, Checkbox, Drawer, Grid, Menu } from '@mantine/core'
import { BsGenderFemale, BsGenderMale, BsThreeDotsVertical } from 'react-icons/bs'
import './displaylist.scss'
import { BiDetail, BiEditAlt, BiTrashAlt } from 'react-icons/bi'
// import { FiUserPlus } from 'react-icons/fi'
import PatientFile from '../PatientFile'

function DisplayList() {

    const [fileVisible, setFileVisible] = useState(false);

    return (
        <Grid gutter='xs'>            
            <Grid.Col span={12}>
                <Card shadow="sm" radius="sm" className='titleRow'>
                    <span className='checkbox'><Checkbox /></span>
                    <span className='number'>No. RM</span>
                    <span className='patientName'>Patient name</span>
                    <span className='gender'>Gender</span>
                    <span className='age'>Age</span>
                    <span className='birthday'>Date of birth</span>
                    <span className='diagnose'>Diagnosis</span>
                    <span className='triage'>Triage</span>
                    <span className='dots'></span>
                </Card>
            </Grid.Col>


            <Grid.Col span={12}>
                <Card shadow="sm" radius="sm" className='dataRow' onDoubleClick={() => setFileVisible(true)}>
                    <span className='checkbox'><Checkbox /></span>
                    <span className='number'>R00001</span>
                    <span className='patientName'><Avatar radius="xl" style={{marginRight:14}} /> Ahmed Ibrahim</span>
                    <div className='gender'>
                        <span style={{backgroundColor: "dodgerblue"}}>
                            <BsGenderMale style={{color: "#fff"}} />
                        </span>
                    </div>
                    <span className='age'>60 yo</span>
                    <span className='birthday'>04 Mars 1962</span>
                    <span className='diagnose'>Diabetes</span>
                    <span className='triage'><Badge variant='light' size='lg' color='green' radius='sm'>Not Urgent</Badge></span>
                    <span className='dots'>
                        <Menu
                            className="ellipsisIcon"
                            withArrow={false}
                            placement='end'
                            size={150}
                            control={
                                <ActionIcon>
                                    <BsThreeDotsVertical className="ellipsisIcon" size={20} />
                                </ActionIcon>
                            }
                        >
                            <Menu.Item icon={<BiDetail />} onClick={() => setFileVisible(true)}>View file</Menu.Item>
                            <Menu.Item icon={<BiEditAlt />}>Edit file</Menu.Item>
                            <Menu.Item icon={<BiTrashAlt />}>Delete file</Menu.Item>
                        </Menu>
                    </span>
                </Card>
            </Grid.Col>
            <Grid.Col span={12}>
                <Card shadow="sm" radius="sm" className='dataRow' onDoubleClick={() => setFileVisible(true)}>
                    <span className='checkbox'><Checkbox /></span>
                    <span className='number'>R00002</span>
                    <span className='patientName'><Avatar radius="xl" style={{marginRight:14}} /> Aisha Kulthum</span>
                    <div className='gender'>
                    <span style={{backgroundColor: "#ff03b7"}}>
                            <BsGenderFemale style={{color:"#fff"}} />
                        </span> 
                    </div>
                    <span className='age'>21 yo</span>
                    <span className='birthday'>07 January 1999</span>
                    <span className='diagnose'>Heart attack</span>
                    <span className='triage'><Badge variant='light' size='lg' color='red' radius='sm'>Emergency</Badge></span>
                    <span className='dots'>
                        <Menu
                            className="ellipsisIcon"
                            withArrow={false}
                            placement='end'
                            size={150}
                            control={
                                <ActionIcon>
                                    <BsThreeDotsVertical className="ellipsisIcon" size={20} />
                                </ActionIcon>
                            }
                        >
                            <Menu.Item icon={<BiDetail />} onClick={() => setFileVisible(true)}>View file</Menu.Item>
                            <Menu.Item icon={<BiEditAlt />}>Edit file</Menu.Item>
                            <Menu.Item icon={<BiTrashAlt />}>Delete file</Menu.Item>
                        </Menu>
                    </span>
                </Card>
            </Grid.Col>
            <Grid.Col span={12}>
                <Card shadow="sm" radius="sm" className='dataRow' onDoubleClick={() => setFileVisible(true)}>
                    <span className='checkbox'><Checkbox /></span>
                    <span className='number'>R00003</span>
                    <span className='patientName'><Avatar radius="xl" style={{marginRight:14}} /> Kim Johnson</span>
                    <div className='gender'>
                        <span style={{backgroundColor: "dodgerblue"}}>
                            <BsGenderMale style={{color: "#fff"}} />
                        </span>
                    </div>
                    <span className='age'>32 yo</span>
                    <span className='birthday'>04 Mars 1990</span>
                    <span className='diagnose'>Malaria</span>
                    <span className='triage'><Badge variant='light' size='lg' color="blue" radius='sm'>Rescussitation</Badge></span>
                    <span className='dots'>
                        <Menu
                            className="ellipsisIcon"
                            withArrow={false}
                            placement='end'
                            size={150}
                            control={
                                <ActionIcon>
                                    <BsThreeDotsVertical className="ellipsisIcon" size={20} />
                                </ActionIcon>
                            }
                        >
                            <Menu.Item icon={<BiDetail />} onClick={() => setFileVisible(true)}>View file</Menu.Item>
                            <Menu.Item icon={<BiEditAlt />}>Edit file</Menu.Item>
                            <Menu.Item icon={<BiTrashAlt />}>Delete file</Menu.Item>
                        </Menu>
                    </span>
                </Card>
            </Grid.Col>
            <Grid.Col span={12}>
                <Card shadow="sm" radius="sm" className='dataRow' onDoubleClick={() => setFileVisible(true)}>
                    <span className='checkbox'><Checkbox /></span>
                    <span className='number'>R00004</span>
                    <span className='patientName'><Avatar radius="xl" style={{marginRight:14}} /> Micheline Dupain</span>
                    <div className='gender'>
                    <span style={{backgroundColor: "#ff03b7"}}>
                            <BsGenderFemale style={{color:"#fff"}} />
                        </span> 
                    </div>
                    <span className='age'>24 yo</span>
                    <span className='birthday'>17 March 1998</span>
                    <span className='diagnose'>Allergies</span>
                    <span className='triage'><Badge variant='light' size='lg' color="gray" radius='sm'>Passed away</Badge></span>
                    <span className='dots'>
                        <Menu
                            className="ellipsisIcon"
                            withArrow={false}
                            placement='end'
                            size={150}
                            control={
                                <ActionIcon>
                                    <BsThreeDotsVertical className="ellipsisIcon" size={20} />
                                </ActionIcon>
                            }
                        >
                            <Menu.Item icon={<BiDetail />} onClick={() => setFileVisible(true)}>View file</Menu.Item>
                            <Menu.Item icon={<BiEditAlt />}>Edit file</Menu.Item>
                            <Menu.Item icon={<BiTrashAlt />}>Delete file</Menu.Item>
                        </Menu>
                    </span>
                </Card>
            </Grid.Col>
            <Drawer
                position='bottom'
                size="100%"
                padding="sm"
                opened={fileVisible}
                onClose={() => setFileVisible(false)}
            >
                <PatientFile />
            </Drawer>
        </Grid>
    )
}

export default DisplayList