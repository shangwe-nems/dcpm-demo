import React, { useState } from 'react'
import { Avatar, Card, Grid, Menu, ActionIcon, Drawer } from '@mantine/core';
import { BsGenderMale, BsGenderFemale, BsThreeDots } from "react-icons/bs";
import { BiDetail, BiEditAlt, BiTrashAlt } from "react-icons/bi"
import './displaycard.scss'
import PatientFile from '../PatientFile';


function DisplayCard() {

    
    const [fileVisible, setFileVisible] = useState(false);

    return (
    <Grid gutter='xl' className='cardContainer'>            
        <Grid.Col span={3}>
            <Card shadow="sm" radius="sm" className='patient_card' onDoubleClick={() => setFileVisible(true)}> 
                <div className='avatar_section'>
                    <Avatar radius={50} size={90} />
                    <span style={{backgroundColor: "dodgerblue"}}>
                        <BsGenderMale style={{color: "#fff"}} />
                    </span>
                </div>
                <div className='name_section'>
                    <h3>Ahmed Ibrahim</h3>
                    <p>R00001</p>
                </div>
                <div className='data_section'>
                    <p>Age</p>
                    <h3>60 years old</h3>
                </div>
                <div className='data_section'>
                    <p>Date of Birth</p>
                    <h3>04 Mars 1962</h3>
                </div>
                <div className='data_section'>
                    <p>Diagnosis</p>
                    <h3>Diabetes</h3>
                </div>
                <Menu
                    className="ellipsisIcon"
                    withArrow={false}
                    placement='end'
                    size={150}
                    control={
                        <ActionIcon>
                            <BsThreeDots size={20}  />
                        </ActionIcon>
                    }
                >
                    <Menu.Item icon={<BiDetail />} onClick={() => setFileVisible(true)}>View file</Menu.Item>
                    <Menu.Item icon={<BiEditAlt />}>Edit file</Menu.Item>
                    <Menu.Item icon={<BiTrashAlt />}>Delete file</Menu.Item>
                </Menu>
            </Card>
        </Grid.Col>
        <Grid.Col span={3}>
            <Card shadow="sm" radius="sm" className='patient_card' onDoubleClick={() => setFileVisible(true)}>
                <div className='avatar_section'>
                    <Avatar radius={50} size={90} />
                    <span style={{backgroundColor: "#ff03b7"}}>
                        <BsGenderFemale style={{color:"#fff"}} />
                    </span>
                </div>
                <div className='name_section'>
                    <h3>Aisha Kulthum</h3>
                    <p>R00002</p>
                </div>
                <div className='data_section'>
                    <p>Age</p>
                    <h3>21 years old</h3>
                </div>
                <div className='data_section'>
                    <p>Date of Birth</p>
                    <h3>07 January 1999</h3>
                </div>
                <div className='data_section'>
                    <p>Diagnosis</p>
                    <h3>Heart attack</h3>
                </div>
                <Menu
                    className="ellipsisIcon"
                    withArrow={false}
                    placement='end'
                    size={150}
                    control={
                        <ActionIcon>
                            <BsThreeDots size={20}  />
                        </ActionIcon>
                    }
                >
                    <Menu.Item icon={<BiDetail />} onClick={() => setFileVisible(true)}>View file</Menu.Item>
                    <Menu.Item icon={<BiEditAlt />}>Edit file</Menu.Item>
                    <Menu.Item icon={<BiTrashAlt />}>Delete file</Menu.Item>
                </Menu>
                
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

export default DisplayCard