import React from 'react';
import styled from 'styled-components';

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
    justify-content: space-between;
`;

const Logo = styled.h1`
    font-size: 24px;
    margin-bottom: 30px;
`;

const Menu = styled.ul`
    list-style: none;
    padding: 0;
`;

const MenuItem = styled.li<{ active?: boolean }>`
    padding: 10px;
    cursor: pointer;
    background-color: ${(props) => (props.active ? '#e0e0e0' : 'transparent')};
    border-radius: 5px;
    margin-bottom: 5px;
`;

const AdminSection = styled.div`
    display: flex;
    align-items: center;
`;

const AdminIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

const AdminText = styled.span`
    font-weight: bold;
`;

const Content = styled.main`
    flex: 1;
    padding: 20px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const Title = styled.h2`
    font-size: 20px;
`;

const SearchAndStatus = styled.div`
    display: flex;
`;

const SearchInput = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
`;

const StatusSelect = styled.select`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
                <Logo>almă</Logo>
                <Menu>
                    <MenuItem active>Leads</MenuItem>
                    <MenuItem>Settings</MenuItem>
                </Menu>
                <AdminSection>
                    <AdminIcon>A</AdminIcon>
                    <AdminText>Admin</AdminText>
                </AdminSection>
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
                <Table>
                    <thead>
                    <tr>
                        <th>Name ↓</th>
                        <th>Submitted ↓</th>
                        <th>Status</th>
                        <th>Country ↓</th>
                    </tr>
                    </thead>
                    <tbody>
                    {leads.map((lead, index) => (
                        <tr key={index}>
                            <td>{lead.name}</td>
                            <td>{lead.submitted}</td>
                            <td>{lead.status}</td>
                            <td>{lead.country}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <Pagination>
                    <PageButton>1</PageButton>
                    <PageButton>2</PageButton>
                    <PageButton>3</PageButton>
                    <PageButton>></PageButton>
                </Pagination>
            </Content>
        </Container>
    );
};

export default LeadsPage;