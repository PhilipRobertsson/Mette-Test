import React, {useState} from 'react'
import Collapse from '../Collapse/styles/Collapse'
import {Container, Content, Button, Column, Link, Title} from './styles/Collapse'
// import {Button} from './styles/Collapse'

export default function Collapsible(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (   
    <Container className="collapsible">
        <Button className="Toggle" onClick={() => setIsOpen(!isOpen)}>
            {props.label}
        </Button>

        {isOpen && <Content className="content">
            {props.children}
        </Content>}

    </Container>
    )
}