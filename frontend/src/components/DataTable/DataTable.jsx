import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import './DataTable.css';

const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;
	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled.button`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #e5e5e5;
	cursor: pointer;
	border: none;
`;

// Componente para a barra de pesquisa
const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<>
		<TextField
			id="search"
			type="text"
			placeholder="Pesquisar por Nome"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<ClearButton type="button" onClick={onClear}>
			X
		</ClearButton>
	</>
);

export default function DataTableComponent({ dataTable = [], columns }) {
	const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

	// Filtrar os dados da tabela com base no texto da pesquisa
	const filteredItems = useMemo(() => {
		return dataTable.filter(
			item =>
				Object.values(item)
					.join(' ')
					.toLowerCase()
					.includes(filterText.toLowerCase())
		);
	}, [dataTable, filterText]);

	const paginationOptions = {
		rowsPerPageText: 'Linhas por página',
		rangeSeparatorText: 'de',
		noRowsPerPage: false,
		selectAllRowsItem: true,
		selectAllRowsItemText: 'Todos'
	};

	const customStyles = {
		rows: {
			style: {
				minHeight: '72px',
				fontSize: '1rem',
			},
		},
		headCells: {
			style: {
				display: 'flex',
				justifyContent: 'center',
				fontSize: '1.2rem',
				paddingLeft: '8px',
				paddingRight: '8px',
                backgroundColor: '#000',
                color: '#fff'
			},
		},
		cells: {
			style: {
				display: 'flex',
				justifyContent: 'center',
				paddingLeft: '8px',
				paddingRight: '8px',
			},
		},
	};

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent
				onFilter={e => setFilterText(e.target.value)}
				onClear={handleClear}
				filterText={filterText}
			/>
		);
	}, [filterText, resetPaginationToggle]);

	return (
		<DataTable
			columns={columns}
			data={filteredItems} // Dados filtrados
			customStyles={customStyles}
			paginationComponentOptions={paginationOptions}
			noDataComponent="Nenhum dado disponível"
			pagination
			highlightOnHover
			striped
			responsive
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
		/>
	);
}
