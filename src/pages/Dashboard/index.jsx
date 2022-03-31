import { Avatar, Card, Grid, Select } from '@mantine/core'
import React from 'react'
import { BsCaretDownFill, BsCaretUpFill, BsColumnsGap, BsCurrencyDollar, BsPerson, BsPersonPlus, BsSquareFill } from 'react-icons/bs'
import { IoCaretDown } from 'react-icons/io5'
import { MdAddTask } from 'react-icons/md'
import withProtect from '../../utils/withProtect'
import DashboardAreaChart from './AreaChart'
import DashboardBarChart from './BarChart'
import './dashboard.scss'
import DashboardPieChart from './PieChart'

const sorting = [
    { value: 'this-year', label: 'This year' },
    { value: 'last-year', label: 'Last year' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' }
]

const dataAgeGap = [
    {
        name: '0 to 4yo',
        patients: 320,
        color:'#d5d5d5'
    },
    {
        name: '5 to 11yo',
        patients: 450,
        color: '#00C49F'
    },
    {
        name: '12 to 25yo',
        patients: 560,
        color: '#73a5c6'
    },
    {
        name: '26 to 45yo',
        patients: 480,
        color: '#FFD580'
    },
    {
        name: '46 and more yo',
        patients: 220,
        color: '#ff4f4b'
    }
];

const dataNutrition = [
    {
        name: 'Completed',
        value: 80,
        color: '#6adac5'
    },
    {
        name: 'In progress',
        value: 120,
        color: '#4981a7'
    },
    {
        name: 'Gave up',
        value: 34,
        color: '#c0a266'
    },
    {
        name: 'Readmitted',
        value: 22,
        color: '#9456a3'
    },
    {
        name: 'Referred',
        value: 18,
        color: '#89d56f'
    }
];

const dataGender = [
    { name: "Man", value: 1724, color: "#0088FE" },
    { name: "Woman", value: 1516,  color: "#00C49F" }
]

const dataContraceptive = [
    { name: "Condoms", value: 174, color: "#35ac53" },
    { name: "Pills", value: 124, color: "#35ac53" },
    { name: "IUDs", value: 56, color: "#35ac53" },
    { name: "Implants", value: 36, color: "#35ac53" },
    { name: "Injections", value: 12, color: "#35ac53" },
    { name: "Ring", value: 68, color: "#35ac53" },
    { name: "Diaphragm", value: 75, color: "#35ac53" }
];

const dataVaccines = [
    { name: "Hepatitis B", value: 177, color: "#63dac4" },
    { name: "DTaP", value: 120,  color: "#63dac4" },
    { name: "Hib", value: 96,  color: "#63dac4" },
    { name: "IPV", value: 133,  color: "#63dac4" },
    { name: "PCV", value: 150,  color: "#63dac4" },
    { name: "RV", value: 65,  color: "#63dac4" },
    { name: "Flu", value: 128,  color: "#63dac4" }
];

const dataDistance = [
    { name: "Less than 5KM away", value: 1724, color: "#408bcc" },
    { name: "More than 3.5 miles away", value: 1516,  color: "#c22f2f" }
]



function Dashboard() {
  return (
    <div style={{padding: '14px 28px'}}>
        <Grid gutter='md' style={{marginBottom:14}}>
            <div className='headerMainPage'>
                <p style={{display: 'inline-flex', alignItems: 'center', fontSize:24, fontWeight:'bold'}}><BsColumnsGap fontSize={22} style={{marginRight:8}} /> Dashboard</p>
                <span className='rightSection'>
                    <Card style={{padding: 0}}>
                      <Select
                        placeholder='Sort by' 
                        variant="unstyled"
                        defaultChecked="this-year"
                        style={{ width: 200, paddingLeft: 14}}
                        data={sorting}
                        searchable
                        clearable
                        rightSection={<IoCaretDown size={14} color="#a3a3a3"/>}
                    />  
                    </Card>
                    
                </span> 
            </div>
        </Grid>
        <Grid gutter='lg' style={{marginBottom:14}}>
            <Grid.Col span={3}>
                <Card>
                    <div className='cardSpecs'>
                        <Avatar color="red" size={48} radius="xl">
                            <MdAddTask size={24} />
                        </Avatar>
                        <div className='rightSectionSpecs'>
                            <p>Important Tasks</p>
                            <h3>160</h3>
                            <span>
                                <BsCaretDownFill size={12} color="red" />
                                <p>
                                    <b>42 task </b>
                                    high priority
                                </p>
                            </span>
                        </div>
                    </div>
                </Card>
            </Grid.Col>
            <Grid.Col span={3}>
                <Card>
                    <div className='cardSpecs'>
                        <Avatar color="blue" size={48} radius="xl">
                            <BsPersonPlus size={24} />
                        </Avatar>
                        <div className='rightSectionSpecs'>
                            <p>New Patients</p>
                            <h3>240</h3>
                            <span>
                                <BsCaretUpFill color='green' />
                                <p>
                                    <b>76 Patients </b>
                                    waiting
                                </p>
                            </span>
                        </div>
                    </div>
                </Card>
            </Grid.Col>
            <Grid.Col span={3}>
                <Card>
                    <div className='cardSpecs'>
                        <Avatar color="orange" size={48} radius="xl">
                            <BsPerson size={24} />
                        </Avatar>
                        <div className='rightSectionSpecs'>
                            <p>Total Patients</p>
                            <h3>3,240</h3>
                            <span>
                                <BsCaretUpFill color='green' />
                                <p>
                                    <b>120 </b>
                                    increase
                                </p>
                            </span>
                        </div>
                    </div>
                </Card>
            </Grid.Col>
            <Grid.Col span={3}>
                <Card>
                    <div className='cardSpecs'>
                        <Avatar color="green" size={48} radius="xl">
                            <BsCurrencyDollar size={24} />
                        </Avatar>
                        <div className='rightSectionSpecs'>
                            <p>Total payments</p>
                            <h3>$56.8k</h3>
                            <span>
                                <BsCaretUpFill color='green' />
                                <p>
                                    <b>24% </b>
                                    increase
                                </p>
                            </span>
                        </div>
                    </div>
                </Card>
            </Grid.Col>
        </Grid>
        <Grid gutter='lg' style={{marginBottom:14}}>
            <Grid.Col span={9}>
                <Card style={{position: 'relative'}}>
                    <h3 className='cardTitle'>Activity</h3>
                    <div style={{width: "100%", height:408}}>
                        <DashboardAreaChart />
                    </div>
                    <p style={{position: "absolute", top: 65, right: 45, fontSize: 18, color:"#a6a6a6"}}>2021-2022</p>
                </Card>
            </Grid.Col>
            <Grid.Col span={3}>
                <Card className='topDivision'>
                    <h3 className='cardTitle'>Top Division</h3>
                    <div className='divisionCard'>
                        <Avatar color="blue" size={52} radius="xl">
                            <BsPerson size={28} />
                        </Avatar>
                        <span>
                            <h4>General Physician</h4>
                            <p>42%</p>
                        </span>
                    </div>
                    <div className='divisionCard'>
                        <Avatar color="blue" size={52} radius="xl">
                            <BsPerson size={28} />
                        </Avatar>
                        <span>
                            <h4>Internal Medicine</h4>
                            <p>18%</p>
                        </span>
                    </div>
                    <div className='divisionCard'>
                        <Avatar color="blue" size={52} radius="xl">
                            <BsPerson size={28} />
                        </Avatar>
                        <span>
                            <h4>Skin Specialist</h4>
                            <p>24%</p>
                        </span>
                    </div>
                    <div className='divisionCard'>
                        <Avatar color="blue" size={52} radius="xl">
                            <BsPerson size={28} />
                        </Avatar>
                        <span>
                            <h4>Cardiologist</h4>
                            <p>12%</p>
                        </span>
                    </div>
                    <div className='divisionCard'>
                        <Avatar color="blue" size={52} radius="xl">
                            <BsPerson size={28} />
                        </Avatar>
                        <span>
                            <h4>Reproduction</h4>
                            <p>6%</p>
                        </span>
                    </div>
                    <div className='divisionCard'>
                        <Avatar color="blue" size={52} radius="xl">
                            <BsPerson size={28} />
                        </Avatar>
                        <span>
                            <h4>Surgery</h4>
                            <p>3%</p>
                        </span>
                    </div>
                </Card>
            </Grid.Col>
        </Grid>
        <Grid gutter='lg' style={{marginBottom:14}}>
            <Grid.Col span={6}>
                <Card>
                    <h3 className='cardTitle'>Age</h3>
                    <div style={{width: "100%", height:250}}>
                        <DashboardBarChart data={dataAgeGap} dataKey="patients" />
                    </div>
                    <p style={{position: "absolute", top: 22, right: 45, fontSize: 16, color:"#a6a6a6"}}>2021-2022</p>
                </Card>
            </Grid.Col>
            <Grid.Col span={6}>
                <Card>
                    <h3 className='cardTitle'>Gender</h3>
                    <div style={{width: "100%", height:250}} className='piechart_gender'>
                        <div className='chart'><DashboardPieChart data={dataGender} /></div>
                        <div className='center_data'>
                            <h4>3,240</h4>
                            <p>Patients this year</p>
                        </div>
                        <div className='right_data'>
                            <div className='men_data'>
                                <span><BsSquareFill color='#0088fe' size={14} style={{marginRight:8}} /> Man</span>
                                <p><b>56%</b> (1724)</p>
                            </div>
                            <div className='women_data'>
                                <span><BsSquareFill color='#00c49f' size={14} style={{marginRight:8}} /> Woman</span>
                                <p><b>44%</b> (1516)</p>
                            </div>
                        </div>
                    </div>
                    <p style={{position: "absolute", top: 22, right: 45, fontSize: 16, color:"#a6a6a6"}}>2021-2022</p>
                </Card>
            </Grid.Col>
        </Grid>
        <Grid gutter='lg' style={{marginBottom:14}}>
            <Grid.Col span={6}>
                <Card>
                    <h3 className='cardTitle'>Nutrition Program</h3>
                    <div style={{width: "100%", height:300}} className="piechart_gender">
                        <div className='chart'><DashboardPieChart data={dataNutrition} /></div>
                        <div className='center_data'>
                            <h4>240</h4>
                            <p>Children this year</p>
                        </div>
                        <div className='right_data' style={{top:"27%"}}>
                            {dataNutrition.map((entry, index) => (
                                <div className='men_data' style={{marginBottom: 14}}>
                                    <span><BsSquareFill color={entry.color} size={14} style={{marginRight:8}} /> {entry.name} ({entry.value})</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p style={{position: "absolute", top: 22, right: 45, fontSize: 16, color:"#a6a6a6"}}>2021-2022</p>
                </Card>
            </Grid.Col>
            <Grid.Col span={6}>
                <Card>
                    <h3 className='cardTitle'>Distance from clinic</h3>
                    <div style={{width: "100%", height:300}} className="piechart_gender">
                        <div className='chart'><DashboardPieChart data={dataDistance} dataKey="value" /></div>
                        <div className='center_data'>
                            <p>Reached patients up to</p>
                            <h4 style={{fontSize: 24}}>17.3Km away</h4>
                        </div>
                        <div className='right_data' style={{right: "15%", top: "32%"}}>
                            <div className='men_data'>
                                <span><BsSquareFill color='#408bcc' size={14} style={{marginRight:8}} /> Less than 5km away</span>
                                <p><b>68%</b> (1703)</p>
                            </div>
                            <div className='women_data'>
                                <span><BsSquareFill color='#c22f2f' size={14} style={{marginRight:8}} /> More than 5km away</span>
                                <p><b>32%</b> (1116)</p>
                            </div>
                        </div>
                    </div>
                    <p style={{position: "absolute", top: 22, right: 45, fontSize: 16, color:"#a6a6a6"}}>2021-2022</p>
                </Card>
            </Grid.Col>
        </Grid>
        <Grid gutter='lg' style={{marginBottom:14}}>
            <Grid.Col span={6}>
                <Card>
                    <h3 className='cardTitle'>Vaccines (0 to 11 months old)</h3>
                    <div style={{width: "100%", height:300}}>
                        <DashboardBarChart data={dataVaccines} dataKey="value" />
                    </div>
                    <p style={{position: "absolute", top: 22, right: 45, fontSize: 16, color:"#a6a6a6"}}>2021-2022</p>
                </Card>
            </Grid.Col>
            <Grid.Col span={6}>
                <Card>
                    <h3 className='cardTitle'>Contraceptives</h3>
                    <div style={{width: "100%", height:300}}>
                        <DashboardBarChart data={dataContraceptive} dataKey="value" />
                    </div>
                    <p style={{position: "absolute", top: 22, right: 45, fontSize: 16, color:"#a6a6a6"}}>2021-2022</p>
                </Card>
            </Grid.Col>
        </Grid>
    </div>
  )
}

export default withProtect(Dashboard, true)