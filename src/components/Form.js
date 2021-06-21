import React, { useState } from 'react';
import { Button, Container, Form, Grid, Header } from 'semantic-ui-react';

const SubmitForm = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  /* eslint-disable no-console */
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('scan', selectedFile);
    console.debug('formdata', selectedFile);
    fetch('http://localhost:8080/scans',
      {
        method: 'POST',
        body: formData
      }
    ).then((result) => {
      console.debug('Success:', result);
    }, (error) => {
      console.error('Error:', error);
    });
  };
  /* eslint-enable no-console */

  return (
    <Container style={{ marginTop: '3em' }}>
      <Header as='h1'>
        Submit new scan result
      </Header>
      <Header as='h2' dividing>
        Please only submit gnmap format
      </Header>
      <Grid columns={1}>
        <Grid.Column>
          <Form onSubmit={handleSubmission}>
            <Form.Field>
              <label htmlFor='scan'>File</label>
              <input id='scan' name='scan' type='file' onChange={changeHandler} />
              {isSelected ? (
                <div>
                  <p>Filename: {selectedFile.name}</p>
                  <p>Size in bytes: {selectedFile.size}</p>
                </div>
              ) : (
                <p>Select a file to show details</p>
              )}
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>

        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default SubmitForm;
