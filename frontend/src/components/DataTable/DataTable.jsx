import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-dt'; // Biblioteca principal do DataTable
import language from 'datatables.net-plugins/i18n/pt-BR.mjs'; // Arquivo de idioma em português

import './DataTable.css';

export default function DataTable({ children, dataTable, idTable }) {
    useEffect(() => {
        $(`#${idTable}`).DataTable({
            data: dataTable,
            columns: children.map((child) => ({ title: child.props.children })),
            language: language
        });

        return () => {
            $(`#${idTable}`).DataTable().destroy();
        };
        
    }, [dataTable, idTable, children]);

    return (
        <table id={idTable} className="display table table-bordered table-responsive nowrap dataTableCustom" style={{ width: "100%" }}>
            <thead className='table-dark'>
                <tr>
                    {children}
                </tr>
            </thead>
        </table>
    );
}
