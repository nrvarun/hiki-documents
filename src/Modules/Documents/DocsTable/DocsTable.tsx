import * as React from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import Paper from "@mui/material/Paper";

import IconButton from "@mui/material/IconButton";

import { visuallyHidden } from "@mui/utils";

import { ChevronRight } from "@mui/icons-material";
import { Grid } from "@mui/material";

interface Data {
  uploadedBy: string;
  serNo: string;
  docTitle: string;
  uploadedOn: string;
  docType: string;
  docCategory: string;
}

function createData(
  uploadedOn: string,
  uploadedBy: string,
  docTitle: string,
  serNo: string,
  docType: string,
  docCategory: string
): Data {
  return {
    uploadedOn,
    uploadedBy,
    docTitle,
    serNo,
    docType,
    docCategory,
  };
}

const rows = [
  createData(
    "12 Feb 2021",
    "Full Client Name 1",
    "Employee Name",
    "A2934NF;AD23",
    "Passport",
    "IT / GST Returns"
  ),
  createData(
    "12 Feb 2021",
    "Full Client Name 3",
    "Employee Name",
    "A2934NF;AD23",
    "DL",
    "IT / GST Returns"
  ),
  createData(
    "12 Feb 2021",
    "Full Client Name 4",
    "Employee Name",
    "A2934NF;AD23",
    "Passport",
    "IT / GST Returns"
  ),
  createData(
    "12 Feb 2021",
    "Full Client Name 2",
    "Employee Name",
    "A2934NF;AD23",
    "DL",
    "IT / GST Returns"
  ),
  createData(
    "12 Feb 2021",
    "Full Client Name 11",
    "Employee Name",
    "A2934NF;AD23",
    "Passport",
    "IT / GST Returns"
  ),
  createData(
    "12 Feb 2021",
    "Full Client Name 12",
    "Employee Name",
    "A2934NF;AD23",
    "DL",
    "IT / GST Returns"
  ),
  createData(
    "12 Feb 2021",
    "Full Client Name 24",
    "Employee Name",
    "A2934NF;AD23",
    "Passport",
    "IT / GST Returns"
  ),
  createData(
    "12 Feb 2021",
    "Full Client Name 5",
    "Employee Name",
    "A2934NF;AD23",
    "DL",
    "IT / GST Returns"
  ),
  createData(
    "12 Feb 2021",
    "Full Client Name 7",
    "Employee Name",
    "A2934NF;AD23",
    "Passport",
    "IT / GST Returns"
  ),
  createData(
    "12 Feb 2021",
    "Full Client Name 8",
    "Employee Name",
    "A2934NF;AD23",
    "DL",
    "IT / GST Returns"
  ),
  createData(
    "12 Feb 2021",
    "Full Client Name 9",
    "Employee Name",
    "A2934NF;AD23",
    "Passport",
    "IT / GST Returns"
  ),
  createData(
    "12 Feb 2021",
    "Full Client Name 10",
    "Employee Name",
    "A2934NF;AD23",
    "DL",
    "IT / GST Returns"
  ),
  createData(
    "12 Feb 2021",
    "Full Client Name 13",
    "Employee Name",
    "A2934NF;AD23",
    "DL",
    "IT / GST Returns"
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const TOTAL_TASKS = 35;

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "uploadedOn",
    numeric: false,
    disablePadding: false,
    label: "Uploaded On",
  },
  {
    id: "uploadedBy",
    numeric: false,
    disablePadding: false,
    label: "Uploaded By",
  },
  {
    id: "docTitle",
    numeric: true,
    disablePadding: false,
    label: "Document Title",
  },
  {
    id: "serNo",
    numeric: true,
    disablePadding: false,
    label: "Serial No.",
  },
  {
    id: "docType",
    numeric: true,
    disablePadding: false,
    label: "Document Type",
  },
  {
    id: "docCategory",
    numeric: false,
    disablePadding: false,
    label: "Document Category",
  },
];

interface DocsTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function DocsTableHead(props: DocsTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface DocsTableToolbarProps {
  numSelected: number;
}

export default function DocsTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("uploadedOn");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.uploadedOn);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%", padding: 2, background: "#fff" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            className="custom-table"
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <DocsTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.uploadedOn)}
                      tabIndex={-1}
                      key={row.uploadedOn}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.uploadedOn}
                      </TableCell>
                      <TableCell align="left">{row.uploadedBy}</TableCell>
                      <TableCell align="left">{row.docTitle}</TableCell>
                      <TableCell align="left">{row.serNo}</TableCell>
                      <TableCell align="left">{row.docType}</TableCell>
                      <TableCell width={270} align="left">
                        <Grid container alignItems="center">
                          <Grid item xs={7}>
                            {row.docCategory}
                          </Grid>
                          <Grid item xs={5} textAlign="center">
                            <span
                              style={{
                                marginLeft: 12,
                              }}
                            >
                              <IconButton
                                size="small"
                                color="primary"
                                style={{
                                  background: "#F2F9FF",
                                  border: 0.8,
                                  borderRadius: 3,
                                }}
                              >
                                <ChevronRight />
                              </IconButton>
                            </span>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            className="custom-table-pagination"
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Paper>
    </Box>
  );
}
