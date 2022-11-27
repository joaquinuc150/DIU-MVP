import React from 'react'
import NavBar from '../components/nav_bar'
import HistorySearch from '../components/history_search.jsx'
import PageNumber from '../components/page_number.jsx'
import { Button, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ReplayIcon from '@mui/icons-material/Replay';

export const HistoryPage = () => {
  return (
	<div>
		<div>
			<h1 className='page__title'>Mi Clínica</h1>
			<NavBar />
		</div>
		<div className='page'>
			<Grid className='history__header' display={'flex'}>
				<h2>Historial de horas</h2>
				<Button style={{marginLeft: 'auto', marginRight: '20px', color: '#E3F2FD', backgroundColor: '#1976D2', textTransform: 'none'}} href="/history">
					<SearchIcon/>
				</Button>
				<Button style={{color: '#E3F2FD', backgroundColor: '#1976D2', textTransform: 'none'}} href="/history">
					<ReplayIcon/>
				</Button>
			</Grid>
			<HistorySearch />
			<PageNumber />
		</div>
	</div>
  )
}

export default HistoryPage