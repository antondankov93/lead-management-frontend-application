import React, {FC} from 'react';
import styled from 'styled-components';
import { AuthButton } from "@/components/AuthButton/inex";
import {ArrowDown} from "lucide-react";
import Link from "next/link";

const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const Sidebar = styled.aside`
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const Logo = styled.h1`
    font-size: 35px;
    margin-bottom: 30px;
`;

const Menu = styled.ul`
    list-style: none;
    padding: 0;
    flex-grow: 1;
`;

const MenuItem = styled.li<{ active?: boolean }>`
    padding: 10px;
    cursor: pointer;
    background-color: ${(props) => (props.active ? '#e0e0e0' : 'transparent')};
    border-radius: 5px;
    margin-bottom: 5px;
`;

const Content = styled.main`
    flex: 1;
    padding: 20px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    font-size: 20px;
`;

const SearchAndStatus = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 5px;
`;

const SearchInput = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    min-width: 300px;
`;

const StatusSelect = styled.select`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.35);
`;

const GridTable = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 10px;
`;

const GridHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
`;

const GridCell = styled.div`
    padding-left: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;
`;

const Pagination = styled.div`
    display: flex;
    grid-column: 1 / span 4;
    justify-content: flex-end;
    margin-top: 10px;
`;

const PageButton: FC<{isActive?: boolean}> = styled.button`
    padding: 8px 12px;
    margin: 0 5px;
    border: ${props => (props.isActive ? '1px solid #ccc' : 'none')};
    border-radius: 2px;
    background-color: transparent;
    cursor: pointer;
`;

const LeadsPage = () => {
    const leads = [
        { name: 'Jorge Ruiz', submitted: '02/02/2024, 2:45 PM', status: 'Pending', country: 'Mexico' },
        { name: 'Bahar Zamir', submitted: '02/02/2024, 2:45 PM', status: 'Pending', country: 'Mexico' },
        { name: 'Mary Lopez', submitted: '02/02/2024, 2:45 PM', status: 'Pending', country: 'Brazil' },
        { name: 'Li Zijin', submitted: '02/02/2024, 2:45 PM', status: 'Pending', country: 'South Korea' },
        { name: 'Mark Antonov', submitted: '02/02/2024, 2:45 PM', status: 'Pending', country: 'Russia' },
        { name: 'Jane Ma', submitted: '02/02/2024, 2:45 PM', status: 'Pending', country: 'Mexico' },
        { name: 'Anand Jain', submitted: '02/02/2024, 2:45 PM', status: 'Reached Out', country: 'Mexico' },
        { name: 'Anna Voronova', submitted: '02/02/2024, 2:45 PM', status: 'Pending', country: 'France' },
    ];

    return (
        <Container>
            <Sidebar>
                <Link href="/">
                    <Logo>almă</Logo>
                </Link>
                <Menu>
                    <MenuItem active>Leads</MenuItem>
                    <MenuItem>Settings</MenuItem>
                </Menu>
                <AuthButton />
            </Sidebar>
            <Content>
                <Header>
                    <Title>Leads</Title>
                    <SearchAndStatus>
                        <SearchInput placeholder="Search" />
                        <StatusSelect>
                            <option value="">Status</option>
                            <option value="Pending">Pending</option>
                            <option value="Reached Out">Reached Out</option>
                        </StatusSelect>
                    </SearchAndStatus>
                </Header>
                <GridTable>
                    <GridHeader>Name <ArrowDown size={20} /></GridHeader>
                    <GridHeader>Submitted <ArrowDown size={20}  /></GridHeader>
                    <GridHeader>Status <ArrowDown size={20}  /></GridHeader>
                    <GridHeader>Country <ArrowDown size={20}  /></GridHeader>
                    {leads.map((lead, index) => (
                        <>
                            <GridCell key={`${index}-name`}>{lead.name}</GridCell>
                            <GridCell key={`${index}-submitted`}>{lead.submitted}</GridCell>
                            <GridCell key={`${index}-status`}>{lead.status}</GridCell>
                            <GridCell key={`${index}-country`}>{lead.country}</GridCell>
                        </>
                    ))}
                    <Pagination>
                        <PageButton isActive>1</PageButton>
                        <PageButton>2</PageButton>
                        <PageButton>3</PageButton>
                        <PageButton>></PageButton>
                    </Pagination>
                </GridTable>

            </Content>
        </Container>
    );
};

export default LeadsPage;
