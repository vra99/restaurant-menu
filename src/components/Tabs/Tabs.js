import React, { useState } from 'react';
import styled from 'styled-components';

export const Tabs = (props) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const activeTab = props.children[activeTabIndex];
    return (
        <Container>
            <div className="tabs">
                {props.children.map((tab, i) => (
                    <Button
                        onClick={() => {
                            setActiveTabIndex(i);
                        }}
                        key={i}
                        color={i === activeTabIndex ? '#00ADB5' : '#697386'}
                        style={{
                            borderBottom: i === activeTabIndex ? '2px solid #00ADB5' : '',
                        }}
                    >
                        {tab.props.title}
                    </Button>
                ))}
            </div>
            <div className="tab-indicator-container">
                <div
                    className="tab-indicator"
                    style={{
                        width: 100 / props.children.length + '%',
                        transform: `translateX(${activeTabIndex * 100}%)`,
                    }}
                />
            </div>
            <CardContainer>{activeTab?.props.children}</CardContainer>
        </Container>
    );
};

Tabs.displayName = 'Tabs';

const Container = styled.div`
    .tabs {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #dddddd !important;
    }
    .box-1 {
        width: 75%;
        padding: 20px;
        font-weight: bold;
    }
`;
const Button = styled.button`
    color: ${(props) => props.color}!important;
    font-size: 1.15rem !important;
    margin-right: 14px !important;
    cursor: pointer;
`;

const CardContainer = styled.div`
    margin: 50px 0px;
`;
