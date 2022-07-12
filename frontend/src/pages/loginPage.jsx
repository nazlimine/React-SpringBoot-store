import React from "react";
import { Container ,Content,FlexboxGrid,Form,Panel,Button,ButtonToolbar} from 'rsuite';

export const LoginPage = () => {

    return(

        <Container>
            <Content>
                <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={12}>
                    <Panel header={<h3>Login</h3>} bordered>
                    <Form fluid>
                        <Form.Group>
                            <Form.ControlLabel>Username or email address</Form.ControlLabel>
                            <Form.Control name="name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Password</Form.ControlLabel>
                            <Form.Control name="password" type="password" autoComplete="off" />
                        </Form.Group>
                        <Form.Group>
                        <ButtonToolbar>
                            <Button >Sign in</Button>
                            <Button>Forgot password?</Button>
                        </ButtonToolbar>
                        </Form.Group>
                    </Form>
                    </Panel>
                </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
        </Container>
    )
} 
export default LoginPage;