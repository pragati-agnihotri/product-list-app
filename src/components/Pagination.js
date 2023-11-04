import React from 'react';
import styled from 'styled-components';

const PageList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
`;

const PageItem = styled.li`
  margin: 0 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const PageButton = styled.button`
  background-color: #E74C3C;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin-left: 15%;
  &:hover {
    background-color: #E74C3C;
  }
`;

function Pagination({ currentPage, productsPerPage, totalProducts, setCurrentPage }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <PageList>
            {pageNumbers.map((number) => (
                <PageItem key={number}>
                    <PageButton onClick={() => handlePageClick(number)}>{number}</PageButton>
                </PageItem>
            ))}
        </PageList>
    );
}

export default Pagination;
