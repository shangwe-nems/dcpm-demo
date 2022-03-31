import { ActionIcon, Avatar, Badge, Divider, Grid, Text, Timeline, Title } from '@mantine/core'
import React from 'react'
// import { BiEditAlt } from 'react-icons/bi'
import { BsArrowLeft, BsGenderMale, } from 'react-icons/bs'
// import { FiUserPlus } from 'react-icons/fi'

import './patientfile.scss'

function PatientFile() {
  return (
    <div className='fileContainer'>
        <div className='fileHeader'>
            <div className='fileTitle'>
                <ActionIcon radius="xl" variant="light" color="gray" size="xl" >
                    <BsArrowLeft />
                </ActionIcon>
                <Title order={3} style={{fontWeight:'lighter', color:'#a6a6a6', marginLeft:14}}>
                    R00001
                </Title>
            </div>
            {/* <div>
                <ActionIcon variant="light" color="gray" size="lg">
                    <BiEditAlt size={24}/>
                </ActionIcon>
            </div> */}
        </div>
        <Grid gutter={12}>
            <Grid.Col span={4} >
                <div className="fileLeftSide">
                    <div className="leftHead">
                        <div className="leftAvatar">
                           <Avatar size={150} radius="" /> 
                           <span style={{backgroundColor: "dodgerblue"}}>
                                <BsGenderMale style={{color: "#fff"}} />
                            </span>
                        </div>
                        
                        <div className='rightAvatar'>
                            <h3>Ahmed Ibrahim</h3>
                            <p style={{marginTop: 4, color: "#15aabf", fontWeight: 400}}>Diabetes</p>
                            {/* <p>Langues : Francais, arabe, soninke</p> */}
                            <p style={{marginBottom: 4}}>04 Mars 1962 <b>(60 yo)</b></p>
                            {/* <p>Nouakchott (12km away)</p> */}
                            <span><Badge variant="light" size="lg" color="green" radius='sm'>Not urgent</Badge></span>
                        </div>
                    </div>
                    <Divider />
                    <div>
                        <div>Here goes the details of the patients</div>
                        <div>Here goes the options for the doctor</div>
                    </div>
                </div>
                <div>

                </div>
            </Grid.Col>
            <Grid.Col span={5} style={{padding:"24px 44px", height: "92vh", overflowY: "scroll", paddingBottom:14}}>
                <Divider label="Patient Medical History" style={{marginBottom: 14}} />
                <Timeline active={2} bulletSize={18} radius="xs" lineWidth={2} color="cyan" reverseActive>
                    
                    <Timeline.Item title="Diabetes" >
                        <Text color="dimmed" size="sm" style={{margin: "14px 0px"}}><Text variant="link" component="span" inherit>Robert Gluesticker</Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, arcu eu placerat tempus, elit tortor consectetur mi, eu luctus quam nulla eget tortor. Curabitur lacinia, neque eu congue molestie, orci nisi ultrices eros, nec viverra mi erat sodales leo. Mauris in nunc augue. Mauris sodales, mauris vel pretium vehicula, ipsum felis iaculis libero, vitae sodales quam erat id magna. Morbi tincidunt ac erat ac sodales. Nulla sodales ipsum odio, quis tristique quam venenatis sed.</Text>

                        <Timeline active={1} color="yellow" bulletSize={16} lineWidth={1} reverseActive>

                            <Timeline.Item title="Prescription" >
                                <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                                <Text size="xs" mt={4}>12 minutes ago</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Examinations" >
                                <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                                <Text size="xs" mt={4}>12 minutes ago</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Consultation" >
                                <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                                <Text size="xs" mt={4}>45 minutes ago</Text>
                            </Timeline.Item>
                        </Timeline>
                        <Divider label="30th March 2022" labelPosition='right'/>
                    </Timeline.Item>
                    
                    <Timeline.Item title="Kidney Stone" >
                        <Text color="dimmed" size="sm" style={{margin: "14px 0px"}}><Text variant="link" component="span" inherit>Robert Gluesticker</Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, arcu eu placerat tempus, elit tortor consectetur mi, eu luctus quam nulla eget tortor. Curabitur lacinia, neque eu congue molestie, orci nisi ultrices eros, nec viverra mi erat sodales leo. Mauris in nunc augue. Mauris sodales, mauris vel pretium vehicula, ipsum felis iaculis libero, vitae sodales quam erat id magna. Morbi tincidunt ac erat ac sodales. Nulla sodales ipsum odio, quis tristique quam venenatis sed.</Text>

                        <Timeline active={3} bulletSize={16} color="orange" lineWidth={1} reverseActive>

                            <Timeline.Item title="Prescription" >
                                <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                                <Text size="xs" mt={4}>17th January 2022 7:30 AM</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Surgery" >
                                <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                                <Text size="xs" mt={4}>6:30 PM</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Examinations" >
                                <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                                <Text size="xs" mt={4}>9:00 AM</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Consultation" >
                                <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                                <Text size="xs" mt={4}>8:00 AM</Text>
                            </Timeline.Item>

                        </Timeline>

                        <Divider label="15th January 2022" labelPosition='right'/>
                    </Timeline.Item>

                    <Timeline.Item title="Heart Attack" >
                        <Text color="dimmed" size="sm" style={{margin: "14px 0px"}}><Text variant="link" component="span" inherit>Robert Gluesticker</Text> Phasellus diam elit, elementum in arcu non, varius dictum elit. Integer sapien leo, suscipit nec nisl sed, elementum consectetur risus. Etiam sed ipsum velit. Donec facilisis congue interdum. Nulla fringilla sem non lorem malesuada tempus. Pellentesque hendrerit neque ex, eget lacinia tortor viverra sed. Ut ligula est, mattis ac placerat sit amet, dictum a arcu.</Text>

                        <Timeline active={2} bulletSize={16} color="orange" lineWidth={1} reverseActive>

                            <Timeline.Item title="Prescription" >
                                <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                                <Text size="xs" mt={4}>2:15 PM</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Consultation" >
                                <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                                <Text size="xs" mt={4}>10:30 AM</Text>
                            </Timeline.Item>

                        </Timeline>
                        <Divider label="30th September 2021" labelPosition='right'/>
                    </Timeline.Item>


                    <Timeline.Item title="Chronic Headache" >
                        <Text color="dimmed" size="sm" style={{margin: "14px 0px"}}><Text variant="link" component="span" inherit>Robert Gluesticker</Text> Suspendisse maximus malesuada tellus. Ut efficitur lorem interdum urna efficitur vestibulum. Mauris accumsan tellus eget libero ultrices gravida.</Text>

                        <Timeline active={3} bulletSize={16} color="orange" lineWidth={1} reverseActive>

                            <Timeline.Item title="Prescription" >
                                <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                                <Text size="xs" mt={4}>4:00 PM</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Examinations" >
                                <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                                <Text size="xs" mt={4}>3:15 PM</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Consultation" >
                                <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                                <Text size="xs" mt={4}>9:10 AM</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Registration" >
                                <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                                <Text size="xs" mt={4}>8:20 AM</Text>
                            </Timeline.Item>

                        </Timeline>
                        <Divider label="5th June 2021" labelPosition='right'/>
                    </Timeline.Item>

                </Timeline>
            </Grid.Col>
            <Grid.Col span={3}>
                Here goes the info of differents treatment
            </Grid.Col>
        </Grid>
    </div>
  )
}

export default PatientFile