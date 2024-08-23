import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css';
import 'datatables.net-bs4';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-buttons-bs4';

export default function DataTableFeature({ data = [], columns = [], title, buttons = [], onUpdate, onDelete }) {
    const tableRef = useRef(null);

    useEffect(() => {
        const $table = $(tableRef.current);

        // Destruir cualquier instancia existente de DataTable
        if ($.fn.DataTable.isDataTable(tableRef.current)) {
            $table.DataTable().destroy();
        }

        // Inicializar DataTable
        const table = $table.DataTable({
            responsive: true,
            lengthChange: true,
            autoWidth: false,
            data: data,
            columns: columns,
            buttons: buttons
        });

        // Añadir contenedor de botones
        table.buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');

        // Agregar manejadores de eventos para los botones de acción
        $('#example1').on('click', '.btn-update', function () {
            const userId = $(this).data('id');
            onUpdate(userId);
        });

        $('#example1').on('click', '.btn-delete', function () {
            const userId = $(this).data('id');
            onDelete(userId);
        });

        // Cleanup function to destroy DataTable on component unmount
        return () => {
            if ($.fn.DataTable.isDataTable(tableRef.current)) {
                table.destroy();
            }
        };
    }, [data, columns, buttons, onUpdate, onDelete]);

    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">{title}</h3>
                            </div>
                            <div className="card-body">
                                <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="dataTables_length" id="example1_length">
                                                {/* Aquí puedes agregar un control para la longitud de la tabla */}
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div id="example1_filter" className="dataTables_filter">
                                                {/* Aquí puedes agregar un control de búsqueda */}
                                            </div>
                                        </div>
                                    </div>
                                    <table id="example1" ref={tableRef} className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                {columns.map((column, index) => (
                                                    <th key={index}>{column.title}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                {columns.map((column, index) => (
                                                    <th key={index}>{column.title}</th>
                                                ))}
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
