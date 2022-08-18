import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CatergoryItem'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`

const Category = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item}></CategoryItem>
      ))}
    </Container>
  )
}

export default Category
