import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import tw from "twin.macro";


const Table = tw.table`
  table-fixed
  text-base
  text-gray-900
`;

const TableHead = tw.thead`
  p-2
`;

const TableRow = tw.tr`
border
border-green-500
`;

const TableHeader = tw.th`
border
border-green-500
p-2
`;

const TableBody = tw.tbody`

`;

const TableData = tw.td`
border
border-green-500
p-5
`;

const Button = tw.button`
  pl-4
  pr-4
  pt-2
  pb-2
  text-black
  rounded-md
  bg-green-300
  hover:bg-green-200
  transition-colors
`;

export default function Products() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        console.log("start to load product");
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => console.log(err));

        if (response) {
            const products = response.data;

            console.log("Products: ", products);
            setProducts(products);
        }
    };

    const data = useMemo(
        () => [
            {
                id: 1,
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                price: 109.95,
                description:
                    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                category: "men's clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                rating: {
                    rate: 3.9,
                    count: 120,
                },
            },
            {
                id: 1,
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                price: 109.95,
                description:
                    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                category: "men's clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                rating: {
                    rate: 3.9,
                    count: 120,
                },
            },
            {
                id: 1,
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                price: 109.95,
                description:
                    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                category: "men's clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                rating: {
                    rate: 3.9,
                    count: 120,
                },
            },
        ],
        []
    );

    

    const columns = useMemo(
        () => [
            {
                Header: "Id",
                accessor: "id",
            },
            {
                Header: "Price",
                accessor: "price",
            },
            {
                Header: "Title",
                accessor: "title",
            },
        ],
        []
    );

    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow,
    // } = useTable({
    //     columns,
    //     data,
    // })

    const productsData = useMemo(() => [...products], [products]);

    const productsColumns = useMemo(
        () => products[0]
            ? Object.keys(products[0])
                .filter((key) => key !== "rating")
                .map((key) => {
                    if (key === "image")
                        return {
                            Header: key,
                            accessor: key,
                            Cell: ({ value }) => <img src={value} />,
                            maxWidth: 70,
                        };
                    return { Header: key, accessor: key };
                }) : [],
        [products]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns: productsColumns,
            data: productsData,
          }
    );

    useEffect(() => {
        fetchProducts();
      }, []);

    // Render the UI for your table
    return (
        <Table {...getTableProps()}>
            <TableHead>
                {headerGroups.map(headerGroup => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableHeader {...column.getHeaderProps()}>{column.render('Header')}</TableHeader>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <TableData {...cell.getCellProps()}>{cell.render('Cell')}</TableData>
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}
