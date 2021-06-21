import React, { useEffect, useState } from 'react';
import { Container, Grid, Header, Table } from 'semantic-ui-react';

/* eslint-disable no-console, no-unused-vars */
const Dashboard = () => {
  const [scans, setScans] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/scans').then(response => response.json()).then(setScans);
  }, []);
  console.debug(scans);

  return (
    <Container style={{ marginTop: '3em' }}>
      <Header as='h1'>
        NMAP dashboard
      </Header>
      <Header as='h2' dividing>
        Scans
      </Header>
      <Grid columns={1}>
        <Grid.Column>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>IP</Table.HeaderCell>
                <Table.HeaderCell>PORT</Table.HeaderCell>
                <Table.HeaderCell>PROTOCOL</Table.HeaderCell>
                <Table.HeaderCell>STATUS</Table.HeaderCell>
                <Table.HeaderCell>TRANSPORT</Table.HeaderCell>
                <Table.HeaderCell>SCANNED AT</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                scans.map(scan => 
                  <Table.Row key={scan.SCAN_ID}>
                    <Table.Cell>{scan.SCAN_ID}</Table.Cell>
                    <Table.Cell>{scan.IP}</Table.Cell>
                    <Table.Cell>{scan.PORT}</Table.Cell>
                    <Table.Cell>{scan.PROTOCOL}</Table.Cell>
                    <Table.Cell>{scan.STATUS}</Table.Cell>
                    <Table.Cell>{scan.TRANSPORT}</Table.Cell>
                    <Table.Cell>{scan.SCAN_DATE}</Table.Cell>
                  </Table.Row>
                )
              }
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
/* eslint-enable no-console, no-unused-vars */

export default Dashboard;
