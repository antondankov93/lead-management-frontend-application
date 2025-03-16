import React, { FC, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { AuthButton } from '@/components/AuthButton/inex'
import { ArrowDown, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { LightGray, White } from '@/styles/helpers/colors'
import { selectLeadsList } from '@/store/leads/selectors'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/auth/selectors'
import { useRouter } from 'next/navigation'

type HeaderButtonProps = {
  handleSort: (field: string) => void
  sortField: string | undefined
  sortOrder: 'asc' | 'desc'
  name: string
}

const Container = styled.div`
    display: flex;
    height: 100vh;
`

const Sidebar = styled.aside`
  width: 200px;
  background-color: ${White};
  border-right: 1px solid ${LightGray};
  padding: 20px;
  display: flex;
  flex-direction: column;
`

const Logo = styled.h1`
    font-size: 35px;
    margin-bottom: 30px;
`

const Menu = styled.ul`
    list-style: none;
    padding: 0;
    flex-grow: 1;
`

const MenuItem = styled.li<{ active?: boolean }>`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#e0e0e0' : 'transparent')};
    border-radius: 5px;
    margin-bottom: 5px;
`

const Content = styled.main`
    flex: 1;
    padding: 20px;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    font-size: 20px;
`

const NoLeadsFound = styled.h1`
  text-align: center;
  margin-top: 100px;
`

const GridTable = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 10px;
`

const GridHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
`

const GridCell = styled.div`
  padding-left: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${LightGray};
`

const Pagination = styled.div`
    display: flex;
    grid-column: 1 / span 4;
    justify-content: flex-end;
    margin-top: 10px;
`

const PageButton: FC<{ isActive?: boolean; children: number; onClick: () => void }> = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  border: ${(props) => (props.isActive ? '1px solid #ccc' : 'none')};
    border-radius: 2px;
    background-color: transparent;
    cursor: pointer;
`

const HeaderButton: FC<HeaderButtonProps> = ({ handleSort, sortField, sortOrder, name }) => {
  return (
    <GridHeader onClick={() => handleSort(name)}>
      Name{' '}
      {sortField === name ? (
        sortOrder === 'asc' ? (
          <ArrowUp size={20} />
        ) : (
          <ArrowDown size={20} />
        )
      ) : (
        <ArrowDown size={20} />
      )}
  </GridHeader>
  )
}

const LeadsPage = () => {
  const user = useSelector(selectUser)
  const leads = useSelector(selectLeadsList)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [sortField, setSortField] = useState<string>('createdAt')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const router = useRouter()

  const itemsPerPage = 10

  useEffect(() => {
  !user && router.push('/auth')
  }, [user])

  const sortedLeads = useMemo(() => {
    if (!sortField) return leads

    return [...leads].sort((a, b) => {
      const field = sortField as 'firstName' | 'status' | 'createdAt'

      // @ts-ignore
      if (a[field] < b[field]) return sortOrder === 'asc' ? -1 : 1
      // @ts-ignore
      if (a[field] > b[field]) return sortOrder === 'asc' ? 1 : -1
      return 0
    })
  }, [leads, sortField, sortOrder])

    const paginatedLeads = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
        return sortedLeads.slice(start, start + itemsPerPage)
    }, [sortedLeads, currentPage, itemsPerPage])

    const handleSort = (field: string) => {
      setSortOrder(sortField === field && sortOrder === 'asc' ? 'desc' : 'asc')
      setSortField(field)
    };

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
        </Header>
        {leads.length ?
          (<GridTable>
            <HeaderButton {...{ handleSort, sortField, sortOrder }} name="name" />
            <HeaderButton {...{ handleSort, sortField, sortOrder }} name="createdAt" />
            <HeaderButton {...{ handleSort, sortField, sortOrder }} name="status" />
            <HeaderButton {...{ handleSort, sortField, sortOrder }} name="country" />
            {paginatedLeads.map((lead, index) => (
              <>
                <GridCell key={`${index}-name`}>{lead.firstName} {lead.lastName}</GridCell>
                <GridCell key={`${index}-submitted`}>{lead.createdAt}</GridCell>
                <GridCell key={`${index}-status`}>{lead.status}</GridCell>
                <GridCell key={`${index}-country`}>{lead.countryOfCitizenship}</GridCell>
              </>
            ))}
            <Pagination>
              {Array.from({ length: Math.ceil(leads.length / itemsPerPage) }, (_, i) => (
                <PageButton key={i} isActive={currentPage === i + 1} onClick={() => setCurrentPage(i + 1)}>
                  {i + 1}
                </PageButton>
              ))}
            </Pagination>
          </GridTable>)
          : <NoLeadsFound>No leads found</NoLeadsFound>
        }
      </Content>
    </Container>
  );
}

export default LeadsPage
