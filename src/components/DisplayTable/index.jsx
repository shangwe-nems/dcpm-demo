import React from 'react'
import { Avatar, Card, Grid } from '@mantine/core'

function DisplayTable() {
  return (
    <Grid gutter={14}>            
        <Grid.Col span={3}>
            <Card shadow="sm" p="lg" radius="md" style={{display:''}}>
                <Card.Section>
                    <Avatar />
                    <div>
                        Card Table  
                    </div>
                </Card.Section>
                <Card.Section>

                </Card.Section>
            </Card>
        </Grid.Col>
    </Grid>
  )
}

export default DisplayTable