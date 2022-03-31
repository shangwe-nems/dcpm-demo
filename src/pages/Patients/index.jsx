import { Grid, Pagination, SegmentedControl, Select } from '@mantine/core';
import React, { useState } from 'react'
import { BsPeople, BsPersonBadge, BsViewList, BsSortDownAlt } from "react-icons/bs";
import { IoCaretDown } from "react-icons/io5";
import DisplayCard from '../../components/DisplayCard';
import DisplayList from '../../components/DisplayList';
import withProtect from '../../utils/withProtect';
import './patients.scss'

const sorting = [
  { value: 'name', label: 'Name' },
  { value: 'region', label: 'Region' },
  { value: 'diagnosis', label: 'Diagnosis' },
  { value: 'triage', label: 'Triage' }
]

function PatientHistory() {
  const [currentDisplay, setcurrentDisplay] = useState('card')

  return (
    <div>
      <div style={{padding: '14px 28px'}}>
          <Grid>
              <div className='headerMainPage'>
                  <p style={{display: 'inline-flex', alignItems: 'center', fontSize:24, fontWeight:'bold'}}><BsPeople fontSize={24} style={{marginRight:8}} /> Patients</p>
                  <span className='rightSection'>
                      <Select
                        icon={<BsSortDownAlt />}
                        placeholder='Sort by' 
                        variant='filled'
                        style={{marginRight: 14, width: 200, border:'none'}}
                        data={sorting}
                        searchable
                        clearable
                        rightSection={<IoCaretDown size={14} color="#a3a3a3"/>}
                      />
                      <SegmentedControl size='md' onChange={setcurrentDisplay} data={[
                          { label: <BsPersonBadge />, value: 'card' },
                          { label: <BsViewList />, value: 'list' },
                      ]} /> 
                  </span>
              </div>
          </Grid>
          <div className='patientList'>
            {
                currentDisplay === 'card' ? <DisplayCard /> : 
                currentDisplay === 'list' ? <DisplayList /> 
            : null }
          </div>
          <div className='pagination'>
            <Pagination total={10} color="cyan" withEdges size="md" />
          </div>
      </div>
    </div>
  )
}

export default withProtect(PatientHistory, true)